import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import GroupList from '../pages/GroupList';
import Dashboard from '../pages/Dashboard';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="GroupList" component={GroupList} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Router