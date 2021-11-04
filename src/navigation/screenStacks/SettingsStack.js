import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import SettingsScreen from './../../screens/SettingsScreen';
const Stack= createNativeStackNavigator();
function SettingsStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SettingsStack" component={SettingsScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}


export default SettingsStack;