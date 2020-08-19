import React from 'react';
import {StyleSheet,Text, View, TouchableOpacity} from 'react-native';

const GoalItem=(props)=>{
    //O cadaItem.item.value aqui vira props
    return(
    <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
        <View style={styles.screenListItens}>           
            <Text style={styles.listItem}>{props.title}</Text>
        </View> 
    </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    screenListItens:{
        paddingLeft:50,
        paddingTop:0,
        justifyContent:"space-between",
        width:"100%"
    },listItem:{
        padding:10,
        marginBottom:0,
        marginTop:20,
        borderBottomColor:"black",
        borderWidth:1,
        width:"80%"
    }

})

export default GoalItem