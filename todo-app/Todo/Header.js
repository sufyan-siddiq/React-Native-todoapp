import React from "react"
import { StyleSheet, View, Text } from "react-native"

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TODO App</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    header: {
        padding: 0,
        height: 60,
        backgroundColor: "#122D4B",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {

        textTransform: "uppercase",
        color: "#fff",
        fontWeight:"bold",
        fontSize: 24


    },


})


export default Header