import * as React from 'react';
import { View, Text} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ImageScreen from './screens/ImageScreen';

const homeName = 'Home';
const profileName = 'Profile';
const imageName = 'Image';

const Tab= createBottomTabNavigator();

export default function MainConatiner () {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName= {homeName}
            screenOptions= {({route}) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    let rn= route.name;

                    if(rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (rn === imageName) {
                        
                        iconName = focused ? 'image' : 'image-outline';
                    }
                    else if (rn === profileName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name ={iconName} size={size} color ={color} />
                },
                tabBarActiveTintColor: 'rgb(124, 170, 204)',  // Color for active tab icons and text
                tabBarInactiveTintColor: 'white',  // Color for inactive tab icons and text
                tabBarStyle: { backgroundColor: 'black' },  // Background color of the tab bar
                headerTitleAlign: 'center',
                headerStyle : { backgroundColor: 'black'},
                headerTitleStyle : { color: 'white'}
            })}

            >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={imageName} component={ImageScreen} />
                <Tab.Screen name={profileName} component={ProfileScreen} />
               

            </Tab.Navigator>
        </NavigationContainer>
    );
}
