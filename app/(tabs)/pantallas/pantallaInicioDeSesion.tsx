import { auth } from '@/app/firebase';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function pantallaIncioDeSesion(){
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [contraseña, setPassword] = useState('')
    const [cargando, setCargando] = useState(false)

    const login = async () =>{
        if(!email || !contraseña) return Alert.alert("Por favor ingrese su email y contraseña")
    

    setCargando(true)
        try{
            await signInWithEmailAndPassword(auth, email, contraseña)
            router.replace('/(tabs)/pantallas/pantallaFeed')
        } catch(error: any){
            const msg = error.code === 'auth/invalid-credential'
            ? 'Correo o contraseña incorrectos'
            : 'Error al inciar sesión' 
            Alert.alert("Error", msg)
        } finally{
            setCargando(false)
        }
}
    return(
        <KeyboardAvoidingView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
            <View style={style.encabezado}><Text style={style.TituloEncabezado}>Reporte ciudadano</Text></View>
            <Text style={style.titulo}>Bienvenido de nuevo</Text>
            <Text></Text>
            <TextInput placeholder= "email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" style={style.cajaText}></TextInput>
            <Text></Text>
            <TextInput placeholder= "Contraseña" value={contraseña} onChangeText={setPassword} secureTextEntry style={style.cajaText}></TextInput>
            <TextInput></TextInput>
            <TouchableOpacity style={style.BotonIniciarSesion} onPress={login} disabled={cargando}>
                <Text>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Button title='¿Olvidaste la contraseña?'/>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
        width: '80%',
        color: '#f7f6f6ff',
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