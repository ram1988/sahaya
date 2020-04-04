import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button, Alert, Image, ScrollView } from "react-native";


import { CheckBox, Textarea, Form } from "native-base";
import { connect } from 'react-redux';

class HelpForm extends Component {
  static navigationOptions = {
    title: "HelpForm",
  };

  state = {
    selectedLang1: false,
    selectedLang2: false,
    selectedLang3: false,
    selectedLang4: false,
  };

  goToCapturePhoto = () => {
    this.props.navigation.navigate("CapturePhoto");
  };

  

  render() {
    const {
      selectedLang1,
      selectedLang2,
      selectedLang3,
      selectedLang4,
    } = this.state;

    const { capturedPhotoURI, capturedPhotoAddress } = this.props;
    console.log("capturedPhotoURI--->"+capturedPhotoURI)
    console.log("capturedPhotoAddress--->"+capturedPhotoAddress)
    
    return (
      <ScrollView contentContainerStyle={styles.container}>
         { capturedPhotoURI && (
                <Image
                source={{uri: capturedPhotoURI, isStatic:true}}
                style={{width: 100, height: 100}}
                />
              )}
        { capturedPhotoAddress && (
              <View>
                  <Text style={{ ...styles.checkBoxTxt, color: "gray", fontWeight: "bold" }}>Photo Location:  </Text>
                  <Text style={{ ...styles.checkBoxTxt, color: "gray", fontWeight: "bold" }}>{capturedPhotoAddress}</Text>
                </View>
              )}
        <TouchableOpacity style={styles.submit} onPress = { this.goToCapturePhoto }>
          <Text style={{ color: "white" }}>Take Photo</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Type of Help?</Text>
        <View style={styles.item}>
          <CheckBox
            checked={selectedLang1}
            color="#fc5185"
            onPress={() => this.setState({ selectedLang1: !selectedLang1 })}
          />
          <TouchableOpacity
            onPress={() => this.setState({ selectedLang1: !selectedLang1 })}
          >
            <Text
              style={{
                ...styles.checkBoxTxt,
                color: this.state.selectedLang1 ? "#fc5185" : "gray",
                fontWeight: this.state.selectedLang1 ? "bold" : "normal",
              }}
            >
              Medical Attention
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <CheckBox
            checked={this.state.selectedLang2}
            color="#fc5185"
            onPress={() => this.setState({ selectedLang2: !selectedLang2 })}
          />
          <TouchableOpacity
            onPress={() => this.setState({ selectedLang2: !selectedLang2 })}
          >
            <Text
              style={{
                ...styles.checkBoxTxt,
                color: this.state.selectedLang1 ? "#fc5185" : "gray",
                fontWeight: this.state.selectedLang1 ? "bold" : "normal",
              }}
            >
              Food
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <CheckBox
            checked={this.state.selectedLang3}
            color="#fc5185"
            onPress={() => this.setState({ selectedLang3: !selectedLang3 })}
          />
          <TouchableOpacity
            onPress={() => this.setState({ selectedLang3: !selectedLang3 })}
          >
            <Text
              style={{
                ...styles.checkBoxTxt,
                color: this.state.selectedLang1 ? "#fc5185" : "gray",
                fontWeight: this.state.selectedLang1 ? "bold" : "normal",
              }}
            >
              Shelter
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <CheckBox
            checked={this.state.selectedLang4}
            color="#fc5185"
            onPress={() => this.setState({ selectedLang4: !selectedLang4 })}
          />
          <TouchableOpacity
            onPress={() => this.setState({ selectedLang4: !selectedLang4 })}
          >
            <Text
              style={{
                ...styles.checkBoxTxt,
                color: this.state.selectedLang1 ? "#fc5185" : "gray",
                fontWeight: this.state.selectedLang1 ? "bold" : "normal",
              }}
            >
              Others
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{ ...styles.checkBoxTxt, color: "gray", fontWeight: "bold" }}
          >
            Additional Information
          </Text>
          <Textarea
            style={{ ...styles.textBoxArea }}
            rowSpan={5}
            bordered
            placeholder="Additional Information of the person 
            for the authorities to spruce up the rescue efforts. "
          />
        </View>
        <TouchableOpacity style={styles.submit} onPress = { this.findCoordinates }>
          <Text style={{ color: "white" }}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#364f6b",
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 660,
    height: 580,
  },
  item: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  checkBoxTxt: {
    marginLeft: 20,
  },
  textBoxArea: {
    width: 300,
    backgroundColor: "#fff",
  },
  submit: {
    width: "80%",
    backgroundColor: "#fc5185",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginTop: 40,
  },
});

const mapStateToProps = ({cameraActionReducers}) => {
  return {
    capturedPhotoURI: cameraActionReducers.photoURI,
    capturedPhotoAddress: cameraActionReducers.photoAddress
  };
};

export default connect(mapStateToProps, null)(HelpForm);