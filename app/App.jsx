import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator id={'1'}>
          <Stack.Screen name="Cines" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalle' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
