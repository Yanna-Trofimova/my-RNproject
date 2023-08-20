import React,{ useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';


export default function DefaultScreenPosts({ route, navigation }) { 
    const [posts, setPosts] = useState([]);
    console.log("params", route.params)

    useEffect(() => {
        if (route.params) {
            setPosts((prevState) => [...prevState, route.params])
        };
    }, [route.params]);

    return (
        <View style={styles.container}> 
            <FlatList
                data={posts}
                keyExtractor={(item, indx) => indx.toString()}
                renderItem={({ item }) => (
                    <View style={{justifyContent:"center", alignItems:"center", marginBottom: 20, marginTop: 70}}>
                        <Image source={{ uri: item.photo }} style={{width:350, height: 200}} />
                    </View>
                )}
            />
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 16, color: "#212121", fontWeight: 500, marginBottom: 8 }}>Назва</Text>
            
            <View style={styles.navContainer}>
               
                        <TouchableOpacity onPress={() => navigation.navigate("CommentScreen")} style={styles.comContainer}>
                            <Image source={require('../../assets/images/comment.png')} />
                            <Text>0</Text>
                        </TouchableOpacity>
              

                   
                        <TouchableOpacity onPress={() => navigation.navigate("MapScreen")} style={styles.locContainer}>
                            <Image source={require('../../assets/images/map.png')} />
                            <Text>Location</Text>
                        </TouchableOpacity>
                        
                

             </View>
                  {/* <View style={styles.form}>
                        <TextInput style={styles.input} placeholder="Назва..." />
                
                        <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
                            <Image source={require('../../assets/images/map.png')}/>
                        </TouchableOpacity>

                        <TextInput style={styles.input}   placeholder="Місцевість"/>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={() => navigation.navigate("Posts")} >
                                <Text style={
                                { fontFamily: 'Roboto-Regular', fontSize: 16 ,color: "#ffff"}
                                }>Опублікувати</Text>
                </TouchableOpacity>
            </View> */}


        </View>
    );
}

const styles = StyleSheet.create({
   container: {
        // flex: 1,
        justifyContent: 'center',
       marginHorizontal: 16
        // alignItems: 'center'
    },
    comContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    locContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    navContainer: {
         flexDirection: "row",
        justifyContent: "space-between",
    }
    
});