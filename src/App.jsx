import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import isi from './screens/isi';
import Home from './screens/Home';
import Musik from './screens/Musik';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const tabs = createBottomTabNavigator();

const stack = createStackNavigator();
const BottomTabs = () => {
  return(
    <tabs.Navigator>
        <tabs.Screen name="Home" component={Home} options={{
          tabBarLabel: 'beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={29} />
          )
        }}/>
        <tabs.Screen name="Musik" component={Musik} options={{
          tabBarLabel: 'Musik',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="music" color={color} size={29} />
          )
        }} />
      </tabs.Navigator>
  )
}
const App = () => {
  
  return (
    <NavigationContainer  style={styles.contentBody}>
      <stack.Navigator >
        <stack.Screen name="BottomTabs" component={BottomTabs} options={{
          headerShown: false
        }}/>
        <stack.Screen name="isi" component={isi}/>
      </stack.Navigator>
    </NavigationContainer>
  )
};

export default App;

const styles = StyleSheet.create({
  contentBody: {
    margin: 100,
  },
});