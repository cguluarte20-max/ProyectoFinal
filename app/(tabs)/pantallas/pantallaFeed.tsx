import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReporteCard from './cartaFeed';
import { useReportes } from './ReporteContext';

export default function FeedReportes() {
  const { reportes } = useReportes();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reportes Ciudadanos</Text>
        <Ionicons name="settings-outline" size={24} color="white" />
      </View>

      <ScrollView style={styles.scroll}>
        {reportes.map((r) => (
          <ReporteCard
            key={r.id}
            titulo={r.titulo}
            ubicacion={r.ubicacion}
            usuario={r.usuario}
            imagen={r.imagen}
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/(tabs)/pantallas/pantallaCrearReporte')}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#111418",
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },

  scroll: {
    paddingHorizontal: 15,
  },

  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#007bff",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});