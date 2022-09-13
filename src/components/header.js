import React from 'react'
import { StyleSheet, Image, Text, View, SafeAreaView} from 'react-native';


export default function Header () {
  return (
    <View style={styles.container}> 
        <Image 
            style={{height:140, maxWidth:'100%'}}
            source={require('../assets/QuoteToDoList.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 20,
  }
})