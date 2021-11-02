const express = require('express')

const app = express()

app.use(express.json())

app.listen(3331, () => console.log('Server running at PORT: 3331 =)'))