import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import ProductScreen from './../../screens/ProductScreen';

const Stack= createNativeStackNavigator();
function ProductStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name="ProductStack" component={ProductScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}


export default ProductStack;