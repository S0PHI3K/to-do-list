import React, {useState} from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native';
import Header from '../components/header'
import Task from '../components/task'

export default function Todo () {

  const [task, setTask] = useState(); 
  
  const[taskItems, setTaskItems] = useState ([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
    return (
        <SafeAreaView style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.wrapper}>

          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item} />  
                  </TouchableOpacity>
                ) 
              })
            }
          </View>  
  
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}> */}
          <View style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Write a goal . . . '}  placeholderTextColor={'#717171'} value={task} onChangeText={text=> setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        {/* </KeyboardAvoidingView>        */}
          </View>
        </View>
      </SafeAreaView>
   
    );
  }
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fcf0f1',
    alignContent: 'center',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#01579b',
    margin: 10,
    alignSelf: 'center',
  },
  items: {
    margin: 20,
    color: 'black',
  },
  writeTaskWrapper: {
    position: 'relative',
    bottom: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15, 
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 60,
    borderColor: '#00c67f',
    borderWidth: 2, 
    width: 250,
    fontSize: 20,
    textAlign: 'center',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#f5f5f5',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00c67f',
    borderWidth: 2, 
  
  },
  addText: {
    fontSize: 40,
    textAlign: 'center',
    
  },
  
  
  })