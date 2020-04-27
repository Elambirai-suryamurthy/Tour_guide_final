import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import Scanner from './source/Scanner';
// import Animbutton from './source/Animbutton';
// import Animbutton from 'react-native-safe-area-view';
import Image_upload from './source/Image_upload';
// import Layout from './source/Layout';
const MainNavigator = createStackNavigator({
  // Animbutton:{screen:Animbutton},
  Image_upload: {screen: Image_upload},
  // Layout:{screen:Layout}


},{
  headerMode: 'none',
  navigationOptions: {
    headerShown: false
  }
 });

const App = createAppContainer(MainNavigator);  

export default App;
