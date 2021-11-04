import { NavigationContainer } from '@react-navigation/native';

import React,{useState} from 'react';

import {Text,View,TouchableOpacity,TextInput,Image,StyleSheet} from 'react-native';


function LogInScreen ({navigation}){
    const [email,SetEmail]= useState(null);
    return(
        <View style={styles.container}>
        <View style={styles.content}>
        <View style={styles.header}>
            <Image  source={require('../assets/images/logo1.png')}/>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:24,marginTop:30}}>Welcome to ShopNana!</Text>
            <Text style={{fontFamily:'Poppins_Light',fontSize:20,marginTop:5,marginBottom:10}}>Log In</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <TextInput
        placeholder="Email"
        onChange={SetEmail}
        value={email}
        style={styles.textInput}
        />
        <TextInput
        placeholder="Password"
        onChange={SetEmail}
        value={email}
        style={styles.textInput}
        />
        
        <TouchableOpacity style={styles.register}
        onPress={()=>navigation.navigate('Tabs')}
        >
            <Text style={{fontFamily:'Poppins_Bold',fontSize:18,color:'#fff'}}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>navigation.navigate('Register')}
            style={{marginTop:20}}
            >
            <Text style={{fontFamily:'Poppins_SemiBold',fontSize:16,color:'#004960'}}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.logIn}>
            <Text style={{fontFamily:'Poppins_Light',fontSize:16,marginRight:5}}>Don't have an account?</Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Register')}
            >
            <Text style={{fontFamily:'Poppins_SemiBold',fontSize:16,color:'#004960'}}>Register</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    content:{
        marginTop:50,
        alignItems: 'center',
    },
    header:{
        alignItems:'center'
    },
    textInput:{
        width:360,
        height:61,
        borderWidth:0.2,
        borderRadius:4,
        paddingLeft:15,
        marginBottom:10,
        marginTop:15
    },
    register:{
        justifyContent:'center',
        alignItems:'center',
        width:360,
        height:61,
        backgroundColor:'#004960',
        borderRadius:5,
        marginTop:15
    },
    logIn:{
        flexDirection:'row',
        marginTop:60
    }
})
export default LogInScreen;