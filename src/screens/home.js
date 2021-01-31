import React from 'react'
import { View, StyleSheet, TextInput, Image, Text } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Button, Body, Icon } from 'native-base';


const Home = (props) => {
    return (
        <Container>

            <Content>

                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                    <Image source={require("../assests/asdf.jpg")} style={styles.logo} />

                    <Text style={styles.body}>Anybody can give<Text style={styles.span}> Blood </Text>
          Bring a life back to power spare only 15 minutes and save
          <Text style={styles.span}> one life
          </Text>
                    </Text>


                    <Image source={require("../assests/blood.png")} style={styles.logo} />

                </View>

            </Content>
            <Footer style={styles.footer}>

                <Text onPress={() => props.navigation.navigate("SignUp")} style={styles.txt}>         Register or LogIn</Text>



            </Footer>
        </Container>
    )
}
const styles = StyleSheet.create({
    footer: {
        backgroundColor: "white",



    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: "green",
        fontSize: 33,
        fontWeight: "bold",
    },
    span: {
        color: "red",
        fontSize: 26,
        fontWeight: "900",
        padding: 22,

    },
    txt: {
        color: "white",
        fontSize: 25,
        backgroundColor: "red",
        width: "100%",
        borderColor: "red",
        borderRadius: 44,

    },

    body: {
        color: "black",
        fontSize: 22,
        fontWeight: "500",

        padding: 22,

    }
})
export default Home;
