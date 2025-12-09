import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function pantallaRegistro(){
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmar] = useState('');
    
    return(
        <View style={style.container}>
                    <View style={style.encabezado}><Text style={style.TituloEncabezado}>Reporte ciudadano</Text></View>
                    <Text style={style.titulo}>Bienvenido de nuevo</Text>
                    <Text></Text>
                    <TextInput placeholder= "Nombre" value={nombre} onChangeText={setNombre} style={style.cajaText}></TextInput>
                    <Text></Text>
                    <TextInput placeholder= "Email" value={email} onChangeText={setEmail} style={style.cajaText}></TextInput>
                    <Text></Text>
                    <TextInput placeholder="Contraseña" value={contraseña} onChangeText={setContraseña} style={style.cajaText}></TextInput>
                    <Text></Text>
                    <TextInput placeholder="Confirmar contraseña" value={confirmarContraseña} onChangeText={setConfirmar} style={style.cajaText}></TextInput>
                    <Text></Text>
                    <TouchableOpacity style={style.botonCrearCuenta}>
                        <Text>Crear cuenta</Text>
                    </TouchableOpacity>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#0e0d0dff',
    alignItems: 'center',
    justifyContent: 'center',
    },

    encabezado: {
        width: '100%',
        padding: 20,
        backgroundColor: '#0e0d0dff',
        marginBottom: 20,
        alignItems: 'center'
    },

    TituloEncabezado:{
       color: 'white',
       fontSize: 22,
       fontWeight: 'bold'
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

    titulo:{
        fontSize: 24,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'white'
    },

    botonCrearCuenta:{
        backgroundColor: '#2f75d6',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        width: '80%' 
    }
})