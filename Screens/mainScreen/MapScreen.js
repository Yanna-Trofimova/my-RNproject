import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import MapView,{Marker} from "react-native-maps";

export default function MapScreen() { 


    return (
        <View style={styles.container}> 
            <MapView style={{ flex: 1 }} initialRegion={{ latitude: '40.730610', longitude: '-73.935242', latitudeDelta: 0.001, longitudeDelta: 0.006 }} >
                
            </MapView>
            <Marker coordinate={{latitude: '40.730610', longitude: '-73.935242'}}/> 
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
        
});