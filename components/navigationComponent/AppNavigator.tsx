import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Importa Material Icons
import { UserDetails } from '../detailsComponents/UserDetailsComponents';
import { MatchComponent } from '../detailsComponents/MatchComponenet';
import { HomePage } from '../userComponents/HomePage';
import { LoginPage } from '../userComponents/LoginPage';
import { RegisterPage } from '../userComponents/RegisterPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'UserDetails') {
            iconName = focused ? 'home' : 'person-outline'; // Icono de Material Icons
          } else if (route.name === 'MatchComponent') {
            iconName = focused ? 'favorite' : 'favorite-border'; // Icono de Material Icons
          } else {
            iconName = 'help-outline'; // Icono predeterminado en caso de que no coincida
          }

          // Retorna el componente de icono de Material Icons
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black', // Color del icono y texto cuando está activo
        tabBarInactiveTintColor: 'grey', // Color del icono y texto cuando está inactivo
        tabBarStyle: { backgroundColor: '#f8f8f8' }, // Estilo del fondo del tab bar
        
      })}
    >
      <Tab.Screen
        name="UserDetails"
        component={UserDetails}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MatchComponent"
        component={MatchComponent}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
