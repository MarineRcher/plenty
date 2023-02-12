import React from "react"
import { View, StyleSheet, Image, Text } from "react-native"


export const CardProduct = props => {
    return (
        <View>
            <Image source={{uri : props.image}} />
            <Text>{props.name}</Text>
            <Text>{props.store}</Text>
            <Text>{props.price}</Text>
        </View>
    )
}

//style
const styles = StyleSheet.create({
    container: {

    },
    image: {

    },
    title: {

    }
})