import React, { Component } from 'react';
import { Container, Header, Label, Button, Content, Form, Item } from 'native-base';
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { Picker } from '@react-native-picker/picker';


class PickerAge extends Component {
    state = {
        selectedcountry: 'your city',
        selectedAge: 'your age',
        selectedblood: 'your group',
        selectedcity: 'your city',
    };


    render() {
        return (
            <View>

                <Picker
                    selectedValue={this.state.selectedAge}
                    style={{ height: 50, width: 300,marginLeft:"5%",marginRight:"5%" }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedAge: itemValue })
                    }>

                    <Picker.Item label="Your age" value="age" disabled />
                    <Picker.Item label="18" value="18" />
                    <Picker.Item label="19" value="19" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="21" value="21" />
                    <Picker.Item label="22" value="22" />
                    <Picker.Item label="23" value="23" />
                    <Picker.Item label="24" value="24" />
                    <Picker.Item label=" 25" value="25" />
                </Picker>
                <Picker 
                selectedValue={this.state.selectedblood}
                    style={{ height: 50, width: 300,marginLeft:"5%",marginRight:"5%" }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedblood: itemValue })
                    }>

                    <Picker.Item label=" Blood group" value="blood" disabled />
                    <Picker.Item label="O+" value="O+" />
                    <Picker.Item label="O-" value="0-" />
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="AB" value="AB" />

                </Picker>
                <Picker
                    selectedValue={this.state.selectedcity}
                    style={{ height: 50, width: 300,marginLeft:"5%",marginRight:"5%" }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedcity: itemValue })
                    }>

                    <Picker.Item label=" City" value="city" disabled />
                    <Picker.Item label="islamabad" value="islamabad" />
                    <Picker.Item label="lahore" value="lahore" />
                    <Picker.Item label="karachi" value="karachi" />
                    <Picker.Item label="peshawar" value="peshawar" />
                    <Picker.Item label="others" value="others" />

                </Picker>
                <Picker
                    selectedValue={this.state.selectedcountry}
                    style={{ height: 50, width: 300,marginLeft:"5%",marginRight:"5%" }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedcountry: itemValue })
                    }>

                    <Picker.Item label="Country code" value="+92" disabled />
                    <Picker.Item label="+94" value="+94" />
                    <Picker.Item label="-34" value="-34" />
                    <Picker.Item label="+97" value="+97" />
                    <Picker.Item label="+98" value="+98" />


                </Picker>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
})
export default PickerAge;