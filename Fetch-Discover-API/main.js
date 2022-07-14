const url = "http://localhost:5500/api"

//GET
function getUsers() {
    fetch(url)
    .then(response => (response.json())) //retorna na tela o JSON
    //atribuindo no text da div do html todo o resultado da api, (JSON.stringify para poder ler o JSON)
    .then(data => renderApiResult.textContent = JSON.stringify(data)) 
    .catch(error => console.error(error))
}

//GET com parametro
function getUser(id) {
    fetch(`${url}/${id}`) //pegando o id 1 da api
    .then(response => (response.json())) //retorna na tela o JSON
    .then(data => {
            //atribuindo no text das tags do html o respectivo item do object da api
            userName.textContent = data.name
            userCity.textContent = data.city 
            userAvatar.src = data.avatar      
    })
    .catch(error => console.error(error))
}

//POST 
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: "Rafael Prestes",
    avatar: "https://avatars.githubusercontent.com/u/64441986?v=4",
    city: "Votorantim"
}

//PUT
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.error(error))
}

const updatedUser = {
    name: "Luis Carlos",
    avatar: "https://picsum.photos/200/300/",
    city: "Votorantim - Vila nova"
}

//DELETE
function deleteUser(id) {
    fetch(`${url}/${id}`, {
        //delete nao precisa do body 
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.error(error))
}

//Chamando as funções
// addUser(newUser)
// updateUser(updatedUser, 4)
// deleteUser(5)
getUsers()
getUser(4)
