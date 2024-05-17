import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Alert, Modal, Switch, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('male');
    const [isStudent, setIsStudent] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const defaultImage = require('../../assets/dog1.jpg');

    useEffect(() => {
        loadData();
    }, []);

    const saveData = async () => {
        if (!name.trim() || !email.trim()) {
            Alert.alert('Error', 'Name and Email fields cannot be empty!');
            return;
        }

        try {
            const userData = JSON.stringify({ name, email, gender, isStudent });
            await AsyncStorage.setItem('userData', userData);
            Alert.alert('Success', 'Data saved successfully!');
            setModalVisible(false);
        } catch (error) {
            console.error('Failed to save the data to the storage', error);
        }
    };

    const loadData = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            if (userData !== null) {
                const { name, email, gender, isStudent } = JSON.parse(userData);
                setName(name);
                setEmail(email);
                setGender(gender);
                setIsStudent(isStudent);
            }
        } catch (error) {
            console.error('Failed to fetch the data from storage', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={defaultImage} style={styles.image} />
            <Text style={styles.label}>Name: {name}</Text>
            <Text style={styles.label}>Email: {email}</Text>
            <Text style={styles.label}>Gender: {gender}</Text>
            <Text style={styles.label}>Student: {isStudent ? 'Yes' : 'No'}</Text>
            <Button title="Edit Profile" onPress={() => setModalVisible(true)} color="#3498db" />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Name:</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Email:</Text>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Gender:</Text>
                            <Picker
                                selectedValue={gender}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                            >
                                <Picker.Item label="Male" value="male" />
                                <Picker.Item label="Female" value="female" />
                                <Picker.Item label="Other" value="Other" />
                               
                            </Picker>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Student:</Text>
                            <Switch
                                value={isStudent}
                                onValueChange={setIsStudent}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isStudent ? "#3498db" : "#f4f3f4"}
                            />
                        </View>
                        <Button style={styles.button}
                            title="Save Profile"
                            onPress={saveData}
                            color='#3498db'
                            
                        />
                        <Button
                            title="Cancel"
                            onPress={() => setModalVisible(false)}
                            color='red'
                        />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgb(124, 170, 204)',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'Roboto',
        fontSize: 20
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    inputLabel: {
        width: 60,
        fontSize: 16,
        marginRight: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'rgb(190, 225, 235)',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        marginTop: 10,
    },
    image: {
        padding: 150,
        height: 150,
        width: 150,
        marginLeft: 30,
        borderRadius: 150,
        marginBottom: 30,
    },
});

export default ProfileScreen;
