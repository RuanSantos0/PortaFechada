import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { Client, Message } from 'react-native-paho-mqtt';

export default class FogaoScreen extends Component {

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
    this.client = new Client({ uri: 'ws://test.mosquitto.org:8080/fogaoromuloeleo', clientId: 'admin123', storage: this.myStorage });
  }

  componentDidMount() {
    this.metodo()
    console.log('----------', this.props.route.params.topico)
  }

  metodo() {

    this.client.on('connectionLost', (responseObject) => {
      if (responseObject.errorCode !== 0) {
        console.log(responseObject.errorMessage);
      }
    });

    this.client.on('messageReceived', (message) => {
      console.log(message.payloadString);
      this.setState({ dados: message.payloadString })
    });

    this.client.connect()
      .then(() => {
        console.log('onConnect');
        console.log('----------', this.props.route.params.topico);
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

  render() {

    var mensagem = ''
    var imagem = ""
    var cor = ''

    if (this.state.dados == 'alerta') {
      imagem = require('../assets/fogo.png')
      cor = 'black'
      mensagem = 'Você ainda está monitorando sua comida?'
    }

    else if (this.state.dados == 'valvula') {
      imagem = require('../assets/valvula.png')
      cor = 'red'
      mensagem = 'Para sua segurança, a vávula foi acionada. Por favor, vá até o fogão e verifique sua comida!!'
    }

    else {
      imagem = require('../assets/seguro.png')
      cor = 'green'
      mensagem = 'Tudo OK' 
    }

    return(
      <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image
            style={{ alignItems: 'center', alignSelf: 'center', }}
            source={imagem}
          />
          <Text style={{
            fontSize: 18,
            marginTop: 18,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: cor
          }}>{mensagem}</Text>
        </View>
    )
  


  }
}
