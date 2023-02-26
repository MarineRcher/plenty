import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { useNavigate, useLocation } from 'react-router-native'
import DropDownPicker from 'react-native-dropdown-picker'

//import des composants
import { CardProduct } from '../component/CardProduct'

//import de l'api 
import { getProducts } from '../api/product'

//import data
import { product } from '../data'

export default function DisplayProducts(props) {
    const location = useLocation()
    const [productList, setProductList] = useState([])
    const [selectedTags, setSelectedTags] = useState(location.state !== null ? location.state.tags : [])
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState(product)

    //initalisation fonction 
    const getProducts = async () => {
        const url = "http://51.195.44.176:3001/products/"
        try {
            const response = await axios.get(url)
            console.log(response.data)
            setProductList(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                style={{ marginBottom: 20 }}
                multiple={true}
                min={0}
                max={4}
                value={selectedTags}
                items={items}
                setOpen={setOpen}
                setValue={setSelectedTags}
                setItems={setItems}
            />
            <Text>Retrouver ici tous nos produits les moins chers</Text>

            {productList.map((product, key) => {
                return selectedTags.length === 0 ? (
                    <CardProduct
                        image={product.image || ""}
                        name={product.name}
                        store={product.store}
                        price={product.price}
                    />
                ) : (
                    selectedTags.map((tag, key) => {
                        return tag === product.tag ? (
                            <CardProduct
                                image={product.image}
                                name={product.name}
                                store={product.store}
                                price={product.price}
                            />
                        ) : null

                    })
                )
            })}


        </View>
    )
}

//style
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-around'
    }
})