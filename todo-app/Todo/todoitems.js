import React from "react"
import { StyleSheet, Text, TouchableOpacity, Button } from 'react-native'


class TodoItems extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const todoItems = this.props.todoItems;

        return (

            <TouchableOpacity
                style={styles.todoItems}
                onPress={() => this.props.toggleDone()}>
                <Text style={(todoItems.done) ? { color: "#AAAAAA" } : { color: "#313131" }}>
                    {todoItems.title}
                </Text>
                <Button title="Remove"
                    color={(todoItems.done) ? "rgba(200,0,0,0.5)" : "rgba(255,0,0,1)"}
                    onPress={() => this.props.removetodo()} />
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    todoItems: {
        width: "100%",
        height: 40,
        borderBottomColor: "#DDD",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15,
        fontSize: 10

    }

})


export default TodoItems