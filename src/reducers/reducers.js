import { combineReducers } from 'redux';
import { CAPTURE_PHOTO } from '../actions/capturePhotoAction';
import { StyleSheet, TouchableOpacity, Text, View, Button, Alert } from "react-native";


function cameraActionReducers(state = {}, action) {
  switch (action.type) {
    case CAPTURE_PHOTO:
      return {...state, photoURI: action.payload.photoURI, photoAddress: action.payload.photoAddress};
    default:
      return state;
  }
}

const AppReducers = combineReducers({
    cameraActionReducers
});
  
  
export default AppReducers;
