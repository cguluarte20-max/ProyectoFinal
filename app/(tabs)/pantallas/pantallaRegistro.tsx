import { auth } from "@/app/firebase";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';


export default function pantallaRegistro(){
    const router = useRouter()
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmar] = useState('');
    const [cargando, setCargando] = useState(false);

    const registrar = async () => {
     if (!nombre || !email || !contraseña || !confirmarContraseña) {
      return Alert.alert('Error', 'Todos los campos son obligatorios');
    }
    if (contraseña.length < 6) {
      return Alert.alert('Error', 'La contraseña debe tener mínimo 6 caracteres');
    }
    if (contraseña !== confirmarContraseña) {
      return Alert.alert('Error', 'Las contraseñas no coinciden');
    }
    

     setCargando(true);
    try {
      // 1. Crear el usuario
      const userCredential = await createUserWithEmailAndPassword(auth, email, contraseña);
      const user = userCredential.user;

      // 2. Guardar el nombre en el perfil de Firebase
      await updateProfile(user, { displayName: nombre.trim() });

      Alert.alert('¡Listo!', `Bienvenido ${nombre} 🎉`);
      router.replace('/(tabs)/pantallas/pantallaFeed'); // o la pantalla principal
    } catch (error: any) {
      let mensaje = 'Error al crear la cuenta';
      if (error.code === 'auth/email-already-in-use') mensaje = 'Este correo ya está registrado';
      if (error.code === 'auth/invalid-email') mensaje = 'Correo inválido';
      Alert.alert('Error', mensaje);
    } finally {
      setCargando(false);
    }
  };

    
    return(
        <KeyboardAvoidingView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
            <View style={style.encabezado}><Text style={style.TituloEncabezado}>Reporte ciudadano</Text></View>
                <Text style={style.titulo}>Bienvenido de nuevo</Text>
                <Text></Text>
                <TextInput placeholder= "Nombre" value={nombre} onChangeText={setNombre} autoCapitalize="words" style={style.cajaText}></TextInput>
                <Text></Text>
                <TextInput placeholder= "Email" value={email} onChangeText={setEmail} autoCapitalize="none" style={style.cajaText}></TextInput>
                <Text></Text>
                <TextInput placeholder="Contraseña" value={contraseña} onChangeText={setContraseña} secureTextEntry style={style.cajaText}></TextInput>
                    <Text></Text>
                    <TextInput placeholder="Confirmar contraseña" value={confirmarContraseña} onChangeText={setConfirmar} secureTextEntry style={style.cajaText}></TextInput>
                    <Text></Text>
                    <TouchableOpacity style={style.botonCrearCuenta} onPress={registrar} disabled={cargando}>
                        <Text>Crear cuenta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.botonCrearCuenta} onPress={() => router.back}>
                        <Text>⬅ Ya tengo cuenta</Text>
                    </TouchableOpacity>
                    
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

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
        width: '80%',
        color: '#f7f6f6ff'
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