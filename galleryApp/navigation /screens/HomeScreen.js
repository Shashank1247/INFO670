import * as React from 'react';
import { View, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
    const images = [
        require('../../assets/dog1.jpg'),
        require('../../assets/dog2.jpg'),
        require('../../assets/dog3.jpg'),
        require('../../assets/dog4.jpg'),
        require('../../assets/dog5.jpg'),
        require('../../assets/dog6.jpg'),
        require('../../assets/dog7.jpg'),
        require('../../assets/dog8.jpg'),
        require('../../assets/dog9.jpg'),
        require('../../assets/dog10.jpg'),
        require('../../assets/dog11.jpg'),
        require('../../assets/dog12.jpg'),
        require('../../assets/dog13.jpg'),
        require('../../assets/dog14.jpg'),
        require('../../assets/dog15.jpg'),
        require('../../assets/dog16.jpg'),
        require('../../assets/dog17.jpg'),
        require('../../assets/dog18.jpg'),
        require('../../assets/dog19.jpg'),
        require('../../assets/dog20.jpg'),
        require('../../assets/dog21.jpg'),
        require('../../assets/dog23.jpg'),
        require('../../assets/dog24.jpg'),
   
    ];

    return (
        <ScrollView>
        <View style={styles.container}>
            {images.map((image, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.imageWrapper}
                    onPress={() => navigation.navigate('Image', { imageSrc: image })}
                 

                >
                    <Image source={image} style={styles.image} />
                </TouchableOpacity>
            ))}
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor : 'rgb(124, 170, 204)', 
    },
    imageWrapper: {
        margin: 5,
        height: 140,
        width: 140,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius : 30,
    }
});
