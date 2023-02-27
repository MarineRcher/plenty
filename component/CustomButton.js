import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

        minWidth: '90%',

        padding: 15,
        marginVertical: 15,

        alignItems: 'center',
        borderRadius: 5,

    },

    container_PRIMARY: {
        backgroundColor: 'black',
    },

    container_TIERT: {},
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
    text_TIERT: {
        color: 'gray',
    },
})

export default CustomButton