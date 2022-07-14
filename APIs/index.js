const express = require('express')

const app = express()

app.listen('3000')

// Rota GET
// app.route('/').get((req,res) => res.send("Hello World!"))
// app.route('/sobre').get((req,res) => res.send("Hello Sobre!"))

//POST
// middleware (transformar em json)
app.use(express.json())
app.route('/').post((req,res) => res.send(req.body))


//PUT
//middleware (transformar em json)
app.use(express.json())

app.route('/').get((req,res) => res.send(author))

let author = "rafael"
app.route('/').put ((req,res) => {
    author = req.body.author
    res.send(author)
})

//DELETE
app.route('/:identificador').delete( (req,res) => {
    res.send(req.params.identificador)
})