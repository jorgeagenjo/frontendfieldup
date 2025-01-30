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
    Alert, 
    ActivityIndicator 
} from "react-native";
import { Circles } from "../visualComponents/Circles";
import axios from "axios";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const loginForm = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Por favor, completa todos los campos.");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("https://reqres.in/api/login", {
                email,
                password,
            });

            if (response.status === 200) {
                console.log("Inicio de sesión exitoso:", response.data.token);
              
            }
        } catch (error) {
            console.error("Error al iniciar sesión:");
            Alert.alert("Error al iniciar sesión", "Intenta de nuevo");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <Circles />
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={styles.keyboardAvoidingView}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Iniciar Sesión</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Contraseña"
                                value={password}
                                onChangeText={setPassword} 
                                secureTextEntry
                            />
                            {loading && <ActivityIndicator size="large" color="#BEDB41" />}
                            <TouchableOpacity 
                                style={styles.buttonRegister}
                                onPress={loginForm} 
                                disabled={loading}
                            >
                                <Text style={styles.buttonText}>Iniciar Sesión</Text>
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
        backgroundColor: "#BEDB41",
        paddingVertical: 10,
        borderRadius: 20,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
});
