/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'


import LoginScreen from './modules/LoginScreen'
import HomeScreen from './modules/HomeScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
        <NavigationContainer >
          <Stack.Navigator screenOptions={{ headerShown: false}}>     
            <Stack.Screen name="login" component={LoginScreen} options={{
        }}/>
            <Stack.Screen name="home" component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
