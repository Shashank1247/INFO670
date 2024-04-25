
import React, {useState} from 'react'
import {KeyboardAvoidingView,ScrollView, TouchableOpacity, TextInput, StyleSheet, Text, View,Button  } from 'react-native';
import Task from './components/Task'
import CompTask from './components/CompTask';
export default function App() {

      const [task, setTask ] =useState();
      const [taskItems, setTaskItems] = useState([]);
      const [compItems, setCompItems] = useState([]);

      const handleAddTask = () => {
        //KeyboardAvoidingView.dismis();
        if(task!=null)
        setTaskItems([...taskItems,task])
        console.log(taskItems);
        setTask(null);
        //setCompItems([...compItems,task])
      }

      const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        let compItemsCopy = [...compItems];
        itemsCopy.splice(index,1);
        compItemsCopy.push(taskItems[index]);
        setCompItems(compItemsCopy);
        setTaskItems(itemsCopy);
      }

  return (
    
    <View style={styles.container}>
      <ScrollView>
      <View style= {styles.taskManager}>
        <Text style= {styles.sectionTitle} > Today's tasks </Text>
        
        <View style = {styles.items}>
          {
            taskItems.map((item,index )=> {
              return(
              
                <TouchableOpacity key ={index} onPress={() => completeTask(index) }>
              <Task text={item} />
              </TouchableOpacity>
              )
            })
          }
       
      
        </View>
       

        <Text style= {styles.sectionTitle} > Completed tasks </Text>
        <View style = {styles.items}>
          {
            compItems.map((item,index )=> {
              return(
              
               
              <CompTask text={item} />

           
              )
            })
          }
       
      
        </View>
        </View>
        </ScrollView>
        <KeyboardAvoidingView
         
          style = {styles.writeTaskManager}
          >
            <TextInput style={styles.input} placeholder= {'write a task'} value= {task} onChangeText= {text => setTask(text)} />

          <TouchableOpacity onPress= {()=> handleAddTask() }>
          <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
           </View>
        </TouchableOpacity>
          </KeyboardAvoidingView>

      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    zIndex: 0,
    
  },
  taskManager: {
    paddingTop :80,
    paddingHorizontal : 10,

  },  
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold', 
  },
  items: {
    marginTop: 30,
  },
  writeTaskManager : {
    position: 'absolute',
    paddingHorizontal : 10,
    bottom : 40,
    width: '100%',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems: 'center'
  },
  input: {
    paddingVertical :15,
    paddingHorizontal : 15,
    backgroundColor : '#FFF',
    borderRadius : 60,
    borderColor : '#C0C0C0',
    borderWidth :1,
    width :250,

  },
  addWrapper: {
    width: 60,
    height: 60,
    bhackgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
