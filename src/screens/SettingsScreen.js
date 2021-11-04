import React from 'react';

import {SafeAreaView,Text,Image,StyleSheet}from 'react-native';


function SettingsScreen (){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Settings Screen</Text>
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
export default SettingsScreen;