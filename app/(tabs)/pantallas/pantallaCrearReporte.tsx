import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { useReportes } from './ReporteContext';

export default function PantallaCrearReporte() {
  const [ReporteTitulo, setTitulo] = useState('');
  const [ReporteDescripcion, setDescripcion] = useState('');
  const [Imagen, setImagen] = useState<string | null>(null);
  const [location, setLocation] = useState<any>(null);
  const { agregarReporte } = useReportes();
  const router = useRouter();

  const seleccionarImagen = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permiso necesario', 'Necesitas dar permiso para acceder a las fotos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      setImagen(result.assets[0].uri);
    }
  };

  const obtenerUbicacion = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permiso necesario', 'Se necesita permiso de ubicación.');
      return;
    }

    const coords = await Location.getCurrentPositionAsync({});
    setLocation(coords);
  };

  const crearReporte = () => {
    if (!ReporteTitulo.trim()) {
      Alert.alert('Error', 'El título es obligatorio');
      return;
    }
    if (!Imagen) {
      Alert.alert('Error', 'Debes subir una imagen');
      return;
    }

    agregarReporte({
      titulo: ReporteTitulo.trim(),
      descripcion: ReporteDescripcion.trim() || undefined,
      ubicacion: location
        ? `${location.coords.latitude.toFixed(6)}, ${location.coords.longitude.toFixed(6)}`
        : 'Sin ubicación',
      coordenadas: location
        ? { lat: location.coords.latitude, lng: location.coords.longitude }
        : undefined,
      usuario: 'Usuario actual', // luego puedes poner nombre real
      imagen: Imagen,
    });

    router.back();
  };

  return (
  <KeyboardAvoidingView style={{ flex: 1 }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={style.scroll}>
      <View style={style.container}>

        <View style={style.header}>
          <Text style={style.title}>Nuevo Reporte</Text>
        </View>

        <TextInput
          placeholder="Título del reporte"
          placeholderTextColor="#aaa"
          value={ReporteTitulo}
          onChangeText={setTitulo}
          style={style.cajaTitulo}
        />

        <TextInput
          placeholder="Descripción (opcional)"
          placeholderTextColor="#aaa"
          value={ReporteDescripcion}
          onChangeText={setDescripcion}
          multiline
          style={style.cajaDescripcion}
        />

        <TouchableOpacity style={style.BotonImagen} onPress={seleccionarImagen}>
          <Text style={{ color: 'white' }}>Subir Imagen</Text>
        </TouchableOpacity>

        {Imagen && (
          <Image
            source={{ uri: Imagen }}
            style={{ width: 300, height: 300, borderRadius: 12, marginVertical: 15 }}
          />
        )}

        <TouchableOpacity style={style.BotonImagen} onPress={obtenerUbicacion}>
          <Text style={{ color: 'white' }}>
            {location ? 'Ubicación obtenida' : 'Obtener Ubicación'}
          </Text>
        </TouchableOpacity>

        {location && (
          <Text style={{ color: '#0f0', marginVertical: 10 }}>
            Lat: {location.coords.latitude.toFixed(4)}, Lng: {location.coords.longitude.toFixed(4)}
          </Text>
        )}

        <TouchableOpacity style={style.botonCrearReporte} onPress={crearReporte}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Crear Reporte</Text>
        </TouchableOpacity>
      
      </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0d0d',
    alignItems: 'center',
    paddingTop: 60,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  cajaTitulo: {
    backgroundColor: '#1e1e1e',
    color: 'white',
    borderWidth: 1,
    borderColor: '#444',
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    width: '85%',
    marginBottom: 15,
  },
  cajaDescripcion: {
    backgroundColor: '#1e1e1e',
    color: 'white',
    borderWidth: 1,
    borderColor: '#444',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    width: '85%',
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  botonCrearReporte: {
    backgroundColor: '#2f75d6',
    padding: 15,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
    marginBottom: 20,
  },
  BotonImagen: {
    backgroundColor: '#918f8e',
    padding: 15,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
    marginBottom: 15,
  },

  scroll: {
    paddingHorizontal: 15,
  }
});