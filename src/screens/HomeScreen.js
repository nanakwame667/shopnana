import React from 'react';

import {SafeAreaView,Text,Image,StyleSheet}from 'react-native';


function HomeScreen (){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    }
})
export default HomeScreen;