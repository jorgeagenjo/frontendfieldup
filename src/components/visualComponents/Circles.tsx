import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window"); // Mover fuera de los estilos

export function Circles() {
    return (
        <>
            <View style={styles.circle1} />
            <View style={styles.circle2} />
            <View style={styles.circle3} />
            <View style={styles.circle4} />
        </>
    );
}

const styles = StyleSheet.create({
    circle1: {
        position: "absolute",
        width: width * 0.7,
        height: width * 0.7,
        borderRadius: (width * 0.7) / 2,
        backgroundColor: "#BEDB41",
        top: -height * 0.15,
        left: -width * 0.35,
    },
    circle2: {
        position: "absolute",
        width: width * 0.7,
        height: width * 0.7,
        borderRadius: (width * 0.7) / 2,
        backgroundColor: "#d2e974",
        top: -height * 0.25,
        left: width * 0.07,
    },
    circle3: {
        position: "absolute",
        width: width * 0.7,
        height: width * 0.7,
        borderRadius: (width * 0.7) / 2,
        backgroundColor: "#BEDB41",
        top: height * 0.8,
        right: -width * 0.3,
    },
    circle4: {
        position: "absolute",
        width: width * 0.7,
        height: width * 0.7,
        borderRadius: (width * 0.7) / 2,
        backgroundColor: "#d2e974",
        top: height * 0.9,
        right: width * 0.05,
    },
});
