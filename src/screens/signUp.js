import React from 'react';
import { Container, Text, Header, Input, Label, Button, Content, Form, Item, Picker } from 'native-base';
import { View, StyleSheet } from 'react-native';
import PickerAge from "../components/picker.js"

function SignUp(props) {

    return (
      <Container style={styles.Container}>
        {/* <Header /> */}
        <Content>
          <Form>
            <Item floatingLabel style={styles.item}>
              <Label>Full name</Label>
              <Input />
            </Item>

            <PickerAge style={styles.item} />


            <Item floatingLabel last style={styles.item}>
              <Label>Mobile number</Label>
              <Input />
            </Item>
            <Item floatingLabel last style={styles.item}>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel last style={styles.item}>
              <Label> Confirm Password</Label>
              <Input />
            </Item>
          </Form>
          <Button rounded  style={styles.signin}>
            <Text>Register to become Doner</Text>
          </Button>
          <Button onPress={() => props.navigation.navigate("Login")} rounded block  style={styles.btn}>
            <Text rounded> Already have an account? Sign in</Text>
          </Button>
          <View style={styles.note}>
            <Text style={styles.txt}>
              Your Details will be public to
              the community, by using this
              app you also need to pledge to
              be a donor to help those who are
              in need.
            </Text>
          </View>
        </Content>
      </Container>
    );
  
}
const styles = StyleSheet.create({
  item: {
    color: "blue",
    marginLeft: "5%",
    marginRight: "5%",

  },
  Container: {
    width: "100%",
    marginLeft: "1%",
    marginRight: "1%",
  },
  note: {

    padding: 12,
  },
  btn: {
backgroundColor:"green",
    marginTop: 12,
  },
  txt: {
    color: "red",
    fontFamily: "arial",
    fontStyle: 'normal',
    fontWeight: 'bold'
  },
  signin: {
    width: "70%",
    // justifyContent:"flex-end",
    // flex:1,
    // alignContent:"flex-end",
    marginTop: 15,
    fontSize: 33,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "flex-end"

  }


})
export default SignUp;