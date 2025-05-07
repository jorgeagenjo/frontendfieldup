import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";

const courts = [
  {
    id: "1",
    name: "Pádel Los Nogales",
    distance: "2km - Madrid",
    price: "20€",
    image: require("../../assets/images/losnogales.jpeg"),
    times: ["12:00", "13:00", "14:00", "14:30"],
  },
  {
    id: "2",
    name: "Velo Academy",
    distance: "1km - Madrid",
    price: "25€",
    image: require("../../assets/images/padelvelo.jpeg"),
    times: ["12:00", "13:00", "14:00", "15:00"],
  },
  {
    id: "3",
    name: "M3 Academy",
    distance: "1km - Madrid",
    price: "25€",
    image: require("../../assets/images/m3padel.jpeg"),
    times: ["12:00", "13:00", "14:00", "15:00"],
  },
];

const BuscadorPartidos = () => {
  const [search, setSearch] = useState("");
  const [selectedSport, setSelectedSport] = useState("Pádel");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Buscar partidos..." 
          value={search} 
          onChangeText={setSearch} 
        />
        <Text style={styles.mapLink}>Ver mapa</Text>
      </View>

      <Picker selectedValue={selectedSport} onValueChange={setSelectedSport} style={styles.picker}>
        <Picker.Item label="Pádel" value="Pádel" />
        <Picker.Item label="Baloncesto" value="Baloncesto" />
        <Picker.Item label="Tenis" value="Tenis" />
        <Picker.Item label="Fútbol" value="Fútbol" />
      </Picker>

      <FlatList
        data={courts.filter(court => court.name.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>{item.distance}</Text>
            <Text style={styles.price}>1h desde {item.price}</Text>
          </TouchableOpacity>
        )}
      />
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
  },

  searchInput: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },

  mapLink: {
    fontSize: 16,
    color: 'blue',
  },

  picker: {
    margin: 10,
    backgroundColor: '#DDD',
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    margin: 10,
    alignItems: 'center',
    elevation: 4,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
  },

  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default BuscadorPartidos;
