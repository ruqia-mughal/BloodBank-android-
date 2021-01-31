
import React  from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

function Splash({navigation}){ 
    setTimeout(() => {
        navigation.replace("Home");
      
    }, 3000);
    return (
        // <ImageBackground source={require("../assests/abc.png")} style={{ height: "100%", width: "100%",resizeMode:"contain" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"white" }}>
                <Image source={ require("../assests/abc.png")} style={{ height: "50%", width: "100%" ,resizeMode:"contain"}}/>
             
             
            </View>
        // </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: "green",
        fontSize: 33,
        fontWeight: "bold",
    }
})

export default Splash;