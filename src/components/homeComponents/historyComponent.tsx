import React from "react";
import { 
    SafeAreaView, 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions, 
    FlatList 
} from "react-native";
import { Circles } from "../visualComponents/Circles";

const { width } = Dimensions.get('window');

const matches = [
    {
        id: '1',
        name: 'Padel Velo',
        time: '18:00',
        date: '06/02/2025',
        image: require('../../assets/images/padelvelo.jpeg')
    },
    {
        id: '2',
        name: 'Los Nogales',
        time: '22:00',
        date: '10/02/2025',
        image: require('../../assets/images/losnogales.jpeg')
    },
];

export function History() {
    return (
        <SafeAreaView style={styles.container}>
            <Circles />
            <View style={styles.header}>
                <Text style={styles.title}>Historial de reservas</Text>
            </View>
            <View style={styles.separator} />
            <FlatList 
                data={matches}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.matchContainer}>
                        <Image 
                            source={item.image}
                            style={styles.image} 
                        />
                        <View style={styles.infoContainer}>
                            <Text style={styles.matchName}>{item.name}</Text>
                            <Text style={styles.matchTime}>Hora: {item.time}</Text>
                            <Text style={styles.matchTime}>Día: {item.date}</Text>
                            <TouchableOpacity style={styles.cancelButton}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modifyButton}>
                                <Text style={styles.buttonText}>Modificar Día</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: width * 0.05,
        backgroundColor: "#F0F0EC",
    },
    header: {
        alignItems: 'center',
        marginBottom: width * 0.05,
    },
    title: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
    },
    matchContainer: {
        backgroundColor: '#ffff',
        padding: width * 0.04,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: width * 0.05,
    },
    image: {
        width: width * 0.25,
        height: width * 0.3,
        borderRadius: 10,
        marginRight: width * 0.045,
    },
    infoContainer: {
        flex: 1,
    },
    matchName: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        marginBottom: width * 0.008,
    },
    matchTime: {
        fontSize: width * 0.04,
        color: '#666',
        marginBottom: width * 0.005,
    },
    cancelButton: {
        backgroundColor: '#BEDB41',
        padding: width * 0.03,
        borderRadius: 5,
        marginBottom: width * 0.02,
    },
    modifyButton: {
        backgroundColor: '#d2e974',
        padding: width * 0.03,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    separator: {
        height: 2,
        backgroundColor: 'black',
        marginVertical: 10,
        marginBottom:25,
        width: "100%"
    },
});
