import { useState } from "react";
import { 
    SafeAreaView, 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    ScrollView, 
    Platform, 
    TouchableWithoutFeedback, 
    Keyboard,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Circles } from "../visualComponents/Circles";

export function RegisterPage() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={styles.keyboardAvoidingView}
            >
                <Circles />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Regístrate</Text>


                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Nombre"
                            />
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Apellido"
                            />
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Email"
                            />
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Teléfono"
                            />
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Dirección"
                            />
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Contraseña"
                                secureTextEntry
                            />

                            <BouncyCheckbox
                                size={25}
                                fillColor="#d2e974"
                                unFillColor="#d2e974"
                                text="Aceptar términos y condiciones"
                                iconStyle={{ borderColor: "#d2e974" }}
                            />
                            <BouncyCheckbox
                                size={25}
                                fillColor="#d2e974"
                                unFillColor="#d2e974"
                                text="Acepta recibir correos electrónicos publicitarios, y unirse a la newSeller"
                                iconStyle={{ borderColor: "#d2e974" }}
                            />

                            <TouchableOpacity style={styles.buttonRegister}>
                                <Text style={styles.buttonText}>Registrarme</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: '90%',
        alignItems: 'center',
        paddingVertical: 20,
        gap: 5,
    },
    text: {
        alignSelf: 'flex-start',
        fontSize: 20,
        marginBottom: 10,
    },
    inputStyle: {
        height: 50,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 2,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    buttonRegister: {
       
        paddingVertical: 10,
        borderRadius: 20,
        width: "100%",
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 2,
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
});
