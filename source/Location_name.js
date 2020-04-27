import GetLocation from 'react-native-get-location'
 


import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
// export const {myApiKey} ="AIzaSyAW8_NXr6eDh267yQ1aFSRT3pqryeMElgE";

export default class Location_name extends Component {
  state = {
    visibleModal: null,
    long:0,
    lat:0,
  };
componentDidMount()
{
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        let myApiKey = "AIzaSyD7f0wcWkJR0gEvUYDxJMZwJ_y92cvJaNI";

    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + location.latitude + ',' + location.longitude + '&key=' + myApiKey)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(JSON.stringify(responseJson));
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
    
})
    
}

  render() {
   
    return (
      <View>
        <Text>{this.state.long}</Text>
      </View>
    );
  }
}
