import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { UserDetails } from '../detailsComponents/UserDetailsComponents';
import { HomePage } from '../userComponents/HomePage';
import { LoginPage } from '../userComponents/LoginPage';
import { RegisterPage } from '../userComponents/RegisterPage';
import sportComponent from '../homeComponents/sportComponent';
import BuscadorPartidos from '../homeComponents/seacrchComponent';
import ReservarPista from '../homeComponents/pistas';
import { History } from '../homeComponents/historyComponent';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true, 
        tabBarActiveTintColor: '#a4c41c',     
        tabBarInactiveTintColor: '#81817d',
        tabBarIcon: () => null, 
        tabBarLabelStyle: {
          fontSize: 12, 
        },
        tabBarStyle: { backgroundColor: '#f8f8f8' }, 
      }}
    >
      <Tab.Screen
  name="sportComponent"
  component={sportComponent}
  options={{
    headerShown: false,
    tabBarLabel: 'Inicio',
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../../assets/images/home.png')}
        style={{
          width: 32,
          height: 32,
          tintColor: focused ? '#a4c41c' : '#888', 
        }}
      />
    ),
  }}
/>
     <Tab.Screen
  name="History"
  component={History}
  options={{
    headerShown: false,
    tabBarLabel: 'Historial',
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../../assets/images/historial-de-pedidos.png')}
        style={{
          width: 40,
          height: 40,
          tintColor: focused ? '#a4c41c' : '#888', 
        }}
      />
    ),
  }}
/>

<Tab.Screen
  name="UserDetails"
  component={UserDetails}
  options={{
    headerShown: false,
    tabBarLabel: 'Perfil',
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../../assets/images/imagen-de-perfil.png')}
        style={{
          width: 38,
          height: 38,
          tintColor: focused ? '#a4c41c' : '#888', 
        }}
      />
    ),
  }}
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
          name="History"
          component={History}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BuscadorPartidos"
          component={BuscadorPartidos}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

