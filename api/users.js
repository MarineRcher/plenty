//Page qui permet de faire des requêtes en rapport avec les produits
import axios from 'axios'

//GET*******************************************************
//Permet de récupérer tous les users
export const getUsers = async () => {
    const url = "http://172.20.10.2:3000/users"
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
               "Content-type": "application/json"
             }
         })
         return JSON.stringify(response)
    
       
    } catch (err) {
        console.log(err)
    }
}

//Permet de récupérer un user avec son id 
export const getUsersById = async (id) => {
    const url = "http://172.20.10.2:3000/users/" + id
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        })
        return response
    } catch (err) {
        console.log(err)
    }
}

//POST ***************************************************
//Permet de rajouter un user
export const addUsers = async (data) => {
    const url = "http://172.20.10.2:3000/users"
  try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "applciation/json"
            },
            body: JSON.stringify(data)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}


//PUT *******************************************************
//modifier mot de passe
export const updateUser  = async (data) => {
    const url = "http://172.20.10.2:3000/users/" + id
    try{
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-type": "applciation/json"
            },
            body: JSON.stringify(data)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
