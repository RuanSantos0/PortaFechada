import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button, TextInput } from 'react-native-paper';  
    
export default class HomeScreen extends Component{
  constructor(props) {
    super(props)
    this.state = {
      topico: '',
    }
  }
render(){
  
  return (
    <>
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize:18, marginTop:18, alignSelf:'center', fontWeight: 'bold', color: 'blue'}}>Conecte-se a uma porta</Text>
      <TextInput
              label='Código'
              mode="outlined"
              value={this.state.topico}
              theme={{colors:{primary:"blue"}}}
              style={{marginLeft: 18, marginTop: 18, marginRight: 18}}
              onChangeText={(topico) => this.setState({topico})}
            />
      <Button 
            mode="contained"
            style={{marginLeft: 18, marginTop: 18, marginRight: 18, backgroundColor:'blue'}} 
            //onPress={() => }
            onPress={() => this.props.navigation.navigate("dados", {topico: this.state.topico})}
            >
              Conectar
            </Button>
    </View>
    </>

  );
};

}



