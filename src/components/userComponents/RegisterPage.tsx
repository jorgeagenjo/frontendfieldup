import { useState } from "react";
import axios from "axios";
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
    Image
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Circles } from "../visualComponents/Circles";

export function RegisterPage() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [aceptaPublicidad, setAceptaPublicidad] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const isEmpty = (value: string) => !value.trim();

    const handleRegister = async () => {
        setSubmitted(true); 

        if (
            isEmpty(nombre) ||
            isEmpty(apellido) ||
            isEmpty(email) ||
            isEmpty(telefono) ||
            isEmpty(direccion) ||
            isEmpty(contraseña) ||
            !aceptaTerminos
        ) {
            return;
        }

        try {
            const response = await axios.post('https://fairplay/register', {
                nombre,
                apellido,
                email,
                telefono,
                direccion,
                contraseña,
                aceptaTerminos,
                aceptaPublicidad,
            });
            console.log('Registro exitoso:', response.data);
        } catch (error: any) {
            console.error('Error al registrarse:', error.response?.data || error.message);
        }
    };

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

                            <Image style={styles.logoImg} source={require("../../assets/images/imagotipo_2_negativo.png")} />
                            <Text style={styles.textTitle}>Regístrate</Text>

                            {submitted && (
                                (!nombre || !apellido || !email || !telefono || !direccion || !contraseña || !aceptaTerminos) ? (
                                    <Text style={styles.errorText}>Completa todos los campos obligatorios *</Text>
                                ) : null
                            )}

                            <Text style={styles.label}>Nombre <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={[styles.inputStyle, submitted && isEmpty(nombre) && styles.inputError]}
                                placeholder="Nombre"
                                value={nombre}
                                onChangeText={setNombre}
                            />

                            <Text style={styles.label}>Apellido <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={[styles.inputStyle, submitted && isEmpty(apellido) && styles.inputError]}
                                placeholder="Apellido"
                                value={apellido}
                                onChangeText={setApellido}
                            />

                            <Text style={styles.label}>Email <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={[styles.inputStyle, submitted && isEmpty(email) && styles.inputError]}
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                            <Text style={styles.label}>Teléfono <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={[styles.inputStyle, submitted && isEmpty(telefono) && styles.inputError]}
                                placeholder="Teléfono"
                                value={telefono}
                                onChangeText={setTelefono}
                                keyboardType="phone-pad"
                            />

                            <Text style={styles.label}>Dirección <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={[styles.inputStyle, submitted && isEmpty(direccion) && styles.inputError]}
                                placeholder="Dirección"
                                value={direccion}
                                onChangeText={setDireccion}
                            />

                            <Text style={styles.label}>Contraseña <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={[styles.inputStyle, submitted && isEmpty(contraseña) && styles.inputError]}
                                placeholder="Contraseña"
                                value={contraseña}
                                onChangeText={setContraseña}
                                secureTextEntry
                            />

                            <BouncyCheckbox
                                size={25}
                                fillColor="#d2e974"
                                unFillColor="#d2e974"
                                text="Aceptar términos y condiciones *"
                                iconStyle={{ borderColor: submitted && !aceptaTerminos ? "red" : "#d2e974" }}
                                isChecked={aceptaTerminos}
                                onPress={setAceptaTerminos}
                            />
                            <BouncyCheckbox
                                size={25}
                                fillColor="#d2e974"
                                unFillColor="#d2e974"
                                text="Acepta recibir correos electrónicos publicitarios, y unirse a la newSeller"
                                iconStyle={{ borderColor: "#d2e974" }}
                                isChecked={aceptaPublicidad}
                                onPress={setAceptaPublicidad}
                            />

                            <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
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
    logoImg: {
        width: 220,
        height: 220,
        borderRadius: 10,
        marginBottom:-90,
        top:-45
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    required: {
        color: "red",  
    },
    inputContainer: {
        width: '90%',
        alignItems: 'center',
        paddingVertical: 20,
        gap: 0,
    },
    textTitle: {
        alignSelf: 'flex-start',
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 0,
        fontSize: 12,
        fontWeight: '500',
    },
    inputStyle: {
        height: 45,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 2,
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
        paddingVertical: 10,
        borderRadius: 20,
        width: "100%",
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 10,
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
    },
});
