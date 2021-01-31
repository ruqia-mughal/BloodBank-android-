import React, { Component } from 'react';
import { Container, Header, Title, Card, CardItem, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Input, Icon, Text } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {  faSearch, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { View, StyleSheet, Image,ScrollView } from 'react-native';

function Main(props) {
  return (
    <ScrollView>
    <Container>
      <Header style={styles.header}>

        <Body style={styles.headerlogo}>
          <Title style={styles.title} >Blood bank</Title>
        </Body>
        <Right>

          <Input placeholder="  search" style={{ color: "black", backgroundColor: "white", borderRadius: 14,width:99 }} />
          <FontAwesomeIcon icon={faSearch} size={32} color="white" secondaryColor="black" secondaryOpacity={0.4} />
        </Right>
      </Header>
      <Content>
      <Card style={styles.card}>
          <CardItem  style={{borderLeftColor:"maroon",borderRightColor:"indianred",borderTopColor:"white",borderBottomColor:"white",borderWidth:9,borderStyle:"dotted"}}>
            <Left>
              <Thumbnail source={require("../assests/blood.png")} style={{ height: 80, width: 77, resizeMode: "contain" }} />
              <Body>
                <Text>KAMRN KHAN</Text>
                <Text style={styles.body}>Blood Group<Text style={styles.span}>  O+  </Text>

                </Text>
                <Text note>33 Years old</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem style={{borderColor:"whitesmoke",borderWidth:1}}>
            <Body>

              <Text style={styles.span}> About Doner:</Text>

              <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. see more... </Text>
            </Body>
          </CardItem>
          <CardItem >
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <FontAwesomeIcon icon={faMobileAlt} style={{ color: "red", }} size={32} />
                <Text> +923489111394</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      
        <Card style={styles.card}>
          <CardItem style={{borderLeftColor:"maroon",borderRightColor:"indianred",borderTopColor:"white",borderBottomColor:"white",borderWidth:9,borderStyle:"dotted"}}>
            <Left>
              <Thumbnail source={require("../assests/blood.png")} style={{ height: 75, width: 77, resizeMode: "contain" }} />
              <Body>
                <Text>Popy khan</Text>
                <Text style={styles.body}>Blood Group<Text style={styles.span}>  O+  </Text>

                </Text>
                <Text note>21 Years old</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>

              <Text style={styles.span}> About Doner:</Text>

              <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. see more... </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <FontAwesomeIcon icon={faMobileAlt} style={{ color: "red", }} size={32} />
                <Text> +923489111394</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
      <Footer style={styles.footer}>
    <Text onPress={() => props.navigation.navigate("Request")} style={styles.txt}>    Make a Request</Text>



</Footer>
    </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerlogo:{
    backgroundColor:"red",
  },
  
  txt: {
    color: "white",
    fontSize: 25,
    backgroundColor: "red",
    width: "100%",
   
    borderRadius: 44,
    paddingLeft:"20%",

},
card:{
  flex:0,
  // margin:33,
  // shadowColor: "red",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,

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
export default Main;

