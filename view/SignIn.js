
import { useNavigate } from "react-router-native"
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Logo from '../assets/image/Logo.png';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import { getUsers } from "../api/users";

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [users, setUsers] = useState([]);

    const onSignInPressed = () => {
        console.warn("Remplissez vos identifiants");
    }

    const onForgotPasswordPressed = () => {
        navigate('/connexion/resetpassword');
    }

    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    }

    const onSignUpPress = () => {
        navigate('/connexion/inscription');
    }

    const navigate = useNavigate();

    const getListUsers = async () => { 
        const responseListUsers = await getUsers() 
        setUsers(responseListUsers)

    }

    useEffect(() => {
         getListUsers()
        }, [] )

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

                <CustomButton
                    text="Connexion"
                    onPress={onSignInPressed}
                />

                <CustomButton
                    text="Mot de passe oublié"
                    onPress={onForgotPasswordPressed}
                    type="TIERT"
                />

                <CustomButton
                    text="Se connecter avec Google"
                    onPress={onSignInGoogle}
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

export default SignIn
