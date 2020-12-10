import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const OrderDetails = ({navigation}) => {
    return (
        <View>
            <View style={styles.container}>
                <Text>Waktu Order: </Text>
                <Text style={{fontWeight:'bold'}}>13/07/2020 17.30 WIB</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.b1}>
                    <Text>Nomor Meja</Text>
                    <Text style={{color: '#FF6000', fontWeight: 'bold'}}>9</Text>
                </View>
                <View style={styles.b1}>
                    <Text>Order ID</Text>
                    <Text>3234324</Text>
                </View>
                <View style={styles.b1}>
                    <Text>Estimasi</Text>
                    <Text>15 - 20 menit</Text>
                </View>
                <View style={styles.b1}>
                    <Text>Status</Text>
                    <Text style={styles.status}>Cooking</Text>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.b1}>
                    <Text>Order</Text>
                </View>
                <View style={styles.b1}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 15, fontWeight: 'bold'}}>1x</Text>
                    <Text style={{fontWeight: 'bold'}}>Philly Anselmo</Text>
                    </View>
                    <Text>Rp 87.000</Text>
                </View>
                <View style={styles.b1}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 15, fontWeight: 'bold'}}>3x</Text>
                    <Text style={{fontWeight: 'bold'}}>Moutley Burg</Text>
                    </View>
                    <Text>Rp 180.000</Text>
                </View>
                <View style={styles.b2}>
                    <Text>Catatan Pembeli</Text>
                    <Text style={styles.notes}>Telur burgernya setengah matang aja ya tehhh..
                    saos sambal aja, jangan kasih saos tomat, nuhunn</Text>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.b1}>
                    <Text>Subtotal</Text>
                    <Text>Rp 267.000</Text>
                </View>
                <View style={styles.b1}>
                    <Text>Tax (10%)</Text>
                    <Text>Rp 26.700</Text>
                </View>
                <View style={styles.b1}>
                    <Text style={{fontWeight: 'bold'}}>Total</Text>
                    <Text>Rp 293.700</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Orderan Masuk')}} >
                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>PESANAN SELESAI</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderDetails

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5
    },
    card:{
        marginHorizontal: 20,
        marginVertical: 6,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#FFFFFF'
    },
    b1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    status:{
        color: '#FFC804'
    },
    b2:{
        justifyContent: 'space-between',
        marginTop: 5,
    },
    notes:{
        color: '#A0A4A8',
        marginTop: 3
    },
    btn:{
        marginVertical: 10,
        paddingVertical: 15,
        borderRadius: 4,
        backgroundColor: '#31B057',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
