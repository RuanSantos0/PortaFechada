import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button, TextInput } from 'react-native-paper'; 
import Toast from 'react-native-simple-toast';
import axios from 'axios';

const LoginScreen = (props) => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  login = () => {
    axios.post('https://api-node-porta.herokuapp.com/users/login', {
      user: user,
      password: password
    })
    .then(function (response) {
      console.log(response);
      if(response.status == 200){
        props.navigation.navigate("home")
        console.log('Login realizado com sucesso')
      }
      else{
        Toast.showWithGravity('Usuário ou Senha não existe', Toast.LONG, Toast.BOTTOM)
        console.log('Usuário não existe')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    // fetch("http://725b9faa.ngrok.io/users/login", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body:JSON.stringify({
    //     "user": user,
    //     "password": password
    //   })
    // })
    // .then(res => {
    //   if(res.ok)
    //     props.navigation.navigate("home")
    //   else{
    //     Toast.showWithGravity('Usuário ou Senha não existe', Toast.LONG, Toast.BOTTOM)
    //     console.log('Usuário não existe')
    //   }
    // })
    // .then(data => {
    //   console.log(data)
    // })
  }

  return (
    <>
    <KeyboardAvoidingView behavior="position">
      <StatusBar backgroundColor="gray" barStyle="light-content" />

      <Image
            style={{width: 180, height: 180, alignSelf: 'center', marginTop: 18}}
            source={require('../assets/logoPorta.png')}
        />
          <TextInput
            label='Usuário'
            mode="outlined"
            value={user}
            theme={{colors:{primary:"blue"}}}
            style={{marginLeft: 18, marginTop: 18, marginRight: 18}}
            onChangeText={(text) => setUser(text)}
          />
          <TextInput
            label='Senha'
            mode="outlined"
            value={password}
            theme={{colors:{primary:"blue"}}}
            secureTextEntry={true}
            style={{marginLeft: 18, marginTop: 18, marginRight: 18}}
            onChangeText={(text) => setPassword(text)}
          />
          <Button 
          mode="contained"
          style={{marginLeft: 18, marginTop: 18, marginRight: 18, backgroundColor:'blue'}} 
          //onPress={() => }
          onPress={() => login()}
          >
            Entrar
          </Button>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default LoginScreen;
