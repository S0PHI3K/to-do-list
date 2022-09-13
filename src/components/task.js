import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Task (props) {
    return(
        <View style = {styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.circular}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.itemRight}>
                <Image style={{height: 35, width: 35}}
                 source={require('../assets/tickIcon.png')} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCf6',
        opacity: 0.4,
    },
    itemText: {
        maxWidth: '80%',
        marginLeft: 10,
        fontSize: 20,
        
    },
    circular: {
        width: 16,
        height: 16,
        borderColor:'#009051',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#009051',  
    }, 

})