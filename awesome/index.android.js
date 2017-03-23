/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


 // Android

 import React, {
   Component,
 } from 'react';
 import {
   DrawerLayoutAndroid,
   ProgressBarAndroid,
   Text,
 } from 'react-native';

 class App extends Component {
   render() {
     return (
       <DrawerLayoutAndroid
         renderNavigationView={() => <Text>React Native</Text>}>
         <ProgressBarAndroid />
       </DrawerLayoutAndroid>
     );
   }
 }
