
import { useNavigate } from "react-router-native"
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import Logo from '../assets/image/Logo.png';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onSignInPressed = () => {
        console.warn("Remplissez vos identifiants");
    }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    }

    const onSignUpPress = () => {
        console.warn('onSignUpPress');
    }

    const navigate = useNavigate();
    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Créer un compte</Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Mot de passe"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomInput
                    placeholder="Répeter le mot de passe"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Inscription"
                    onPress={onSignInPressed}
                />

                <CustomButton
                    text="S'inscrire avec Google"
                    onPress={onSignInGoogle}
                />


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root:
    {
        alignItems: 'center',
        marginTop: 86,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
    },


});

export default SignUp;