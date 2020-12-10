import React from 'react'
import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Login ({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('./DariMeja.png')} style={styles.header}/>
            <TextInput style={styles.input} placeholder='Nama Pengguna'/>
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}/>
            <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('MainApp')}} >
                <Text style={styles.lgn}>MASUK</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
            <Text style={styles.regist}>Belum punya akun? Daftar Disini</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        //alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    header:{
        alignSelf: 'center',
        marginBottom: 50,
        marginTop: 10
    },
    input:{
        borderWidth: 1,
        borderColor: '#c3c3c3',
        padding: 8,
        marginTop: 10,
        marginHorizontal: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 4
    },
    btn:{
        marginHorizontal: 15,
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 4,
        marginTop: 15,
        backgroundColor: '#CC201D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lgn:{
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    regist:{
        alignSelf: 'center',
        fontSize: 14,
        color: '#000000',
        marginTop: 15
    }
})
