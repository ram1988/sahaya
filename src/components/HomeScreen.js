import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image, 
  ScrollView
} from 'react-native'
import { connect } from 'react-redux';
import { Card, CardItem, Body, Content, List, ListItem } from "native-base";

export class HomeScreen extends Component {
    static navigationOptions =
   {
      title: 'HomeScreen',
   };
  
   reportsList = [];

   goToHelpScreen = () =>
   {
      this.props.navigation.navigate('Raise Help');
   }

   getListOfHelps = (helpLists) => {
     console.log(helpLists)
      const helpList = helpLists.map(help => {
        return (<ListItem>
                  <Text>
                    {help}
                  </Text>
              </ListItem>);
      });
      return helpList;
   }
  
   render()
   {
      const { report } = this.props;
      if( report ) {
        this.reportsList.push(report)
      }
      const reportsList = this.reportsList.map(report => {
        return (
          <Card>
            <CardItem>
                <Body>
                  <Text style={{fontWeight: 'bold'}}>
                    Types of Help:
                  </Text>
                  <List>
                    {this.getListOfHelps(report.type_of_help)}
                  </List>
                  <Text style={{fontWeight: 'bold'}}>
                    Additional Info:
                  </Text>
                  <Text>
                    {report.additional_info}
                  </Text>
                </Body>
                <Body>
                  <Image
                  source={{uri: report.captured_photo_uri, isStatic:true}}
                  style={{width: 100, height: 100}}
                  />
                  <Text style={{fontWeight: 'bold'}}>
                    Location:
                  </Text>
                   <Text>
                    {report.captured_photo_location}
                  </Text>
                </Body>
              </CardItem>
          </Card>
        )
      });
      return(
         <ScrollView contentContainerStyle={styles.container}>
  
           <View style={{marginBottom: 20, alignItems: 'center', width: 350}}>
  
            <Text style = { styles.text }> 
                    Help the people in need by reporting their status to the NGOs or the government authorities.
                    The authorities will take care of them. Come forward to help and inspire to create a generous society!!!
             </Text>
             <TouchableOpacity style={styles.submit} onPress = { this.goToHelpScreen } >
                    <Text style={{ color: "white" }}>Raise Help!</Text>
            </TouchableOpacity>
  
           </View>
          <View style={{marginBottom: 20, width: 400, alignItems: 'center'}}>
          <Text style = { styles.text }> 
                   Reports:             
          </Text>
            <Content style={{marginBottom: 200, width:300}}>
              {reportsList}
            </Content>
            </View>
         </ScrollView>
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
    submit: {
        width: "80%",
        backgroundColor: "#fc5185",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        marginTop: 40,
    },
    text: {
      textAlign: 'justify',
      fontWeight: "bold",
    }
  })
  
  const mapStateToProps = ({saveReports}) => {
    return {
      report: saveReports.report,
    };
  };

  export default connect(mapStateToProps, null)(HomeScreen);