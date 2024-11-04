import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useContextUsuario } from '../Context/ContextProvider'

export default function ListaUsuario() {

    const {listaUsuario}= useContextUsuario()

    return (
    
    <FlatList
    data={listaUsuario}
    keyExtractor={(item,index) => index.toString()}
    renderItem={({item})=> (
        <view style={styles.userItem}>
            <text>{item.nombre}</text>
            <text>{item.apellido}</text>
            <text>{item.telefono}</text>
            <text>{item.correo}</text>
            <text>{item.fechaNacimiento}</text>
            
        </view>
    )}
>

</FlatList>
  )
}


const styles = StyleSheet.create({
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth:1,
        padding:10,
        paddingHorizontal:10
    },
    listTitle:{
        fontSize:14,
        fontWeight:'bold',
        marginTop: 20
    },
    userItem:{
        borderWidth:1,
        borderRightColor:'gray',
        padding:10,
        marginVertical:5
    }


    
})