import React from 'react';

import {SafeAreaView,Text,Image,StyleSheet}from 'react-native';


function FavoritesScreen (){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Favorites Screen</Text>
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
export default FavoritesScreen;