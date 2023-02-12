import React from "react"
import { View, StyleSheet, Image, Text } from "react-native"


export const CardProduct = props => {
    console.log(props)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.column}>
                <Text>{props.name}</Text>
                <Text>{props.store}</Text>
                <Text>{props.price}</Text>
            </View>
        </View>
    )
}

//style
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 10,
        display: "flex",
        flexDirection : "row",
        marginBottom : 10,

    },
    column: {
        display : "flex", 
        FklexDirection : "column"
    },
    image: {
        height : 50,
        width : 50,
        borderWidth : 1,
        marginRight : 20,
    },
    title: {

    }
})