//Page qui permet de faire des requêtes en rapport avec les produits


//GET*******************************************************
//Permet de récupérer tous les produits
export const getProducts = async () => {
    const url = process.env.BASE_URL + "product"
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "applciation/json"
            }
        })
        return response
    } catch (err) {
        console.log(err)
    }
}

export const getProductsLocal = () => {
    const products = [
        { name: "lait", image: "https://media.auchan.fr/A0219950623000018801PRIMARY_2048x2048/B2CD/", magasin: "Lidl", prix: 0.75, tags: ["produits laitiers"] },
        { name: "confiture à la fraise", image: "https://www.bonnemaman.ch/uploads/catalogues_price_image/confiturePackaging-fraise.jpg", magasin: "Aldi", prix: 0.99, tags: ["divers"] }
    ]

    return products
}

//Permet de récupérer un produit avec son id 
export const getProductById = async (id) => {
    const url = process.env.BASE_URL + "product/" + id
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
    const url = process.env.BASE_URL + "product/"
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