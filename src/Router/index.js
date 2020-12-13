import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Pages/Login';
import MainPage from '../Pages/MainPage'
import Register from '../Pages/Register';
import Toko from '../Pages/Toko';
import Order from '../Pages/Order';
import Riwayat from '../Pages/Riwayat';
import RiwayatDetails from '../Pages/RiwayatDetails';
import BottomNavigator from '../Components/BottomNavigator';
import OrderDetails from '../Pages/OrderDetails';
import TambahMenu from '../Pages/TambahMenu';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="Toko" component={Toko} />
            <Tab.Screen name="Riwayat" component={Riwayat} />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="OrderDetails" component={OrderDetails}/>
            <Stack.Screen name="RiwayatDetails" component={RiwayatDetails}/>
            <Stack.Screen name="Tambah Menu" component={TambahMenu}/>
        </Stack.Navigator>
    );
};

export default Router

const styles = StyleSheet.create({})
