import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'

//import des composants
import { CardProduct } from '../component/CardProduct'

//import de l'api 
import { getProducts, getProductsLocal } from '../api/product'

export default function DisplayProducts() {
    const [productList, setProductList] = useState()
    const products = [
        { name: "lait", image: "https://media.auchan.fr/A0219950623000018801PRIMARY_2048x2048/B2CD/", magasin: "Lidl", prix: 0.75, tags: ["produits laitiers"] },
        { name: "confiture à la fraise", image: "https://www.bonnemaman.ch/uploads/catalogues_price_image/confiturePackaging-fraise.jpg", magasin: "Aldi", prix: 0.99, tags: ["divers"] }
    ]

    const getListProduct = () => {
        const response = getProductsLocal()
        setProductList(response)
    }

    useEffect(() => {
        getListProduct()
        console.log(products)
    }, [])

    return (
        <View>
            <Text>Retrouver ici tous nos produits les moins chers</Text>
            {products.map((product, index) => (
                <CardProduct
                    image={product.image}
                    name={product.name}
                    store={product.store}
                    price={props.price}
                />
            ))}

            
        </View>
    )
}

//style
const styles = StyleSheet.create({

})