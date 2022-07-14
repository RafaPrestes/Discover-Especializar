const express = require('express')
const axios = require('axios')

//inicializando o express
const app = express()

//falando pro navegador que irá rodar na porta 3000 do localhost
app.listen('3000')

app.route('/').get((req,res) => {
    axios.get('https://api.github.com/users/RafaPrestes') //pegando a api do github do meu perfil
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`)) // retornando em formato de html a imagem do perfil, caso queira retornar tudo usar apenas result.data
    .catch(error => console.error(error)) //se algo der errado retornar o erro 
})