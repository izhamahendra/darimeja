import React from 'react'
import { Image, StyleSheet, Text, View, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const TambahMenu = ({navigation}) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            
            <Text>Gambar Produk</Text>

            <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image source={require('./Cam.png')} style={{marginTop: 10, marginLeft: 10}}/>
            <View style={{marginLeft: 10, marginTop: 10, paddingRight: 30}}>
                <Text>Tambahkan Gambar Produk</Text>
                <Text style={{color: '#A0A4A8'}}>Hanya 1 gambar, ukuran minimal</Text>
                <Text style={{color: '#A0A4A8'}}>300x300 px berformat JPG, PNG, atau GIF.</Text>
            </View>            
            </View>

            <Text>Kategori Produk</Text>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
            <TouchableOpacity style={styles.btn2} >
                <Text style={styles.lgn2}>MAKANAN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} >
                <Text style={styles.lgn}>MINUMAN</Text>
            </TouchableOpacity>
            </View>

            <Text>Nama Produk</Text>
            <TextInput style={styles.input} placeholder='Masukkan Nama Produk'/>
            <Text>Estimasi Pembuatan Produk</Text>
            <TextInput style={styles.input} placeholder='Mis: 8 menit'/>
            <Text>Deskripsi Produk</Text>
            <TextInput style={styles.input2} placeholder='Masukkan Deskripsi Produk'/>
            <Text>Harga Produk</Text>
            <TextInput style={styles.input} placeholder='Mis: Rp 20000'/>
            <TouchableOpacity style={styles.btnLgn} onPress={() => {navigation.navigate('Toko')}} >
                <Text style={styles.lgn3}>TAMBAHKAN</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default TambahMenu

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding: 20
    },
    lgn2:{
        fontSize: 10,
        paddingHorizontal: 33,
        paddingVertical: 6,
        color: '#CC201D',
        backgroundColor: '#FFFFFF'
    },
    btn2:{
        width: 120,
        height: 30,
        borderRadius: 4,
        marginTop: 15,
        backgroundColor: '#CC201D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lgn:{
        fontSize: 10,
        paddingHorizontal: 33,
        paddingVertical: 6,
        color: '#A0A4A8',
        backgroundColor: '#FFFFFF'
    },
    btn:{
        width: 120,
        height: 30,
        borderRadius: 4,
        marginTop: 15,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    input:{
        borderWidth: 2,
        borderColor: '#c3c3c3',
        padding: 8,
        marginTop: 10,
        marginBottom: 10,
        width: 370,
        height: 48,
        borderRadius: 4
    },
    input2:{
        borderWidth: 2,
        borderColor: '#c3c3c3',
        padding: 8,
        marginTop: 10,
        marginBottom: 10,
        width: 370,
        height: 80,
        borderRadius: 4
    },
    btnLgn:{
        width: 370,
        height: 48,
        borderRadius: 4,
        marginTop: 20,
        backgroundColor: '#CC201D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lgn3:{
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})
