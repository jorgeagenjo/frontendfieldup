import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const sportComponent = ({navigation}:{navigation:any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hola Iker 👋</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Juega tu partido perfecto</Text>
        <View style={styles.optionsGrid}>
          
          <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate('BuscadorPartidos')}>
          <Image source={require('../../assets/images/raquetapadel.png')} style={styles.optionImage} />
            <Text style={styles.optionTitle}>Padel</Text>
          </TouchableOpacity> 

          <TouchableOpacity style={styles.optionCard}>
          <Image source={require('../../assets/images/tenis.png')} style={styles.optionImage} />
            <Text style={styles.optionTitle}>Tenis</Text>
          </TouchableOpacity>          
          <TouchableOpacity style={styles.optionCard}>
          <Image source={require('../../assets/images/porteriafutbol.png')} style={styles.optionImage} />
            <Text style={styles.optionTitle}>Fútbol</Text>
          </TouchableOpacity>        
          <TouchableOpacity style={styles.optionCard}>
          <Image source={require('../../assets/images/baloncesto.png')} style={styles.optionImage} />
            o<Text style={styles.optionTitle}>Baloncesto</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#BEDB41',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    marginBottom: 16, // Espacio entre las filas
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  optionImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default sportComponent;
