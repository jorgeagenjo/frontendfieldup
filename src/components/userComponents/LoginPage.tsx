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
    ActivityIndicator,
    Image
} from "react-native";
import { Circles } from "../visualComponents/Circles";
import axios from "axios";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const loginForm = async () => {
        setSubmitted(true);

        if (!email || !password) {
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
                Alert.alert("Inicio exitoso", response.data.token);
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
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
                             <Image style={styles.logoImg} source={require("../../assets/images/imagotipo_2_negativo.png")} />
                            <Text style={styles.title}>Iniciar Sesión</Text>

                            
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>
                                    Email <Text style={styles.required}>*</Text>
                                </Text>
                            </View>
                            <TextInput
                                style={[
                                    styles.inputStyle, 
                                    submitted && !email && styles.inputError
                                ]}
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                            
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>
                                    Contraseña <Text style={styles.required}>*</Text>
                                </Text>
                            </View>
                            <TextInput
                                style={[
                                    styles.inputStyle, 
                                    submitted && !password && styles.inputError
                                ]}
                                placeholder="Contraseña"
                                value={password}
                                onChangeText={setPassword} 
                                secureTextEntry
                            />

                            {submitted && (!email || !password) && (
                                <Text style={styles.errorText}>Completa todos los campos obligatorios *</Text>
                            )}

                            {loading && <ActivityIndicator size="large" color="#BEDB41" style={{ marginTop: 10 }} />}

                            <TouchableOpacity 
                                style={[styles.buttonRegister, loading && styles.buttonDisabled]}
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
    logoImg: {
        width: 220,
        height: 220,
        borderRadius: 10,
        marginBottom:-90,
        top:-70
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
    title: {
        alignSelf: 'flex-start',
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold",
    },
    labelContainer: {
        alignSelf: "flex-start",
        marginBottom: 5,
    },
    labelText: {
        fontSize: 12,
        fontWeight: "600",
    },
    required: {
        color: "red",
    },
    inputStyle: {
        height: 50,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    inputError: {
        borderColor: "red",
        borderWidth: 1,
    },
    buttonRegister: {
        backgroundColor: "#BEDB41",
        paddingVertical: 12,
        borderRadius: 20,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
    buttonDisabled: {
        backgroundColor: "#ccc",
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
        alignSelf: "flex-start",
        fontSize: 14,
    },
});
