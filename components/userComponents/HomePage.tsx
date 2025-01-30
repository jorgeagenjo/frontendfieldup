import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from "react-native";
import Video from "react-native-video";

const { width, height } = Dimensions.get("window");

export function HomePage({navigation}: {navigation: any}) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Video 
                source={require("../../assets/video/padelBlack.mp4")}
                style={styles.backgroundVideo}
                resizeMode="cover" 
                repeat 
                muted 
            />
            <View style={styles.overlay}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoImg} source={require("../../assets/images/fielUp.png")} />
                    <Text style={styles.fieldUp}>Field Up</Text>
                </View>
                <Text style={styles.title}>Únete a la mayor comunidad de deportistas</Text>
                <Text style={styles.subtitle}>Y encuentra tu partido perfecto</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('RegisterPage')}>
                        <Text style={styles.buttonText}>Registrarme</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('LoginPage')}>
                        <Text style={styles.buttonText1}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('MainTabs', { screen: 'UserDetails' })}>
                        <Text style={styles.buttonText1}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                   
                </View>
                <View style={styles.socialIcons}>
                    <Text style={styles.textSocial}>O continúa con:</Text>
                </View>
                <View style={styles.logoContainerSocial}>
                    <Image style={styles.images} source={require("../../assets/images/google.jpg")} />
                    <Image style={styles.images} source={require("../../assets/images/logoX.jpg")} />
                    <Image style={styles.images} source={require("../../assets/images/logoApple.png")} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    backgroundVideo: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: width,
        height: height,
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        paddingTop: height * 0.30,
    },
    title: {
        fontSize: width * 0.05,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "left",
        paddingHorizontal: width * 0.08,
    },
    subtitle: {
        fontSize: width * 0.035,
        color: "#FFF",
        textAlign: "left", 
        marginBottom: 20,
        paddingHorizontal: width * 0.085,  
        width: "100%",  
    },
    buttonContainer: {
        gap: 15,
    },
    buttonRegister: {
        backgroundColor: "#BEDB41",
        paddingVertical: height * 0.015,
        borderRadius: 20,
        width: width * 0.85,
        alignItems: "center",
    },
    buttonLogin: {
        paddingVertical: height * 0.015,
        borderRadius: 20,
        width: width * 0.85,
        alignItems: "center",
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: width * 0.045,
    },
    buttonText1: {
        color: "white",
        fontWeight: "bold",
        fontSize: width * 0.045,
    },
    socialIcons: {
        flexDirection: "row",  
        marginTop: 10,
    },
    textSocial: {
        color: "white",
        fontSize: width * 0.035,
        paddingRight:width*0.52
    },
    images: {
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: 10,
    },
    logoImg: {
        width: width * 0.3,
        height: height * 0.08,
    },
    logoContainerSocial: {
        flexDirection: "row",  
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 10, 
        gap: 20,
    },
    fieldUp: {
        color: "white",
        fontSize: width * 0.07,
        marginLeft: -30,
        paddingRight: 225,
        alignSelf: "center"
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center", 
        marginBottom: 10,
    }
});
