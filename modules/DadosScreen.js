import React, {Component} from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import { Client, Message } from 'react-native-paho-mqtt';

export default class DadosScreen extends Component{

constructor(props) {
  super(props)
  this.state = {
    codigo: '',
  }  
  this.myStorage = {
    setItem: (key, item) => {
      myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
      delete myStorage[key];
    },
  };
  this.client = new Client({ uri: 'ws://test.mosquitto.org:8080/ws', clientId: 'admin123', storage: this.myStorage });
}

componentDidMount() {
  this.metodo()
  console.log('----------',this.props.route.params.topico)
}

metodo(){

this.client.on('connectionLost', (responseObject) => {
  if (responseObject.errorCode !== 0) {
    console.log(responseObject.errorMessage);
  }
});

this.client.on('messageReceived', (message) => {
  console.log(message.payloadString);
  this.setState({dados: message.payloadString})  
});

this.client.connect()
  .then(() => {
    console.log('onConnect');
    return this.client.subscribe(this.props.route.params.topico);
  })
  .then(() => {
    const message = new Message('Dados');
    message.destinationName = this.props.route.params.topico;
    this.client.send(message);
  })
  .catch((responseObject) => {
    console.log('responseObject')
    console.log(responseObject)
    
    if (responseObject.errorCode !== 0) {
      console.log('onConnectionLost:' + responseObject.errorMessage);
    }
  })
}

render(){
      return (
      <>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {(this.state.dados == 'ABERTA') ? <Image
          style={{alignItems: 'center',alignSelf:'center',}}
          source={require('../assets/aberta.png')}
        /> : <Image
        style={{alignItems: 'center',alignSelf:'center',}}
        source={require('../assets/fechada.png')}
      /> }
        <Text style={{
          fontSize:18, 
          marginTop:18, 
          alignSelf:'center', 
          fontWeight: 'bold', 
          color: 'blue'}}>{this.state.dados}</Text>
      </View>
      </>
  
    )
  }
}
