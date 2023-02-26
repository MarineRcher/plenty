//Page qui permet de faire des requêtes en rapport avec les produits
import axios from 'axios'

//GET*******************************************************
//Permet de récupérer tous les produits
export const getProducts = async () => {
    const url = "http://51.195.44.176:3001/products/"
    try {
        // const response = await fetch(url, {
        //     method: "GET",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-type": "application/json"
        //     }
        // })
        // return JSON.stringify(response)
        const response = await axios.get(url)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

//Permet de récupérer un produit avec son id 
export const getProductById = async (id) => {
    const url = process.env.BASE_URL + "products/" + id
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
//Permet de rajouter une recette
export const addProduct = async (data) => {
    const url = process.env.BASE_URL + "products/"
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