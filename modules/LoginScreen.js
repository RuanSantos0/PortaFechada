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
import { Button, TextInput } from 'react-native-paper';  

const LoginScreen = (props) => {
  return (
    <>
    <KeyboardAvoidingView behavior="position">
      <StatusBar backgroundColor="gray" barStyle="light-content" />
        <Text style={{fontSize:30,color:"blue",marginLeft: 18}}>Login</Text>
          <TextInput
            label='Usuário'
            mode="outlined"
            theme={{colors:{primary:"blue"}}}
            style={{marginLeft: 18, marginTop: 18, marginRight: 18}}
          //value={this.state.text}
          // onChangeText={text => this.setState({ text })}
          />
          <TextInput
            label='Senha'
            mode="outlined"
            theme={{colors:{primary:"blue"}}}
            style={{marginLeft: 18, marginTop: 18, marginRight: 18}}
          //value={this.state.text}
          // onChangeText={text => this.setState({ text })}
          />
          <Button 
          mode="contained"
          style={{marginLeft: 18, marginTop: 18, marginRight: 18}} 
          onPress={() => props.navigation.navigate("home")}>
            Entrar
          </Button>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default LoginScreen;
