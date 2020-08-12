import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [altura, setAltura]=useState("1")
  const [peso, setPeso]=useState("0")
  const [resultado, setResultado]=useState("0")
  const [resultadoTexto, setResultadoTexto]=useState("")

  const calcular=()=>{
    //Calcula o imc.
    var imc=(peso/(altura*altura))
    setResultado(imc.toFixed(2))

    //Classifica o imc.
    if(imc<16){
      setResultadoTexto("Magreza grave")
    }else if(imc<17){
      setResultadoTexto("Magreza moderada")
    }else if(imc<18.5){
      setResultadoTexto("Magreza leve")
    }else if(imc<25){
      setResultadoTexto("Saudável")
    }else if(imc<30){
      setResultadoTexto("Sobrepeso")
    }else if(imc<35){
      setResultadoTexto("Obesidade grau I")
    }else if(imc<40){
      setResultadoTexto("Obesidade grau II")
    }else{
      setResultadoTexto("Obesidade grau III")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerMenor}>
        <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(alturaInserida)=>{setAltura(alturaInserida)}}/>
        <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(pesoInserido)=>{setPeso(pesoInserido)}}/>
      </View>
      <TouchableOpacity style={styles.botao} onPress={calcular}><Text style={styles.textoDoBotao}>Calcular</Text></TouchableOpacity>
      <Text style={styles.resultado}>{resultado}</Text>
      <Text style={[styles.resultado,{fontSize:35}]}>{resultadoTexto}</Text>
    </View>
  );
}

//Tipo o css.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerMenor:{
    flexDirection:'row'
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:20
  },
  botao:{
    backgroundColor:"#89ffa5"
  },
  textoDoBotao:{
    alignSelf:"center",
    padding:20,
    fontSize:30,
    color:"#6dc4a4"
  },
  resultado:{
    textAlign:"center",
    color:"lightgray",
    fontSize:50,
    padding:15
  }
});
