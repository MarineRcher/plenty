import React, { useState } from "react"
import { Button, TextInput, View, StyleSheet, Alert, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Picker } from "react-native"
import { useForm, useController } from "react-hook-form"
import { useNavigate } from "react-router-native"
import * as ImagePicker from "expo-image-picker"
import DropDownPicker from "react-native-dropdown-picker"
import axios from "axios"

//import data
import { product } from "../data"

//Initialisation d'un input pour une utilisation simple de react-hook-form
const Input = ({ name, control }) => {
    const { field } = useController({
        control,
        defaultValue: '',
        name
    })
    return (
        <TextInput
            value={field.value}
            onChangeText={field.onChange}
            style={styles.textField}
        />
    )
}

export default function FormProduct() {
    //initialisation valeur ******************************************************
    const [photo, setPhoto] = React.useState(null)
    const [selectedTags, setSelectedTags] = useState()
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState(product)
    const navigate = useNavigate()

    const { handleSubmit, control } = useForm()

    //Initialisation fonction *****************************************************
    const onSubmit = data => {
        const sentData = {
            name: data.name,
            image: data.image || "",
            price: data.price,
            store: data.store,
            tag: selectedTags
        }
        Alert.alert(JSON.stringify(sentData))
        axios.post("http://51.195.44.176:3001/products", sentData,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })
    }

    const uploadImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        setPhoto(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Button title='Ajouter une image' onPress={uploadImage} />
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Mettre l'url d'une image</Text>
                        <Input name="image" control={control} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Nom du produit</Text>
                        <Input name="name" control={control} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Magasin</Text>
                        <Input name="store" control={control} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Prix</Text>
                        <Input name="price" control={control} />
                    </View>
                    <View style={styles.inputContainer}>
                        <DropDownPicker
                            open={open}
                            style={{ marginBottom: 20 }}
                            value={selectedTags}
                            items={items}
                            setOpen={setOpen}
                            setValue={setSelectedTags}
                            setItems={setItems}
                            containerStyle={{ backgroundColor: "white" }}
                        />
                    </View>
                    <View style={styles.containerButton}>
                        <Button
                            title="Ajouter un produit"
                            onPress={handleSubmit(onSubmit)}
                        />
                        <Button
                            title="Retour"
                            onPress={() => navigate('/')}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
    )
}

//style
const styles = StyleSheet.create({
    inputContainer: {
        margin: 10,
        width: 200,
    },
    inputTitle: {
        margin: 3
    },
    textField: {
        borderWidth: 0.7,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        textAlign: "center",
    },
    containerButton: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        zIndex: -5
    }

})