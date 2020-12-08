/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
//import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

constructor(props) {  
  super(props);  
  this.state = {altura:0, massa:0,resultado:0, resultadoText:""}
  this.calcular = this.calcular.bind(this)
}

  calcular(){
    let imc = this.state.massa/(this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc

    if(s.resultado < 16){
      s.resultadoText = "Magreza Grave"
    }else if(s.resultado <17){
      s.resultadoText = "Magreza moderada"
    }else if(s.resultado <18.5){
      s.resultadoText = "Magreza leve"
    }else if(s.resultado <25){
      s.resultadoText = "Magreza Saudavel"
    }else if(s.resultado <30){
      s.resultadoText = "Sobrepeso"
    }else if(s.resultado <35){
      s.resultadoText = "Obesidade grau I"
    }else if(s.resultado <40){
      s.resultadoText = "Obesidade grau II"
    }else{
      s.resultadoText = "Obesidade grau III (Morbida)"
    }

    this.setState(s)
  }

render() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}></TextInput>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}></TextInput>
        </View>
        <TouchableOpacity onPress={this.calcular} style={styles.button}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize:30}]}>{this.state.resultadoText}</Text>
      </View>
    </>
  );
}
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: '#ffffff',
  },
  input: {
    height:80,
    textAlign: "center",
    width: "50%",
    fontSize:50,
    marginTop:24,
  },
  buttontext: {
    color: "#ffffff",
    //height: "20%",
    alignSelf: "center",
    fontSize: 30,
    padding: 30,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: '#00ffff',
  },
  entradas: {
    flexDirection: "row"
  },
  resultado: {
    alignSelf: "center",
    color: "black",
    fontSize: 60,
    padding: 15,
  },
});

//export default App;
