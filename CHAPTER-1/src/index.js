const express = require('express')
const crypto = require('crypto')

const app = express()
const accounts = []

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

app.get('/statement', (request, response) => {
    const { cpf } = request.headers
    const account = accounts.find(account => account.cpf === cpf)

    if (!account) {
        return response.status(400).json({ error: 'Non-Existent account, please register your account' })
    }

    return response.json(account.statement)
})

app.listen(3331, () => console.log('Server running at PORT: 3331 =)'))