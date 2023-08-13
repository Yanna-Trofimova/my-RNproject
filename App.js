import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {

    const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf")
  });

    if (!fontsLoaded) {
    return null;
    }
  
  
  return (
    // <LoginScreen/>
    <RegistrationScreen/>
  );
}

const styles = StyleSheet.create({
  
});
