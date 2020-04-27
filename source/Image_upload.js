import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar,StyleSheet, Button,Text, View, PixelRatio, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import 'react-native-gesture-handler';
import RNFetchBlob from 'rn-fetch-blob';
import Modal from "react-native-modal";
// import { equal } from 'assert';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export default class Image_upload extends Component {
 
  constructor() {
 
    super();
      
    this.state = {
      visibleModal: null,
      ImageSource: null,
      loc_status:0,
      data: null,
 
      Image_TAG: '',

      dat:null,
      status:false,
      dummy:'',
    }
    tempMSG:''
  }
  componentDidMount() {
    this.setState({ visibleModal: 5 })
    // this.setState({ visibleModal: 5 })
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
    .then(data => {
      // The user has accepted to enable the location services
      // data can be :
      // alert(data);
      this.setState({loc_status:1});
      
      // alert(this.state.loc_status);

      //  - "already-enabled" if the location services has been already enabled
      //  - "enabled" if user has clicked on OK button in the popup
    }).catch(err => {
      // The user has not accepted to enable the location services or something went wrong during the process
      // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
      // codes : 
      // alert(err);
      this.setState({loc_status:0});
        //  alert(this.state.loc_status);
      // this.setState({loc_status:err});
      //  - ERR00 : The user has clicked on Cancel button in the popup
      //  - ERR01 : If the Settings change are unavailable
      //  - ERR02 : If the popup has failed to open
    });
  }
  selectPhotoTapped() {
    console.log(this.state.loc_status);
    // if(this.state.isVisible==false)
    // {
      // this.setState({isVisible:true});
      if(this.state.loc_status==1)
      {
            if(this.state.status==false)
    {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
 
    ImagePicker.launchCamera(options, (response) =>  {
      // console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
 
        this.setState({
 
          ImageSource: source,
          data: response.data
 
        });
      }
    });
    this.setState({status:true});
  }
  else
  {
    
    RNFetchBlob.fetch('POST', 'http://192.168.43.51/TourGuide/image_upload.php', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.data },
        // { name: 'image_tag', data: this.state.Image_TAG }
      ]).then((resp) => {
 
        var tempMSG = resp.data;
 
        tempMSG = tempMSG.replace(/^"|"$/g, '');
 
        // Alert.alert(tempMSG);
        
        var data = JSON.stringify({ "uri": tempMSG}); 
        console.log(data);
      }).catch((err) => {
      })
      
  }
  // this.setState({isVisible:true});
}
  else
{
  this.setState({ visibleModal: 5 });
  // alert(this.state.loc_status);
}
}



renderButton = (text, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

renderModalContent = () => (
  <View style={styles.modalContent}>
    <Text>Please enable your location!</Text>
    {this.renderButton("OK", () => this.setState({ visibleModal: null }))}
  </View>
);

  
 
  render() {
    return (
      
      <View style={styles.container}>
      
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "papayawhip" translucent = {true}/>
      {/* {this.renderButton("Bottom half modal", () => */}
   

  {/* )} */}
      <Modal
          isVisible={this.state.visibleModal === 5}
          style={styles.bottomModal}onBackdropPress={() => this.setState({ visibleModal: null })}height={300}>
          {this.renderModalContent()}
        </Modal>
      
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} activeOpacity={0.6} style={styles.button1} >
 
        <Text style={styles.TextStyle}> UPLOAD IMAGE </Text>

      </TouchableOpacity>

      </View>
    );
  }
 
}
 
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'papayawhip',
    paddingTop: 20
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height:300
  },
  text1:
  {
    textShadowColor: 'gray',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
    fontWeight:'bold',
  },
  container1:{
    borderRadius: 10,
    top:160,
   
    elevation: 15
  },
 
  ImageContainer: {
    borderRadius: 10,
    width: 250,
    height: 250,
    borderColor: '#a1c4fd',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5
    // elevation: 2,
    // top:80,
    // backgroundColor: '#CDDC39',
 
  },
 
  TextInputStyle: {
 
    textAlign: 'center',
    height: 40,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#028b53',
    marginTop: 20,
    fontWeight:'bold'
  },
 
  button1: {
 top:180,
    width: '35%',
    // borderRadius:190,
    backgroundColor: '#a1c4fd',
    borderRadius: 50,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 10
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  // modalContent: {
  //   backgroundColor: "white",
  //   padding: 22,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 4,
  //   borderColor: "rgba(0, 0, 0, 0.1)",
  // },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
    height:60,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
 
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    fontSize:13,
    backgroundColor:'palevioletred',
    borderRadius:5,
  }
 
});