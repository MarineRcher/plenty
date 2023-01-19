import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigate } from 'react-router-native'
//style
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faUser, faGear } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    const navigate = useNavigate()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigate('/')}>
                <FontAwesomeIcon
                    size={40}
                    icon={faHouse}
                    style={styles.icons}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigate('/')}>
                <FontAwesomeIcon
                    size={40}
                    icon={faUser}
                    style={styles.icons}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigate('/')}>
                <FontAwesomeIcon
                    size={40}
                    icon={faGear}
                    style={styles.icons} />
            </TouchableOpacity >
        </View>

    )
}

//style
const styles = StyleSheet.create({
    container: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 50,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    icons: {
    }
})