import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import { Button,BlurView } from 'native-base';
import Home from "../screens/home.js";
import Login from "../screens/login.js";
import Splash from "../screens/splash.js";
import SignUp from "../screens/signUp.js";
import Main from "../screens/main.js";
import Request from "../screens/request.js";

function Navigation() {
  return (
    <NavigationContainer>
        
      <Stack.Navigator initialRouteName="Splash">
      
       <Stack.Screen name="Login" component={Login}  options={{
          title: 'Login or Sign ',
        
          headerRight: () => (
            <Button onPress={() => alert('This is a button!')} title=" back" color="green"
            />
          ),
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/> 
         <Stack.Screen name="Home" component={Home} options={{
          title: 'Blood bank',
        
          headerRight: () => (
            <Button onPress={() => alert('This is a button!')} title=" back" color="green"
            />
          ),
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      
        }} />
         <Stack.Screen name="SignUp" component={SignUp} options={{
            
          title: 'Register Here',
         
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
         <Stack.Screen name="Splash" component={Splash}  
         options={{headerStyle:{backgroundColor:"white",height:350},
         headerTitle:props=><Image  source={ require("../assests/blood.png")} />}} 
  />
          <Stack.Screen name="Main" component={Main}  
         options={{
            
          title: '',
         
          headerStyle: {
            backgroundColor: 'red',
            height:20,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
    
  />
   <Stack.Screen name="Request" component={Request}  
         options={{
            
          title: 'Make a Request',
         
          headerStyle: {
            backgroundColor: " rgba(244, 50, 50, 1)",
            height:60,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
    
  />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
        
export default  Navigation;
