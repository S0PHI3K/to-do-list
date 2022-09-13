import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, SafeAreaView} from 'react-native';


export default function Header () {
  return (
    <View style={styles.container}> 
        <Image 
            style={{height:140, maxWidth:'100%'}}
            source={require('../assets/QuoteToDoList.png')}
                        />
          
       
        <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingTop: 5,
    paddingBottom: 5,
  }
})