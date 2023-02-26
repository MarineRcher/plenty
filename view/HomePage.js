import React from "react"
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from "react-native"
import { useNavigate } from "react-router-native"


export default function HomePage() {
    const navigate = useNavigate()
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.productContainer}>
                    <TouchableOpacity onPress={() => navigate('/products')}>
                        <ImageBackground style={{ height: "100%", borderRadius: 5, borderWidth: 0.7 }} source={{ uri: "https://img.freepik.com/photos-gratuite/photographie-alimentaire-differents-fruits-legumes-surface-table-bois-blanc_1150-42603.jpg?w=2000" }}>
                            <Text style={{ fontSize: 20, color: "white", margin: 10, fontWeight: "bold" }}>Retrouvez ici tous les produits les moins chers</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigate('/products/#fruitNvegetable', { state: { tags: ["vegetables", "fruits"] } })}>
                        <ImageBackground style={{ borderRadius: 2, borderWidth: 0.7, height: 87, marginBottom: 4 }} source={{ uri: "https://blendsmooth.b-cdn.net/wp-content/uploads/2020/12/fruits-et-legumes.jpg" }}>
                            <Text style={styles.text}>Fruits/légumes</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('/products/#meat', { state: { tags: ["meat"] } })}>
                        <ImageBackground style={{ borderRadius: 2, borderWidth: 0.7, height: 87, marginBottom: 4 }} source={{ uri: "https://media.istockphoto.com/id/1288461867/fr/photo/vari%C3%A9t%C3%A9-de-steaks-de-viande-crue.jpg?b=1&s=612x612&w=0&k=20&c=jmFYb4IZgB2wxRFOg7RbeLsRhtWiR2HIGO7Ja05muKw=" }}>
                            <Text style={styles.text}>Viandes</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('/products/#divers', { state: { tags: ["divers"] } })}>
                        <ImageBackground style={{ borderRadius: 2, borderWidth: 0.7, height: 87 }} source={{ uri: "https://www.mgc-prevention.fr/wp-content/uploads/2016/01/fruits-secs_35177746.jpg" }}>
                            <Text style={styles.text}>Epicerie</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
            <Button title="Ajouter un produit" onPress={() => navigate('/form/product')}></Button>
        </View >
    )
}

//style
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 40,

    },
    productContainer: {
        textAlign: "center",
        width: "70%",
        height: 270,
        marginRight: 10,
        shadowColor: 'black',
        shadowRadius: 7,
        shadowOpacity: 0.2,
        elevation: 5
    },
    text: {
        marginBottom: 10,
        height: 84,
        paddingTop: 30,
        textAlign: "center",
        color: "white",
        fontWeight: "bolder"
    },
    button: {
        borderWidth: 0.7,
        borderRadius: 10,
        marginBottom: 10,
        height: 84,
        paddingTop: 30,
        textAlign: "center",
    },

})