//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './../components/Header';


// create a component
const HomePage = props => {
    return (
        <View style={styles.container}>
            <Header navData={props.navigation} title="Home"/>
            <View style={styles.content}>
            <Text>HomePage</Text>
            </View>           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,  
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

//make this component available to the app
export default HomePage;
