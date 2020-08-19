import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  //Aqui fica o array de tudo que foi escrito. 
  //Tive que definir aqui pq o componente debaixo vai usar.
  const [courseGoals, setCourseGoals]=useState([])
  const [isAddMode,setIsAddMode]=useState(false)

  //Poderia ter colocado essa função no GoalInput, mas coloquei aqui pra testar o ".bind"
  const addGoalHandler=(goalTitle)=>{
    // O [...arrayQualquer,novoElemento] faz o novo elemento ser add
    ///no arrayQualquer. 
    setCourseGoals((currentGoals)=>[
      ...courseGoals,{key:Math.random().toString(),value:goalTitle}
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler=goalId=>{
    //Atualizo os Goals, depois de deletar 1.
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=>goal.key !==goalId)
    })
  }

  const cancelGoalAdditionalHandler=()=>{
    setIsAddMode(false)
  }
 //A view só ocupa o tamanho das childs. Já o Modal, ocupa a tela toda.
  return (
    <View >  
      <View style={styles.inicialButton}>
        <Button title="Add new Goal" onPress={()=>setIsAddMode(true)}/>
      </View>    
      

      <GoalInput 
      visible={isAddMode}
      onAddGoal={addGoalHandler} 
      courseGoals={courseGoals} 
      setCourseGoals={setCourseGoals}
      onCancel={cancelGoalAdditionalHandler}
      />

      <FlatList 
      data={courseGoals} 
      renderItem={cadaItem=> 
        <GoalItem 
        id={cadaItem.item.key} 
        onDelete={removeGoalHandler} 
        title={cadaItem.item.value}/>}
      />

    </View>
  );
}

//Se não colocar flex:1 (pega 100% do lugar), ele só vai pegar o tamanho que cabe as childs
const styles = StyleSheet.create({
  inicialButton:{
    marginTop:30
    
    /*
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"red",
    width:"100%"
    */
  }  
});
