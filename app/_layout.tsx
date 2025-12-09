import { Stack } from 'expo-router';
import ReporteContext from './(tabs)/pantallas/ReporteContext';

export default function RootLayout() {
  return (
    <ReporteContext>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="pantallas/pantallaCrearReporte"
          options={{
            presentation: 'modal',        // opcional: se abre como modal bonito
            headerShown: true,
            title: 'Nuevo Reporte',
            headerStyle: { backgroundColor: '#111418' },
            headerTintColor: 'white',
          }}
        />
      </Stack>
    </ReporteContext>
  );
}