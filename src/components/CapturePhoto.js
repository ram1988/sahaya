import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button
} from 'react-native'
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { RNCamera } from 'react-native-camera';
import { capturePhoto } from '../actions/capturePhotoAction';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

class CapturePhoto extends Component
{
 static navigationOptions =
 {
    title: 'CapturePhoto',
 };

 goBack = () => {
  this.props.navigation.goBack(null);
 };

 findAddress = async () => {
    const address = await new Promise ( (resolve, reject) => {
        Geolocation.getCurrentPosition(
          async(position) => {
            const address = await Geocoder.from({latitude: position.coords.latitude, longitude: position.coords.longitude })
            const country = address.results[0].formatted_address.split(",")[2].trim();
            const locDetails = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              country: country
            }
            resolve(locDetails);
          },
          error => console.log(error.message),
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
        );
      }
    );
    return address;
 };

 takePicture = async function(camera) {
  const options = { quality: 0.5, base64: true };
  const data = await camera.takePictureAsync(options);
  const locDetails = await this.findAddress();
  this.props.takePhoto(data.uri, locDetails);
  this.goBack();
};

 render()
 {
    return(
      <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}>
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
    );
 }
}
  
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom: '10'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  })
  
  const mapDispatchToProps = dispatch => {
    return {
      takePhoto: (photoURI, locDetails) => {
        const payload = {
          photoURI: photoURI,
          locDetails: locDetails
        }
        dispatch(capturePhoto(payload));
      },
    }
  };
  
  export default connect(null, mapDispatchToProps)(CapturePhoto);