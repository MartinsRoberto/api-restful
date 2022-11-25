const express = require('express')
const db = require('./database/db')
const routes = require('./routes/routes')


const app = express()

app.use(express.static(__dirname + '/public'));

// conexão com o banco de dados
db.connect()

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))