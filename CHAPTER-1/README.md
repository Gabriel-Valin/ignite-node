<h2 align="center">
    Rocketseat - IGNITE - Chapter I<br>
</h2>

<div align="center">
    Full CRUD Operations
</div>


## :rocket: Content

## Features

  - Concept and theory of Middlewares
  - Implements all http methods (CRUD operaions too)
  - Using modern javascript (reduce, filter, find & some)
  EXAMPLES:

    ```
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
    ```
    ```
    const existsCPF = (request, response, next) => {
        const { cpf } = request.headers
        const account = accounts.find(account => account.cpf === cpf)

        if (!account) {
            return response.status(400).json({ error: 'Non-Existent account, please register your account' })
        }

        request.account = account

        next()
    }
    ```
    ```
    app.get('/statement/date', existsCPF,(request, response) => {
      const { account } = request
      const { date } = request.query

      const dateFormat = new Date(date + ' 00:00')

      const findAllStatements = account.statement.filter(statement => statement.created_at.toDateString() === new Date(dateFormat).toDateString())

      return response.status(200).json(findAllStatements)
    })
    ```
    - Rewriting request of Express
    - Requirements
    - Core business
<hr>

