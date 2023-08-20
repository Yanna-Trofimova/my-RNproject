import React from "react";
// import { } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import  DefaultScreenPosts  from "./DefaultScreenPosts";
import  MapScreen  from "./MapScreen";
import CommentScreen from "./CommentsScreen";


const NestedScreen = createStackNavigator();
 
export default function PostsScreen() { 


    return (
        <NestedScreen.Navigator>
            <NestedScreen.Screen name="DefaultScreen" component={DefaultScreenPosts} ></NestedScreen.Screen>
            <NestedScreen.Screen name="MapScreen" component={MapScreen} ></NestedScreen.Screen>
            <NestedScreen.Screen name="CommentScreen" component={CommentScreen} ></NestedScreen.Screen>
        </NestedScreen.Navigator>
 
    );
}

// import React from "react";
// import { StyleSheet, Text, View } from 'react-native';

// export default function PostsScreen() { 


//     return (
//         <View style={styles.container}> 
//             <Text>ProstsScreen</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//    container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//   },
// });