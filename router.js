import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import PostsScreen from './Screens/mainScreen/PostsScreen';
import CreatePostScreen from './Screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen ';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

 export const useRoute = (isAuth) => {
    if (!isAuth) {
      
      return  <MainStack.Navigator>
        <MainStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <MainStack.Screen options={{headerShown: false}} name="Registration" component={RegistrationScreen} />
        </MainStack.Navigator>
    }
      return <Tabs.Navigator tabBarOptions={{showLabel: false}}>
          <Tabs.Screen options={{headerShown: false, tabBarIcon: ({focused, size,color})=>(<Ionicons name="md-grid-outline" size={24} color="black" />)}} name='Posts' component={PostsScreen} />
          <Tabs.Screen options={{ headerShown: false, tabBarIcon: ({ focused, size, color, backgroundColor, padding, borderRadius }) => (<AntDesign name="plus" size={24} color="#ffff" backgroundColor='#FF6C00' padding={13} borderRadius={100} />)}} name='Create' component={CreatePostScreen} />
          <Tabs.Screen options={{headerShown: false ,tabBarIcon: ({focused, size,color})=>(<Feather name="user" size={24} color="black" />)}}  name='Profile' component={ProfileScreen}/>
      </Tabs.Navigator>
  }