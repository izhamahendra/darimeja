import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconOrder, IconOrderActive, IconToko, IconTokoActive, IconRiwayat, IconRiwayatActive } from '../../assets/icons'


const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    const Icon = () => {
        if(label === "Order") return isFocused ? <IconOrderActive/> : <IconOrder/>
        if(label === "Toko") return isFocused ? <IconTokoActive/> : <IconToko/>
        if(label === "Riwayat") return isFocused ? <IconRiwayatActive/> : <IconRiwayat/>
        return <IconToko/>
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
                <Icon />
            <Text style={{ color: isFocused ? '#cc201d' : '#222' }}>{label}</Text>
          </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({})
