import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image,TextInput  } from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

export default function CreatePostScreen({navigation}) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
 const [type, setType] = useState(Camera.Constants.Type.back);
  const [location, setLocation] = useState(null);


    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        const location = await Location.getCurrentPositionAsync();
        setPhoto(photo.uri);
        console.log( "loc" , location.coords.latitude);
    }


    const sendPhoto = () => {
        navigation.navigate("DefaultScreen", { photo })
    }

    useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

    })();
  }, []);

  return (
      <View style={styles.container}>
    <Camera
        style={styles.camera}
        type={type}
        ref={setCamera}
          >
              { photo && (
              <View style={styles.takePhotoContainer}>
                  
                  <Image source={{ uri: photo }} style={{height: 200, width:200}} />
                  </View>)}
              
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={takePhoto}
          >
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
      
      <View style={styles.form}>
        
                         <TextInput style={styles.input} placeholder="Назва..." />
        
                        

        <TextInput style={styles.input} placeholder="Місцевість" />
        <TouchableOpacity onPress={() => navigation.navigate("MapScreen")} style={styles.iconBtn}>
                            <Image source={require('../../assets/images/map.png')} style={styles.icon}/>
                        </TouchableOpacity>
            </View>
          
          <View style={styles.publicContainer} >
              <TouchableOpacity style={styles.publicBtn} onPress={sendPhoto}>
                  <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: "#ffff", fontWeight: 400 }}>Опублікувати</Text>
              </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
    camera: {
      height: 240,
      width:340
    },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

    button: {
        alignSelf: "center",
        marginBottom: 30
    },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
    },
  takePhotoContainer: {
        position: 'absolute',
        top: 50,
        left: 10,
        borderColor: "#ffff",
        borderWidth: 1,
        height: 200,
        width:200
    },
    publicContainer: {
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: 60,
        
    },
  publicBtn: {
    width: 340,
    backgroundColor: "#FF6C00",
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 110,
    paddingRight: 110,
    borderRadius: 100,
       
  },
  input: {
      borderBottomWidth: 1,
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
    paddingLeft: 20,
      
  },
  icon: {
    position: 'absolute',
    top: -37,
    left: 15
  },
 
});




