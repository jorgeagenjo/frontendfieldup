import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Switch, StyleSheet } from 'react-native';

const ReservarPista = () => {
    const [selectedDate, setSelectedDate] = useState('30 Ene');
    const [selectedTime, setSelectedTime] = useState('10:00');
    const [showAvailable, setShowAvailable] = useState(true);

    const dates = [
        { day: 'JUE', date: '30 Ene' },
        { day: 'VIE', date: '31 Ene' },
        { day: 'SÁB', date: '01 Feb' },
        { day: 'DOM', date: '02 Feb' },
        { day: 'LUN', date: '03 Feb' }
    ];

    const times = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'];

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/losnogales.jpeg')} style={styles.image} />
            <Text style={styles.title}>Pádel Los Nogales</Text>
            <Text style={styles.subtitle}>Paseo Imperial, 26 (entrada por Sta Maria la Real...)</Text>           
            <View style={styles.tabContainer}>
                <Text style={[styles.tab, styles.activeTab]}>Reservar</Text>
            </View>
            <FlatList
                horizontal
                data={dates}
                keyExtractor={(item) => item.date}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[styles.dateBox, item.date === selectedDate && styles.selectedDate]} 
                        onPress={() => setSelectedDate(item.date)}
                    >
                        <Text style={[styles.dateText, item.date === selectedDate && styles.selectedDateText]}>{item.day}</Text>
                        <Text style={[styles.dateText, item.date === selectedDate && styles.selectedDateText]}>{item.date}</Text>
                    </TouchableOpacity>
                )}
            />

            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Mostrar solo las horas disponibles</Text>
                <Switch value={showAvailable} onValueChange={setShowAvailable} />
            </View>

            <FlatList
                numColumns={3}
                data={times}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[styles.timeBox, item === selectedTime && styles.selectedTime]} 
                        onPress={() => setSelectedTime(item)}
                    >
                        <Text style={[styles.timeText, item === selectedTime && styles.selectedTimeText]}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        padding: 16
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
    },
    subtitle: {
        fontSize: 14,
        color: '#777',
        marginBottom: 10
    },
    tabContainer: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#DDD'
    },
    tab: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        padding: 10,
        color: '#888'
    },
    activeTab: {
        fontWeight: 'bold',
        color: '#BEDB41',
        borderBottomWidth: 3,
        borderColor: '#BEDB41'
    },
    dateBox: {
        padding: 10,
        margin: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CCC',
        alignItems: 'center'
    },
    selectedDate: {
        backgroundColor: '#BEDB41',
        borderColor: '#BEDB41'
    },
    dateText: {
        fontSize: 14,
        color: '#000'
    },
    selectedDateText: {
        color: '#FFF'
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 14,
        color: '#555'
    },
    timeBox: {
        padding: 15,
        margin: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CCC',
        alignItems: 'center'
    },
    selectedTime: {
        backgroundColor: '#BEDB41',
        borderColor: '#BEDB41'
    },
    timeText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    selectedTimeText: {
        color: '#FFF'
    }
});

export default ReservarPista;
