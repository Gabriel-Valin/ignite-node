const express = require('express')
const crypto = require('crypto')

const app = express()
const accounts = []

const existsCPF = (request, response, next) => {
    const { cpf } = request.headers
    const account = accounts.find(account => account.cpf === cpf)

    if (!account) {
        return response.status(400).json({ error: 'Non-Existent account, please register your account' })
    }

    request.account = account

    next()
}

const getBalance = (balance) => {
    const setBalance = balance.reduce((value, operation) => {
        if (operation.type === 'CREDIT') {
            return value + operation.amount
        } else {
            return value - operation.amount
        }
    }, 0)

    return setBalance
}

app.use(express.json())

app.post('/account', (request, response) => {
    const { cpf, name } = request.body
    const foundCpf = accounts.some(account => account.cpf === cpf)

    if (foundCpf) {
        return response.status(400).json({ error: 'CPF already registered!' })
    }

    const id = crypto.randomUUID

    accounts.push({ id, cpf, name, statement: [] })

    return response.sendStatus(201)
})

app.get('/statement', existsCPF,(request, response) => {
    const { account } = request
    return response.json(account.statement)
})

app.post('/deposit', existsCPF, (request, response) => {
    const { amount, description } = request.body

    const { account } = request

    const operationBanking = {
        description,
        amount,
        created_at: new Date(),
        type: 'CREDIT'
    }

    account.statement.push(operationBanking)

    return response.status(201).send()
})

app.post('/withdrawl', existsCPF, (request, response) => {
    const { account } = request
    const { amount } = request.body

    const setBalance = getBalance(account.statement)

    if (setBalance < amount) {
        return response.status(400).json({ error: 'Insufficient funds for withdrwal!' })
    }
  
    const operationBanking = {
        amount,
        created_at: new Date(),
        type: 'DEBIT'
    }

    account.statement.push(operationBanking)

    return response.status(201).send()

})

app.get('/statement/date', existsCPF,(request, response) => {
    const { account } = request
    const { date } = request.query

    const dateFormat = new Date(date + ' 00:00')

    const findAllStatements = account.statement.filter(statement => statement.created_at.toDateString() === new Date(dateFormat).toDateString())

    return response.status(200).json(findAllStatements)
})

app.listen(3331, () => console.log('Server running at PORT: 3331 =)'))