import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'


import LoginScreen from './modules/LoginScreen'
import HomeScreen from './modules/HomeScreen'
import DadosScreen from './modules/DadosScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
        <NavigationContainer >
          <Stack.Navigator screenOptions={{ headerShown: false}}>     
          <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="home" component={HomeScreen}/>
            <Stack.Screen name="dados" component={DadosScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
