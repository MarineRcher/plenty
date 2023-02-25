import React, { useState, useEffect } from 'react'
import { Button, TextInput, View, StyleSheet, Text, Image } from 'react-native'
import axios from "axios"

//import image
import searchImage from '../assets/searchImage.png'

export default function Search() {
    //initialisation valeur
    const [name, setName] = useState("")
    const [productList, setProductList] = useState([])

    //initialisation fonction 
    const getProducts = async (name) => {
        const response = await axios.get("" + name)
        setProductList(response)
    }

    //initialisation useEffect
    useEffect(() => {
        getProducts(name)
    }, [name])
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
                    title="Search"
                    onPress={() => console.log('oui')}
                >
                    Chercher</Button>
            </View>
            {productList.length === 0 ? (
                <View>
                    <Image
                        style={styles.image}
                        source={searchImage}
                    />
                    <Text style={{ textAlign: "center" }}>Rechercher tous les produits par leur nom</Text>
                </View>
            ) : (
                null
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