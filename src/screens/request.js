import React, { Component } from 'react';
import { Container, Header, Title, Card, CardItem, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Input, Icon } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faSearch, faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

function Request(props) {
    return (
        <ScrollView>

            <Container>
                <Content>
                    <View>
                        <Text style={styles.txt}>Write a heart felt message
                        and add an image for the
                        community, somebody
                        will defintely help you if possible</Text>
                    </View>
                    <View>
                        <Input placeholder="Message..." style={styles.input} />

                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assests/checker.png")} style={styles.checker} />
                        <Text style={styles.ChoseImg}>Choose Image</Text>
                    </View>
                    <View >
                    <Button  onPress={() => props.navigation.navigate("SignUp")} rounded  block style={styles.btn}>
                    <Text style={styles.btn}>Post Request</Text>
          
          </Button>
                    </View>

                </Content>

            </Container>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    btn:{
        color:"white",
        backgroundColor:"red",
        fontSize:25,
        marginTop:10,

    },

    input: {
        fontSize: 23,
        height: 200,
        margin: 12,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "grey",
        color: "black",

    },
    checker: {
        width: 150,
        height: 150,
        margin: 5,
    },
    ChoseImg: {
        textDecorationLine: "underline",
        textShadowColor: "red",
        fontFamily: "Roboto",

        paddingTop: 33,

        color: "#F43232",
        fontSize: 25,

        width: "100%",

        marginHorizontal: 15


    },
    txt: {
        paddingTop: 33,
        paddingBottom: 33,
        color: "midnightblue",
        fontSize: 20,
        // backgroundColor: "gray",
        width: "100%",

    },
    footer: {
        backgroundColor: "white",


    },

    header: {
        width: "100%",
        backgroundColor: "red",


    },
    span: {
        color: "red",
        fontSize: 26,
        fontWeight: "900",


    },


    body: {
        color: "black",
        fontSize: 17,
        fontWeight: "500",


    },
    title: {
        //     alignSelf:"flex-end",
        //     textAlign:"center",
        //   alignItems:"center",
        //     justifyContent:"flex-end",
        width: "100%",
        // backgroundColor:"green",
    },

})
export default Request;

