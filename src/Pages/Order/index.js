import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

const OrderMasuk =({navigation}) => {
    return(
        <View style={styles.card}>
            <View style={styles.cardMasuk}>
                <View style={styles.b1}>
                <Text>Si Bapak Odading</Text>
                <Text>12.29</Text>
                </View>
                <View style={styles.b2}>
                <Text style={{color: '#CC201D'}}>Pickup on table (14)</Text>
                <Text>, 7 item</Text>
                </View>
                <View style={styles.metode}>
                    <Text>Metode Pembayaran</Text>
                    <Image source={require('./DANA.png')} style={{marginTop: 3}}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#A0A4A8'}}>Qty</Text>
                <Text style={{color: '#A0A4A8', marginLeft: 20}}>Order Item</Text>
                </View>
                <View style={{flexDirection: 'row',  marginTop: 5}}>
                <Text style={{marginRight: 25}}>1x</Text>
                <Text style={{color: '#000000'}}>Philly Anselmo</Text>
                </View>
                <View style={{flexDirection: 'row',  marginTop: 5}}>
                <Text style={{marginRight: 25}}>1x</Text>
                <Text style={{color: '#000000'}}>Burger Everest</Text>
                </View>
                <View style={{flexDirection: 'row',  marginTop: 5}}>
                <Text style={{marginRight: 25}}>1x</Text>
                <Text style={{color: '#000000'}}>Lime Squash</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Toko')}} >
                <Text style={{fontWeight: 'bold', color:'#CC201D'}}>TOLAK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => {navigation.navigate('Orderan Diproses')}} >
                <Text style={{fontWeight: 'bold', color: 'white'}}>TERIMA</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const OrderProses = ({navigation}) => {
    return(
            <TouchableHighlight style={styles.cardMasuk} onPress={() => {navigation.navigate('OrderDetails')}}>
                <View>
                <View style={styles.b1}>
                <Text>Si Bapak Odading</Text>
                <Text>12.29</Text>
                </View>
                <View style={styles.b2}>
                <Text style={{color: '#CC201D'}}>Pickup on table (14)</Text>
                <Text>, 7 item</Text>
                </View>
                </View>
            </TouchableHighlight>
    )
}


const Order = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Orderan Masuk" component={OrderMasuk} />
            <Tab.Screen name="Orderan Diproses" component={OrderProses} />
        </Tab.Navigator>
    )
}

export default Order

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    cardMasuk:{
        marginHorizontal: 20,
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#FFFFFF'
    },
    b1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    b2:{
        flexDirection: 'row',
        paddingRight: 20
    },
    metode:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF3EB',
        marginVertical: 25
    },
    btn:{
        width: 174,
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#FFFFFF'
    },
    btn2:{
        width: 174,
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#CC201D'
    }
})
