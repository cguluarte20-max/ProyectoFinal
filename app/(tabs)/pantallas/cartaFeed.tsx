import { Image, StyleSheet, Text, View } from 'react-native';

export default function ReporteCard({ titulo = "", ubicacion ="", usuario= "", imagen = '', Descripción = ''}) {
  return (
    <View style={styles.card}>

      <Image source={{ uri: imagen}} style={styles.imagen} />

      <Text style={styles.titulo}>{titulo}</Text>

      <Text>{Descripción}</Text>

      <Text style={styles.ubicacion}>Ubicación: {ubicacion}</Text>

      <Text style={styles.usuario}>Reportado por {usuario}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1f26",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    paddingBottom: 15,
  },

  imagen: {
    width: "100%",
    height: 180,
  },

  titulo: {
    marginTop: 10,
    marginHorizontal: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  ubicacion: {
    marginHorizontal: 10,
    color: "#aab0b7",
    marginTop: 4,
  },

  usuario: {
    marginHorizontal: 10,
    color: "#7e8793",
    marginTop: 4,
  },
});