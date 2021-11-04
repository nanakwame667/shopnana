import React,{useState} from 'react';

import {SafeAreaView,View,Text,Image,StyleSheet,TextInput,FlatList}from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Category from './../components/Category';
import Product from '../components/Product';

function HomeScreen (){
    const [search,setSearch]=useState(null);
    const color = "#004960";
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.topIcons}>
                    <Icon style={{marginRight:220}} name="ios-menu-outline" size={35} color={color}/>
                    <Icon name="ios-cart-outline" size={35} color={color}/>
                </View>
                <View style={styles.heading}>
                    <Text style={{fontFamily:'Poppins_SemiBold',fontSize:20}}>Welcome NanaKwame!</Text>
                    <Text style={{fontFamily:'Poppins_Regular',fontSize:14}}>Get quality products from ShopNana</Text>
                </View>
                <View style={styles.searchInput}>
                <Icon style={{
                    position: "absolute",
                    marginTop:32,
                    left:0,
                    marginLeft:40
                }} 
                name="ios-search-outline" size={22} color={color}/>
                    <TextInput
                    onChange={setSearch}
                    value= {search}
                    placeholder="Search for Product"
                    style={{
                        fontFamily:'Poppins_Light',
                        width:360,
                        height:61,
                        borderWidth:0.2,
                        borderRadius:4,
                        paddingLeft:45,
                        marginBottom:10,
                        marginTop:15
                    }}
                    />
                </View>
                <View style={styles.category}>
                    <Text style={{fontFamily:'Poppins_Bold',fontSize:18,marginRight:150}}>Categories</Text>
                    <Text style={{fontFamily:'Poppins_Bold',fontSize:14,color:color}}>See all</Text>
                </View>
                <View style={styles.categoryItem}>
                <Category/>
                </View>
                <View style={styles.category}>
                    <Text style={{fontFamily:'Poppins_Bold',fontSize:18,marginRight:80}}>Popular Products</Text>
                    <Text style={{fontFamily:'Poppins_Bold',fontSize:14,color:color}}>See all</Text>
                </View>
                <View style={styles.categoryItem}>
                <Product/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    topIcons:{
        flexDirection:'row',
        justifyContent:'space-around',
        // alignItems:'center',
    },
    content:{
        flex:1,
        marginTop:50,
    },
    heading:{
        marginTop:15,
        alignItems:'center'
    },
    searchInput:{
        alignItems:'center'
    },
    category:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
        alignItems:'center'
    },
    categoryItem:{
        flexDirection:'row'
    }
})
export default HomeScreen;