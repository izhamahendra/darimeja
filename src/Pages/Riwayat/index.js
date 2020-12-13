import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const Riwayat = ({navigation}) => {
    return (
        <ScrollView>
        <View>
            <View style={styles.containerriwayat1}>
                <Text style={styles.riwayat}>Riwayat Orderan</Text>
            </View>
            <View style={styles.containerriwayat2}>
                <Text style={styles.b1}>Riwayat Orderan Restoran</Text>
            </View>
            <View style={styles.container1}>
                <Text style={styles.b1}>Hari Ini</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.b2}>Total Pendapatan : Rp 1.300.000</Text>
            </View>
            <TouchableHighlight onPress={() => {navigation.navigate('RiwayatDetails')}}>
            <View style={styles.card1}>
                <View style={styles.pesanan}>
                <Text style={styles.pemesan}>Nadin Amizah - A09</Text>
                <Text style={styles.done}>Done</Text>
                </View>
                <View style={styles.picks}>
                    <Text style={styles.pick}>Pickup On Table (9), 7 Item</Text>
                </View>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {navigation.navigate('RiwayatDetails')}}>
            <View style={styles.card1}>
                <View style={styles.pesanan}>
                <Text style={styles.pemesan}>Nadiem Makarim - A08</Text>
                <Text style={styles.done}>Done</Text>
                </View>
                <View style={styles.picks}>
                    <Text style={styles.pick}>Pickup On Table (4), 2 Item</Text>
                </View>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {navigation.navigate('RiwayatDetails')}}>
            <View style={styles.card1}>
                <View style={styles.pesanan}>
                <Text style={styles.pemesan}>Jack Ma - A07</Text>
                <Text style={styles.done}>Done</Text>
                </View>
                <View style={styles.picks}>
                    <Text style={styles.pick}>Pickup On Table (13), 3 Item</Text>
                </View>
            </View>
            </TouchableHighlight>
            <View style={styles.container1}>
                <Text style={styles.b1}>Kemarin</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.b2}>Total Pendapatan : Rp 1.100.000</Text>
            </View>
            <TouchableHighlight onPress={() => {navigation.navigate('RiwayatDetails')}}>
            <View style={styles.card1}>
                <View style={styles.pesanan}>
                <Text style={styles.pemesan}>Mamang Odading - A10</Text>
                <Text style={styles.reject}>Rejected</Text>
                </View>
                <View style={styles.picks}>
                    <Text style={styles.pick}>Pickup On Table (12), 5 Item</Text>
                </View>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {navigation.navigate('RiwayatDetails')}}>
            <View style={styles.card1}>
                <View style={styles.pesanan}>
                <Text style={styles.pemesan}>Nadiem - A05</Text>
                <Text style={styles.done}>Done</Text>
                </View>
                <View style={styles.picks}>
                    <Text style={styles.pick}>Pickup On Table (1), 6 Item</Text>
                </View>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {navigation.navigate('RiwayatDetails')}}>
            <View style={styles.card1}>
                <View style={styles.pesanan}>
                <Text style={styles.pemesan}>Jack - A01</Text>
                <Text style={styles.done}>Done</Text>
                </View>
                <View style={styles.picks}>
                    <Text style={styles.pick}>Pickup On Table (2), 11 Item</Text>
                </View>
            </View>
            </TouchableHighlight>
        </View>
        </ScrollView>
    )
}

export default Riwayat

const styles = StyleSheet.create({
    containerriwayat1:{
        marginHorizontal: 0,
        paddingBottom: 5,
        paddingHorizontal: 15,
        marginTop: 15
    },
    containerriwayat2:{
        marginHorizontal: 0,
        paddingHorizontal: 15,
    },
    riwayat:{
        fontSize: 20,
        color: '#52575C',
        fontWeight: 'bold'
    },
    container1:{
        marginHorizontal: 0,
        paddingBottom: 5,
        paddingHorizontal: 15,
        marginTop: 15
    },
    b1:{
        fontSize: 14,
        color: '#A0A4A8',
    },
    container2:{
        marginHorizontal: 0,
        paddingHorizontal: 15,
    },
    b2:{
        fontSize: 14,
        color: '#52575C',
        fontWeight: 'bold'
    },
    card1:{
        marginHorizontal: 15,
        marginVertical: 5,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
    },
    pesanan:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    picks:{
        flexDirection: 'row',
        paddingTop: 5,
        paddingRight: 20
    },
    pemesan:{
        fontWeight: 'bold',
    },
    pick:{
        color: '#A0A4A8',
    },
    done:{
        color: '#31B057',
    },
    reject:{
        color: '#F73336',
    }
})
