import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './src/components/HomeScreen'
import { HelpForm } from './src/components/HelpForm'
import { CapturePhoto } from './src/components/CapturePhoto'


const Stack = createStackNavigator();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: '10'
  }
})

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sahaya" component={HomeScreen} />
          <Stack.Screen name="Raise Help" component={HelpForm} />
          <Stack.Screen options={{title: 'Take Photo'}} name="CapturePhoto" component={CapturePhoto} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}