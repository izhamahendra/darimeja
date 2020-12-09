import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('./DariMeja.png')} style={styles.header}/>
            <Image source={require('./vHomePage.png')} style={styles.header2}/>
            <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Login')}} >
                <Text style={styles.lgn}>MASUK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={() => {navigation.navigate('Register')}} >
                <Text style={styles.lgn2}>DAFTAR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    btn:{
        width: 370,
        height: 48,
        borderRadius: 4,
        marginTop: 80,
        backgroundColor: '#CC201D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header:{
        marginTop: 10
    },
    header2:{
        marginBottom: 20,
        marginTop: 80
    },
    btn2:{
        width: 370,
        height: 48,
        borderRadius: 4,
        marginTop: 20,
        backgroundColor: '#CC201D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lgn:{
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    lgn2:{
        fontSize: 18,
        paddingHorizontal: 149,
        paddingVertical: 10,
        fontWeight: 'bold',
        color: '#CC201D',
        backgroundColor: '#FFFFFF'
    },
})
