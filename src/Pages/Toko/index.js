import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ActionButton from 'react-native-action-button';

const Toko = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardMasuk}>
                
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Hi, User!</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 8}}>Menu Restoran</Text>
                
                <Text style={{fontSize: 18, marginTop: 10}}>Makanan</Text>
                
                
                <View style={styles.img}>
                    <View>
                        <Image source={require('./Burger.png')} style={{marginTop: 3}}/>
                        <Text style={styles.txt}>Burger Everest</Text>
                    </View>
                    <View>
                        <Image source={require('./PotatoRice.png')} style={{marginTop: 3}}/>
                        <Text style={styles.txt}>Potato Rice</Text>
                    </View>
                    <View>
                        <Image source={require('./PotatoRice2.png')} style={{marginTop: 3}}/>
                        <Text style={styles.txt}>Potato Rice</Text>
                    </View>
                </View>

                <View style={styles.img}>
                    <View>
                        <Image source={require('./Cakwe.png')} style={{marginTop: 3}}/>
                        <Text style={styles.txt}>Cakwe Belut</Text>
                    </View>
                    <View>
                        <Image source={require('./Cireng.png')} style={{marginTop: 3}}/>
                        <Text style={styles.txt}>Cireng Balado</Text>
                    </View>
                    <View>
                        <Image source={require('./SopBuah.png')} style={{marginTop: 3}}/>
                        <Text style={styles.txt}>Sop Buah</Text>
                    </View>
                </View>
                
                <Text style={{fontSize: 18, marginTop: 8}}>Minuman</Text>
                    <View style={styles.img}>
                    <View>
                        <Image source={require('./EsTeh.png')} style={{marginTop: 3}}/>
                        <Text style={styles.txt}>Es Teh</Text>
                    </View>
                    <View>
                        <Image source={require('./LimeSquash.png')} style={{marginTop: 3}}/>
                        <Text style={styles.txt}>Lime Squash</Text>
                    </View>
                    <View>
                        <Image source={require('./Juice.png')} style={{marginTop: 3}}/>
                        <Text style={styles.txt}>Aneka Juice</Text>
                    </View>
                </View>
                
                
                <ActionButton
                    offsetY={0}
                    offsetX={15}
                    buttonColor="#CC201D"
                    onPress={() => {navigation.navigate('Tambah Menu')}}
                />
                </View>
        </View>
    )
}

export default Toko

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    cardMasuk:{
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF'
    },
    img:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txt:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,

    },
    btn:{
        
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
})
