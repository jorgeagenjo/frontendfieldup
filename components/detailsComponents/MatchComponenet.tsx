import { useState } from "react";
import { View, SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { Circles } from "../visualComponents/Circles";
const { width } = Dimensions.get("window");

export function MatchComponent() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Circles />
     
    
    </SafeAreaView>
    
  );
}

const userInfo = [
  { icon: require("../../assets/images/avatar.png"), text: "Pepe Vegas Maldonado" },
  { icon: require("../../assets/images/telefono.png"), text: "640802061" },
  { icon: require("../../assets/images/home.png"), text: "C/Gabriela Mistral, 3" },
  { icon: require("../../assets/images/deportes.png"), text: "Padel" },
  { icon: require("../../assets/images/contraseña.png"), text: "********" },
];

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingTop:width * 0.06,
  },
  perfilImg: {
    height: width * 0.3,
    width: width * 0.3,
    borderRadius: width * 0.15,
    borderWidth: 3,
    borderColor: "black",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: width * 0.2,
  },
  userText: {
    color: "black",
    fontSize: width * 0.04,
  },
  detailsContainer: {
    marginTop: width * 0.1,
    gap: width * 0.05,
    width: "90%",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.03,
  },
  avatar: {
    height: width * 0.12,
    width: width * 0.12,
  },
  buttonRegister: {
    paddingVertical: width * 0.025,
    borderRadius: width * 0.05,
    width: "100%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
});
