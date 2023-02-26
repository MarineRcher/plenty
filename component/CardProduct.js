import React from "react"
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"

//style
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faExclamation } from "@fortawesome/free-solid-svg-icons"

export const CardProduct = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.column}>
                <Text>{props.name}</Text>
                <Text>{props.store}</Text>
                <Text>{props.price}</Text>
            </View>
            <TouchableOpacity style={styles.signal}>
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