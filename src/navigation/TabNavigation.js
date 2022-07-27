
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Categories from '../screens/Categories';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { getTabIcon } from '../utils/tabIconGenerator';
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
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default TabNavigation