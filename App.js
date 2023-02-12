import React from "react"
import { NativeRouter, Route, Routes } from "react-router-native"
import { View, StyleSheet } from "react-native";

//Route
import HomePage from './view/HomePage';
import FormProduct from "./view/FormProduct";
import DisplayProducts from "./view/DisplayProducts";

//Header Footer
import Footer from "./component/Footer";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/form/product" element={<FormProduct />} />
          <Route exact path="/products" element={<DisplayProducts />} />
        </Routes>
      </View>
      <Footer />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
