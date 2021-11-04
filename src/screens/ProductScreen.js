import React from 'react';

import {SafeAreaView,Text,Image,StyleSheet}from 'react-native';


function ProductScreen (){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Product Screen</Text>
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
export default ProductScreen;