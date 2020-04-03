import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button
} from 'react-native'

export class HomeScreen extends Component {
    static navigationOptions =
   {
      title: 'HomeScreen',
   };
  
   FunctionToOpenSecondActivity = () =>
   {
      this.props.navigation.navigate('Raise Help');
      
   }
  
   render()
   {
      return(
         <View style = { styles.container }>
  
           <View style={{marginBottom: 20}}>
  
            <Text style = { styles.text }> 
                    Help the people in need by reporting their status to the NGOs or the government authorities.
                    The authorities will take care of them. Come forward to help and inspire to create a generous society!!!
             </Text>
  
           </View>
  
            <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Raise Help!'/>
          
         </View>
      );
   }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom: '10'
    },
    text: {
      textAlign: 'justify',
    }
  })
  