import React from 'react';

import {View,Text,Image,FlatList,StyleSheet} from 'react-native';

import bicycle from '../assets/images/Bicycle.png';
import furniture from '../assets/images/Bicycle.png';
import cloth from '../assets/images/Bicycle.png';

const Data= [
    {
        id:'1',
        image: cloth,
        title:'Clothing'
    },
    {
        id:'2',
        image: bicycle,
        title:'Sports'
    },
    {
        id:'3',
        image: furniture,
        title:'Furniture'
    }

]

const Item = ({ title,image }) => (
    <View style={styles.item}>
        <Image source={image} />
        <Text style={styles.title}>{title}</Text>
    </View>
    );
function Product (){
    const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image} />
        );
    return(
        <View style={styles.container}>
        <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        />
        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    item:{
        justifyContent:'center',
        alignItems:'center',
        width:180,
        height:220,
        borderRadius:15,
        borderColor:'#CBC9C9',
        borderWidth:0.5,
        margin:8
    },
    title:{
        fontFamily: 'Poppins_Light',
        fontSize:15,
        marginTop:10
    }
})
export default Product;