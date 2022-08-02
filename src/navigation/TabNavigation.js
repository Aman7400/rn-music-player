
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Profile from '../screens/Profile';
import { getTabIcon } from '../utils/tabIconGenerator';
import { CategoryStack, HomeStack } from './StackNavigation';



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
                },
                swipeEnabled:true
            })}>
            <Tab.Screen name="Landing" component={HomeStack} />
            <Tab.Screen name="Categories" component={CategoryStack} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default TabNavigation