import React from "react"
import { NativeRouter, Route, Routes } from "react-router-native"
import { View, StyleSheet } from "react-native";

//Route
import HomePage from './view/HomePage';
import FormProduct from "./view/FormProduct";
import DisplayProducts from "./view/DisplayProducts";
import Search from "./view/Search";
import SignIn from "./view/SignIn";
import SignUp from "./view/SignUp";
import ResetPassword from "./view/ResetPassword";

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
          <Route exact path="/products/#fruitNvegetable" element={<DisplayProducts />} />
          <Route exact path="/products/#meat" element={<DisplayProducts />} />
          <Route exact path="/products/#divers" element={<DisplayProducts />} />
          <Route exact path="/connexion" element={<SignIn />} />
          <Route exact path="/connexion/inscription" element={<SignUp />} />
          <Route exact path="/connexion/resetpassword" element={<ResetPassword />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </View>
      <Footer />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
