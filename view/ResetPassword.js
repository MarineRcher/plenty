import { useNavigate } from "react-router-native"
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Logo from '../assets/image/Logo.png';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';

const ResetPassword = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');


    const onSignInPressed = () => {
        console.warn("Remplissez vos identifiants");
    }

    const onForgotPasswordPressed = () => {
        navigate('/connexion/ResetPassword');
    }

    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    }

    const onSignUpPress = () => {
        navigate('/connexion/inscription');  
    }

    const navigate = useNavigate();
    return (
        <ScrollView>
            <View style={styles.root}>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Mot de passe"
                    value={password}
                    setValue={setPassword}
                />
                <CustomInput
                    placeholder="Confirmation mot de passe"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                />

                <CustomButton
                    text="Changer de mot de passe"
                    onPress={onSignInPressed}
                />

                <CustomButton
                    text="Vous n'avez pas de compte ? Inscivez-vous"
                    onPress={onSignUpPress}
                    type="TIERT"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root:
    {
        alignItems: 'center',

    },

    logo: {
        borderRadius: 7,
        maxWidth: 200,
        maxHeight: 200,
        margin: 60,
    },


});

export default ResetPassword
