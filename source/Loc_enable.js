
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
 import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
// import console = require("console");

 export default class Loc_enable extends Component {

   state = {
     visibleModal: null,
     long:0,
     lat:0,
   };
   componentDidMount()
   {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
    .then(data => {
      // The user has accepted to enable the location services
      // data can be :
      alert(data);
      //  - "already-enabled" if the location services has been already enabled
      //  - "enabled" if user has clicked on OK button in the popup
    }).catch(err => {
      // The user has not accepted to enable the location services or something went wrong during the process
      // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
      // codes : 
      alert(err);
      //  - ERR00 : The user has clicked on Cancel button in the popup
      //  - ERR01 : If the Settings change are unavailable
      //  - ERR02 : If the popup has failed to open
    });
 

   }
   
 
   render() {
   

     return (
       <View>
         <Text>sds</Text>
       </View>
     );
   }
  }
 