import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { useNavigate, useLocation } from 'react-router-native'
import DropDownPicker from 'react-native-dropdown-picker'

//import des composants
import { CardProduct } from '../component/CardProduct'

//import de l'api 
import { getProducts, getProductsLocal } from '../api/product'

//import data
import { product } from '../data'

export default function DisplayProducts(props) {
    const location = useLocation()
    const [productList, setProductList] = useState([
        { name: "lait", image: "https://media.auchan.fr/A0219950623000018801PRIMARY_2048x2048/B2CD/", store: "Lidl", price: 0.75, tag: "produits laitiers" },
        { name: "confiture à la fraise", image: "https://www.bonnemaman.ch/uploads/catalogues_price_image/confiturePackaging-fraise.jpg", store: "Aldi", price: 0.99, tag: "divers" },
        { name: "carrote", image: "https://www.bonnemaman.ch/uploads/catalogues_price_image/confiturePackaging-fraise.jpg", store: "Aldi", price: 0.99, tag: "vegetables" }
    ])
    const [selectedTags, setSelectedTags] = useState(location.state !== null ? location.state.tags : [])
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState(product)

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
                        image={product.image}
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