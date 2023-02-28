import React, { useState, useEffect } from 'react'
import { Button, TextInput, View, StyleSheet, Text, Image } from 'react-native'
import axios from "axios"

//import image
import searchImage from '../assets/searchImage.png'

//import component
import { CardProduct } from '../component/CardProduct'

export default function Search() {
    //initialisation valeur
    const [name, setName] = useState("")
    const [productList, setProductList] = useState([])

    //initialisation fonction 
    const getProducts = async (name) => {
        const response = await axios.get("http://51.195.44.176:3001/products/search/" + name)
        console.log(response.data)
        setProductList(response.data)
    }

    return (
        <View>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Votre recherche ...."
                />
                <Button
                    title="Chercher"
                    onPress={() => getProducts()}
                >
                    Chercher</Button>
            </View>
            {productList.length === 0 && name === "" ? (
                <View>
                    <Image
                        style={styles.image}
                        source={searchImage}
                    />
                    <Text style={{ textAlign: "center" }}>Rechercher tous les produits par leur nom</Text>
                </View>
            ) : (
                <View>
                    {productList !== "" || productList.length !== 0 ? (
                        <View>
                            {productList.map((product, key) => (
                                <CardProduct
                                    id={product.id}
                                    reports={product.reports}
                                    image={product.image}
                                    name={product.name}
                                    store={product.store}
                                    price={product.price}
                                    getProducts={getProducts()}
                                />
                            ))}
                        </View>
                    ) : (
                        <Text>Aucun résultat ....</Text>
                    )}
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: "80%"
    },
    searchBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    image: {
        width: 400,
        height: 400
    }
})