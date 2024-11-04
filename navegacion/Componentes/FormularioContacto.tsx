import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContextUsuario } from '../Context/ContextProvider'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import ListaUsuario from './ListaUsuario';

export default function FormularioContacto() {
  
  const {nombre, 
    apellido, 
    correo, 
    telefono, 
    fechaNacimiento, 
    listaUsuario, 
    agregarUsuario,
    setNombre,
    setApellido,
    setCorreo,
    setTelefono,
    setFechaNacimiento
} = useContextUsuario()

    return (
    <View>
      <Text>Formulario de Usuario</Text>
      <TextInput 
      style={styles.input}
      placeholder='Nombre'
      value={nombre}
      onChangeText={setNombre}
      />

    <TextInput 
    style={styles.input}
        placeholder='Apellido'
        value={apellido}
        onChangeText={setApellido}
        />

    <TextInput 
    style={styles.input}
        placeholder='Teléfono'
        value={telefono}
        onChangeText={setTelefono}
        />

    <TextInput 
    style={styles.input}
        placeholder='Correo'
        value={correo}
        onChangeText={setCorreo}
        />

    <TextInput 
    style={styles.input}
       placeholder='Fecha de Nacimiento'
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
        />

        <Button title='Agregar Usuario' onPress={agregarUsuario}></Button>

     <ListaUsuario>
        
     </ListaUsuario>

    </View>
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