import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native';



function OnBoardingScreen ({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <Image source={require('../assets/images/logo.png')}/>
                    <Text style={{fontFamily:'Poppins_Bold',fontSize:25,marginLeft:5}}>ShopNana</Text>
                </View>
                <View style={styles.contents}>
                    <Image style={{width:336,height:281}} source={require('../assets/images/onboard.png')}/>
                    <Text style={styles.text}> ShopNana has the best shopping deals</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.welcome}
            onPress={()=>navigation.navigate('Register')}
            >
            <Text style={styles.welcomeText}>Get Started</Text>
            <Image style={{marginBottom:5,marginLeft:5}} source={require('../assets/images/rarrow.png')}/>
            </TouchableOpacity>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    content:{
        marginTop:60,
        // alignItems:'center'
    },
    contents:{
        marginTop:80,
        alignItems:'center'
    },
    logo:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        marginTop:80,
        fontFamily:'Poppins_Regular',
        fontSize:25,
        textAlign:'center'
    },
    welcome:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:100
    },
    welcomeText:{
        fontFamily:'Poppins_Bold',
        fontSize:22
    }
})

export default OnBoardingScreen;