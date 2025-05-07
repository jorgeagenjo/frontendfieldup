import { useState, useEffect } from "react";
import { View, SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import axios from "axios";
import { Circles } from "../visualComponents/Circles";

const { width } = Dimensions.get("window");

interface UserItem {
  id: string;
  name: string;
}

export function UserDetails() {
  const [userInfo, setUserInfo] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<UserItem[]>("https://api.restful-api.dev/objects?id=4")
      .then(response => {
        console.log(response.data);
        setUserInfo(response.data);
      })
      .catch(error => {
        console.error("Error al cargar los datos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator size="large" color="#000" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Circles />
      <View style={styles.imgContainer}>
        <Image
          style={styles.perfilImg}
          source={require("../../assets/images/militarjabo.png")}
        />
      </View>
      <View style={styles.detailsContainer}>
        {userInfo.map((item) => (
         <View key={item.id} style={styles.userRow}>
         <View style={styles.iconTextGroup}>
           <Image style={styles.usuario} source={require("../../assets/images/imagen-de-perfil.png")} />
           <Text style={styles.userText}>{item.name}</Text>
         </View>
         <View style={styles.iconTextGroup}>
           <Image style={styles.avatar} source={require("../../assets/images/llamada.png")} />
           <Text style={styles.userText}>{item.name}</Text>
         </View>
         <View style={styles.iconTextGroup}>
           <Image style={styles.navegacion} source={require("../../assets/images/navegacion.png")} />
           <Text style={styles.userText}>{item.name}</Text>
         </View>
         <View style={styles.iconTextGroup}>
           <Image style={styles.avatar} source={require("../../assets/images/estrella.png")} />
           <Text style={styles.userText}>{item.name}</Text>
         </View>
         <View style={styles.iconTextGroup}>
           <Image style={styles.avatar} source={require("../../assets/images/candado.png")} />
           <Text style={styles.userText}>{item.name}</Text>
         </View>
       </View>
       
        ))}
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingTop: width * 0.06,
  },
  perfilImg: {
    height: width * 0.3,
    width: width * 0.3,
    borderRadius: width * 0.15,
    borderWidth: 3,
    borderColor: "black",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: width * 0.2,
  },
  iconTextGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.03,
    marginBottom: width * 0.02,
  },
  
  userText: {
    color: "black",
    fontSize: width * 0.04,
  },
  detailsContainer: {
    marginTop: width * 0.1,
    gap: width * 0.05,
    width: "100%",
    alignItems: "flex-start", 
    flexDirection: "column",
  },
  userRow: {
    flexDirection: "column",      
    alignItems: "center",      
    gap: width * 0.03,
  },
  avatar: {
    height: width * 0.12,
    width: width * 0.12,
  },
  navegacion: {
    height: width * 0.127,
    width: width * 0.127,
  },
  usuario: {
    height: width * 0.14,
    width: width * 0.14,
  },
  
  buttonRegister: {
    paddingVertical: width * 0.025,
    borderRadius: width * 0.05,
    width: "100%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
});
