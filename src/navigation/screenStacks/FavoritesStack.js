import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import FavoritesScreen from './../../screens/FavouritesScreen';

const Stack= createNativeStackNavigator();
function FavoritesStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name="FavoritesStack" component={FavoritesScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}


export default FavoritesStack;