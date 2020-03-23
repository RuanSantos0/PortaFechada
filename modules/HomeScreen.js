import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button, TextInput } from 'react-native-paper';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topico: '',
      tela: ''
    }
  }
  render() {
    renderizaTela = () => {
      if (this.state.topico == 'dadosPorta') {
        this.props.navigation.navigate("dados", { topico: this.state.topico })
      }
      if (this.state.topico == 'fogaoromuloeleo') {
        this.props.navigation.navigate("fogao", { topico: this.state.topico })
      }
    }
    return (
      <>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, marginTop: 18, alignSelf: 'center', fontWeight: 'bold', color: 'black' }}>O que deseja verificar?</Text>
          {/* <TextInput
            label='Código'
            mode="outlined"
            value={this.state.topico}
            theme={{ colors: { primary: "blue" } }}
            style={{ marginLeft: 18, marginTop: 18, marginRight: 18 }}
            onChangeText={(topico) => this.setState({ topico })}
          /> */}
          <Button
            mode="contained"
            style={{ marginLeft: 18, marginTop: 18, marginRight: 18, backgroundColor: 'blue' }}
            onPress={
              () => this.props.navigation.navigate("dados", { topico: "dadosPorta" })
            }
          >
            Porta
            </Button>
          <Button
            mode="contained"
            style={{ marginLeft: 18, marginTop: 18, marginRight: 18, backgroundColor: 'red' }}
            onPress={
              () => this.props.navigation.navigate("fogao", { topico: "fogaoromuloeleo" })
            }
          >
            Fogão
            </Button>
        </View>
      </>

    );
  };
}



