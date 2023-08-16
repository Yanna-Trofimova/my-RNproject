import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import { useFonts } from 'expo-font';
import PostsScreen from './Screens/mainScreen/PostsScreen';
import CreatePostScreen from './Screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen ';
import { useRoute } from './router';



export default function App() {
  const routing = useRoute({});

    const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf")
  });

    if (!fontsLoaded) {
    return null;
    }
  
  
  
  
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
  
// });

