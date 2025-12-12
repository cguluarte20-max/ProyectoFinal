import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from './pantallas/navegacion';
import PantallaBienvenida from './pantallas/pantallaBienvenida';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return(
    
        <Stack.Navigator>
        <Stack.Screen name="Home" component={PantallaBienvenida}></Stack.Screen>
        
        </Stack.Navigator>

  )
}

