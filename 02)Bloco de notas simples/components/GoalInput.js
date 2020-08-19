import React, { useState } from 'react';
import {StyleSheet,Text, View,TextInput,Button, Modal} from 'react-native';

const GoalInput=(props)=>{
    //Aqui fica só o input que acabei de escrever
    const [enteredGoal, setEnteredGoal]=useState('')
  
    const goalInputHandler=(enteredText)=>{
      setEnteredGoal(enteredText)
    }

    const addGoalHandler =()=>{
      props.onAddGoal(enteredGoal)
      setEnteredGoal('')
    }
  
    return(

      <Modal visible={props.visible} animationType="slide">
        <View style={styles.screen}>

          <TextInput
          placeholder="Course Goals" 
          style={styles.areaInput} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />
          <View style={styles.allButtons}>
            <View style={styles.simpleButton} >
              <Button title="Cancel" color="red" onPress={props.onCancel}/>
            </View>  
            <View  style={styles.simpleButton}>
              <Button title="Add" onPress={addGoalHandler}/> 
            </View>            
          </View>
          

        </View>

      </Modal>
    )
}

const styles = StyleSheet.create({
    screen:{
      flex:1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    },areaInput:{
      width:"80%",
      borderColor:"black",
      borderWidth:1,
      padding:10
    },allButtons:{
      marginTop:20,
      flexDirection:"row-reverse",
      justifyContent:"space-between",
      width:"60%"
    },simpleButton:{
      width:"40%"
    }
})

export default GoalInput