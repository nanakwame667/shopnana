import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import FavoritesStack from './screenStacks/FavoritesStack';
import HomeStack from './screenStacks/HomeStack';
import ProductStack from './screenStacks/ProductStack';
import SettingsStack from './screenStacks/SettingsStack';


const Tab =createBottomTabNavigator();
function TabNavigator(){
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                iconName = focused
                    ? 'ios-home'
                    : 'ios-home-outline';
                } 
                else if (route.name === 'Product') {
                iconName = focused ? 'ios-cube' : 'ios-cube-outline';
                }
                else if (route.name === 'Favorites') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
                }
                else if (route.name === 'Settings') {
                iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                }
              // You can return any component that you like here!
                return <Icon name={iconName} size={35} color={color} />;
            },
            tabBarActiveTintColor: '#004960',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            tabBarStyle: {
                height:70,
            }
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{headerShown:false}}/>
            <Tab.Screen name="Product" component={ProductStack} options={{headerShown:false}}/>
            <Tab.Screen name="Favorites" component={FavoritesStack} options={{headerShown:false}}/>
            <Tab.Screen name="Settings" component={SettingsStack} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}



export default TabNavigator;