import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback,Image } from 'react-native';
import { useFonts } from 'expo-font';



export default function RegistrationScreen() {
  const [isReady, setIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf")
  });

    if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    Keyboard.dismiss()
  }

 


  return (
    <View style={styles.container}>
    
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <ImageBackground
        style={styles.image}
              source={require('../assets/images/BG.jpg')} >
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <View style={styles.whiteContainer}>

              <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={require('../assets/images/avatar.jpg')} />
                <TouchableOpacity style={styles.avatarBtn}>
                  <Image  source={require('../assets/images/del.png')}/>
                </TouchableOpacity>
              </View>

             <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 30 ,color: "#212121", fontWeight: 700, marginHorizontal: 107, marginBottom: 17}}>Реєстрація</Text>
              <View style={styles.form}>
                  <TextInput style={styles.input}  placeholder="Логін"/>
                  <TextInput style={styles.input }  placeholder="Адреса електронної пошти" />
                  <TextInput style={styles.input}  secureTextEntry={true} placeholder="Пароль"/>
                <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={keyboardHide}>
                  <Text style={
                  { fontFamily: 'Roboto-Regular', fontSize: 16 ,color: "#ffff"}
                }>Зареєстуватися</Text>
              </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.8} style={styles.link}>
                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16 ,color: "#1B4371"}}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
              
              </View>
            </View>
            </KeyboardAvoidingView>    
        </ImageBackground>
     </TouchableWithoutFeedback>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  whiteContainer: {
    position:"relative",
    paddingTop: 92,
    paddingBottom: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "flex-end",
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    
  },
  avatar: {
    borderRadius: 20,
    width: 120,
    height: 120,
  },
  avatarBtn: {
    top: -40,
    right: -100
  },
  input: {
      borderWidth: 1,
      borderColor: '#BDBDBD',
      marginHorizontal: 16,
      borderRadius: 10,
      height: 50,
      color: '#E8E8E8',
      width: 343,
      marginTop: 16,
      backgroundColor: "#F6F6F6",
      fontSize: 16,
      lineHeight: 19,
      paddingLeft: 16
    },
    btn: {
        backgroundColor: "#FF6C00",
        width: 343,
        height: 51,
        marginTop: 43,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        borderRadius: 100,
  },
    
     link: {
       marginTop: 16,
       marginHorizontal: 108,
    
    },
 
});


