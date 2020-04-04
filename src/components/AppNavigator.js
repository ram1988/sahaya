import React from 'react'
import { NavigationContainer, ScrollView } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import HelpForm  from './HelpForm'
import CapturePhoto from './CapturePhoto'

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
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