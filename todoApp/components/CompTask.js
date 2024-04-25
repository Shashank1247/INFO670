import React from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';

const CompTask = (props) => {
    return(
        <View style={ styles.item}>
            <View style= { styles.itemLeft}>
                <View  style={styles.square}></View>
                <Text style={styles.itemText}> {props.text} </Text>
            </View>
            {/* <View >

                <Button onPress={ ()=> {
                    console.log("button clicked");
                }} 
                title='delete'/>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        opacity: 0.6,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square : {
        width : 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText: {
        maxWidth: '80%',
        textDecorationLine : 'line-through' 
    },

    items : {
        marginTop: 30,
    }
})
export default CompTask;