import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from './navegacion';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function PantallaBienvenida({navigation}: Props){

    return(
    
        <View style={style.container}>
             <View style={style.encabezado}><Text style={style.TituloEncabezado}>Reporte ciudadano</Text></View>
            <Text style = {style.titulo}>Tu voz como nuestro compromiso</Text>
            <Text>Reporte los problemas y mejore su comunidad </Text>
            <TouchableOpacity style ={style.BotonIniciarSesion} onPress={() => router.push('/(tabs)/pantallas/pantallaInicioDeSesion')}>
                <Text>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {style.BotonRegistrarce} onPress={() => router.push('/(tabs)/pantallas/pantallaRegistro')}>
                <Text>Registrase</Text>
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

    TituloEncabezado:{
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
   },

    BotonIniciarSesion: {
        backgroundColor: '#2f75d6',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%'
        
    }, 

    BotonRegistrarce: {
        backgroundColor: '#918f8e',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%'
    }
})