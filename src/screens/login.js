
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

function Login(props) {
    return (
      <Container>
      <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button   rounded    onPress={() => props.navigation.navigate("Main")}   style={styles.signin}>
            <Text>Sign In</Text>
          </Button>
            <Button  onPress={() => props.navigation.navigate("SignUp")} rounded  block success     style={styles.btn}>
            <Text>Dont have any account ? register here</Text>
          </Button>
          </Form>
        

        </Content>
      </Container>
    );
  }

const styles = StyleSheet.create({
  btn :{
  
    marginTop:10,
 
 
  },
  signin:{
    width:"40%",
    // justifyContent:"flex-end",
    // flex:1,
    // alignContent:"flex-end",
    marginTop:15,
    fontSize:33,
    justifyContent:"center",
    textAlign:"center",
    alignSelf:"flex-end"

  }

})
export default Login;