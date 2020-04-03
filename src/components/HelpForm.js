import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button
} from 'react-native'

import {CheckBox} from "native-base"


export class HelpForm extends Component
{
 static navigationOptions =
 {
    title: 'HelpForm',
 };

 state={
  selectedLang1:false,
  selectedLang2:false,
  selectedLang3:false,
  selectedLang4:false,
 }

 render()
 {
  const {selectedLang1,selectedLang2,selectedLang3,selectedLang4} = this.state
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Type of Help?</Text>
      <View style={styles.item} >
          <CheckBox checked={selectedLang1} color="#fc5185" onPress={()=>this.setState({selectedLang1:!selectedLang1})}/>
          <TouchableOpacity onPress={()=>this.setState({selectedLang1:!selectedLang1})}>
          <Text style={
            {...styles.checkBoxTxt,
              color:this.state.selectedLang1?"#fc5185":"gray",
              fontWeight:this.state.selectedLang1? "bold" :"normal"
            }}
            >Medical Attention</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.item}>
          <CheckBox checked={this.state.selectedLang2} color="#fc5185" onPress={()=>this.setState({selectedLang2:!selectedLang2})}/>
          <TouchableOpacity onPress={()=>this.setState({selectedLang2:!selectedLang2})}>
          <Text style={
            {...styles.checkBoxTxt,
              color:this.state.selectedLang1?"#fc5185":"gray",
              fontWeight:this.state.selectedLang1? "bold" :"normal"
            }}
            >Food</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.item}>
          <CheckBox checked={this.state.selectedLang3} color="#fc5185" onPress={()=>this.setState({selectedLang3:!selectedLang3})}/>
          <TouchableOpacity onPress={()=>this.setState({selectedLang3:!selectedLang3})}>
          <Text style={
            {...styles.checkBoxTxt,
              color:this.state.selectedLang1?"#fc5185":"gray",
              fontWeight:this.state.selectedLang1? "bold" :"normal"
            }}
            >Shelter</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.item}>
          <CheckBox checked={this.state.selectedLang4} color="#fc5185" onPress={()=>this.setState({selectedLang4:!selectedLang4})}/>
          <TouchableOpacity onPress={()=>this.setState({selectedLang4:!selectedLang4})}>
          <Text style={
            {...styles.checkBoxTxt,
              color:this.state.selectedLang1?"#fc5185":"gray",
              fontWeight:this.state.selectedLang1? "bold" :"normal"
            }}
            >Others</Text>
            </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submit}>
        <Text style={{color:"white"}}>SUBMIT</Text>
      </TouchableOpacity>


    </View>
  );
 }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
  },
  checkBoxTxt:{
    marginLeft:20
  },
  submit:{
    width:"80%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  }
});