import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import HomeScreen from '../../screens/HomeScreen';

const Stack= createNativeStackNavigator();
function HomeStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={HomeScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}


export default HomeStack;