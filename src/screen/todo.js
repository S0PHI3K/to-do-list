import React from 'react'
import {StyleSheet, View, Text,} from 'react-native'
import Header from '../components/header'
import Task from '../components/task'

export default function Todo () {
    return (
        <View>
            <Header />
            <Task />
        </View>
    )
}

const styles = StyleSheet.create ({

});