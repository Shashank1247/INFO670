import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';  // Ensure Ionicons is imported

const defaultImage = require('../../assets/dog2.jpg'); // Ensure this path is correct

export default function ImageScreen({ route, navigation }) {
    const imageSrc = route.params?.imageSrc || defaultImage;

    useEffect(() => {
        return () => navigation.setParams({ imageSrc: null });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={imageSrc} style={styles.image} />
            <Text onPress={() => alert('This is the Image Screen')} style={styles.text}>
               
            </Text>
            {/* Adjust the size and color of the icon */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between',  // Adjusts distribution of space
        padding: 20,
        backgroundColor: 'rgb(124, 170, 204)',
    },
    image: {
        width: '100%',
        height: '70%',  // Adjust height as needed
        resizeMode: 'contain'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        alignSelf: 'flex-end',  // Aligns the button to the right
        padding: 10,  // Adjust padding as needed
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});
