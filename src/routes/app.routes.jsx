import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Home } from "../screens/Home";
import { Race } from "../screens/Race";
import { Calculate } from "../screens/Calculate";
const Tab = createBottomTabNavigator();


const MyTabs= ()=>{
  return(  
    <NavigationContainer>
    <Tab.Navigator  ScreenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      
      tabBarStyle:{backgroundColor:'#1e1e1e'}
    }}>
       <Tab.Screen name="Inicio" component={Home} 
       options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="home-outline" size={size} color={color} />

        )       }}
       />
       <Tab.Screen name="Información" component={Race}
       
       options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="information-circle" size={size} color={color} />

        )       }}
       />
          <Tab.Screen name="Calcular concentrado mineral proteico" component={Calculate}
       
       options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="calculator-outline" size={size} color={color} />

        )       }}
       />
    </Tab.Navigator>
    </NavigationContainer>

  )
 
}

export default MyTabs;