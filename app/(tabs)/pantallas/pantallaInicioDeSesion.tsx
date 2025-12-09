import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function pantallaIncioDeSesion(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={style.container}>
            <View style={style.encabezado}><Text style={style.TituloEncabezado}>Reporte ciudadano</Text></View>
            <Text style={style.titulo}>Bienvenido de nuevo</Text>
            <Text></Text>
            <TextInput placeholder= "Iniciar sesión" value={email} onChangeText={setEmail} style={style.cajaText}></TextInput>
            <Text></Text>
            <TextInput placeholder= "Contraseña" value={password} onChangeText={setPassword} style={style.cajaText}></TextInput>
            <TextInput></TextInput>
            <TouchableOpacity style={style.BotonIniciarSesion}>
                <Text>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Button title='¿Olvidaste la contraseña?'/>
        </View>
    )

}

const style = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#0e0d0dff',
    alignItems: 'center',
    justifyContent: 'center',
    },

    titulo:{
        fontSize: 24,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'white'
    },

    encabezado: {
        width: '100%',
        padding: 20,
        backgroundColor: '#0e0d0dff',
        marginBottom: 20,
        alignItems: 'center'
    },

    cajaText: {
        borderWidth: 1,
        borderColor: '#999',
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
        alignItems: 'center',
        width: '80%'
    },

    BotonIniciarSesion: {
        backgroundColor: '#2f75d6',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        width: '80%'   
    },

   TituloEncabezado:{
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
   }


})