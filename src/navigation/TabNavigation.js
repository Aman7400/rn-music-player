
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Categories from '../screens/Categories';
import Profile from '../screens/Profile';
import { getTabIcon } from '../utils/tabIconGenerator';
import { HomeStack } from './StackNavigation';



const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: (props) => getTabIcon(props, route),
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingVertical: 16,
                }
            })}>
            <Tab.Screen name="Landing" component={HomeStack} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default TabNavigation