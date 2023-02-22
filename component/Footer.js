import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from "react-native"
import { useNavigate } from 'react-router-native'
//style
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faUser, faGear } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    //intialisation des valeurs de bases
    const [keyboardStatus, setKeyboardStatus] = useState(false)
    const [text, setText] = useState('')

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        }

    }, [])

    const navigate = useNavigate()
    return (
        <View>
            {keyboardStatus === false ? (
                <View style={styles.container} >
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
            ) : null}
        </View>
    )
}

//style
const styles = StyleSheet.create({
    container: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 50,
        borderTopWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginBottom : 20,
    },
    icons: {
    }
})