import React from "react"
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native"


const Inputbar = (props) => {
    return (
        <View style={styles.inputcontainer}>
            <TextInput style={styles.input}
                onChangeText={(todoInput) => props.textChange(todoInput)}
                value={props.todoInput} />

            <TouchableOpacity style={styles.Addbutton}
                onPress={props.addnewtodo}>

                <Text style={styles.Addbuttontext}>                             ADD</Text>
            </TouchableOpacity></View>
    )
}

const styles = StyleSheet.create({
    inputcontainer: {

        justifyContent: "center",
        padding: 0,
        marginTop: 6,
        shadowColor: "gray",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 3 },


    },
    input: {
        height: 50,
        paddingLeft: 15,
        backgroundColor: "#D5D9D9",
        fontSize: 20,
        borderRadius: 10,


    },
    buttonstyle: {
        marginTop: 5,
        justifyContent: "center",

    },
    Addbutton: {
        marginTop: 5,
        backgroundColor: "#33363E",
        height: 30,
        justifyContent: "center",
    },
    Addbuttontext: {
        fontSize: 22,
        alignContent: "center",
        color: "#ffff",


    }

})

export default Inputbar