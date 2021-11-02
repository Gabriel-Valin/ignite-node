const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    return response.json({health: 'Is up!'})
})

app.get('/courses', (request, response) => {
    
    // http://localhost:<PORT>/courses?page=1&order=asc
    // page=1 & order=asc = Query Params

    return response.json(['L0rem1, l0rem2, lor3m'])
})

app.post('/courses', (request, response) => {

    // JSON, insert a new user by example:
    // { username: 'gabriel valin', years_old: 22 }

    console.log(request.body)
    return response.json(['L0rem1, l0rem2, lor3m, loR3m'])
})

app.put('/courses/:id', (request, response) => {
    
    // http://localhost:<PORT>/courses/id 
    // id = Route Param

    console.log(request.params)
    return response.json(['update-with-put, l0rem2, lor3m, loR3m'])
})

app.patch('/courses/:id', (request, response) => {
    return response.json(['update-with-patch, l0rem2, lor3m, loR3m'])
})

app.delete('/courses/:id', (request, response) => {
    return response.json(['l0rem2, lor3m, loR3m'])
})

app.listen(3331, () => console.log('Server running at PORT: 3331 =)'))