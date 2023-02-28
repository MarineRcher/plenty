import React from "react"
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from "react-native"
import axios from 'axios'

//style
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faExclamation } from "@fortawesome/free-solid-svg-icons"

//import api 
import { addReport } from "../api/product"

export const CardProduct = props => {
    const addReport = async (id) => {
        if (props.reports < 5) {
            try {
                axios.put("http://51.195.44.176:3001/products/report/" + id)
                Alert.alert("Votre signalement a bien été pris en compte")
            } catch (err) {
                console.log(err)
            }
            //addReport(id)

            //props.getProduct()
        } else if (props.reports >= 5) {
            axios.delete("http://51.195.44.176:3001/products/" + id)
            Alert.alert("Votre signalement a bien été pris en compte, l'article sera supprimé")
            //props.getProduct()
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.column}>
                <Text>{props.name}</Text>
                <Text>{props.store}</Text>
                <Text>{props.price.toFixed(2)} €</Text>
            </View>
            <TouchableOpacity style={styles.signal} onPress={() => addReport(props.id)}>
                <FontAwesomeIcon
                    size={30}
                    icon={faExclamation}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

//style
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,

    },
    column: {
        display: "flex",
        FklexDirection: "column",
        width: "70%"
    },
    image: {
        height: 50,
        width: 50,
        borderWidth: 1,
        marginRight: 20,
    },
    signal: {
        display: "flex",
        justifyContent: "center"
    },
    icon: {
        color: "red"
    }
})