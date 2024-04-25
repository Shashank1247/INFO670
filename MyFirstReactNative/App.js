import React, {useState} from 'react';
import {Text, View, Image,Button } from 'react-native';

const Dog = props => {

  const [isHungry, setIsHungry ] =useState(true);
  return  (

  <View>
    <Image source ={props.image} style={{width:150,height:150}}/>
    <Text>
      Hello, I am {props.name}, and I am {isHungry? "hungry" : "full"}!
    </Text>
    <Button 
    
    onPress={() =>{

      setIsHungry(!isHungry);
    }}
    title={isHungry? "Feed me!" : "Thank you"}

    />

  </View>
  );
}

const Dogs = () => {

  return (
    <View>
      <Text> Welcome all </Text>
    <Dog name = "john" image= {require('./assets/img/dog1.jpg')}/>
    <Dog name = "Cocoa" image= {require('./assets/img/dog2.jpg')} />
    <Dog name = "Joe" image= {require('./assets/img/dog3.jpg')}/>
    </View>
   
  );
}

export default Dogs;