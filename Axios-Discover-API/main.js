const url = "http://localhost:5500/api"

//GET
function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

//GET com parametros
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city 
        userID.textContent = data.id   
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

//POST
function addUser(){ 
    axios.post(url, newUser)     
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
const newUser = {
    name: "Rafael Axios",
    avatar: "https://picsum.photos/200/300/",
    city: "Vila Nova"
}

//PUT
function updateUser(id, userUpdated) { //passando como parametro o id e a const com os dados armazenados
    axios.put(`${url}/${id}`, userUpdated) //passando como segundo parametro para o put
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
const userUpdated = { //constante para armazenar o update do usuario
    name: "Rafael Updated",
    city: "Votorantim - SP",
    avatar: "https://picsum.photos/200/300/" 
}

//DELETE
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}



//Chamando Funções
getUsers()
getUser(3)
deleteUser(6)
// updateUser(3, userUpdated)
// addUser(newUser)