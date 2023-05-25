import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import GroupList from '../pages/GroupList';
import Dashboard from '../pages/Dashboard';
import AddTransaction from '../pages/AddTransaction';
import GroupSetting from '../pages/GroupSetting';
import MemberList from '../pages/MemberList';
import TransactionDetails from '../pages/TransactionDetails';
import WalletManagement from '../pages/WalletManagement';
import WishList from '../pages/WishList';
import AddWallet from '../pages/AddWallet';
import NewGroup from '../pages/NewGroup';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="GroupList" component={GroupList} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
        <Stack.Screen name="AddTransaction" component={AddTransaction} options={{headerShown: false}} />
        <Stack.Screen name="GroupSetting" component={GroupSetting} options={{headerShown: false}} />
        <Stack.Screen name="MemberList" component={MemberList} options={{headerShown: false}} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} options={{headerShown: false}} />
        <Stack.Screen name="WalletManagement" component={WalletManagement} options={{headerShown: false}} />
        <Stack.Screen name="WishList" component={WishList} options={{headerShown: false}} />
        <Stack.Screen name="AddWallet" component={AddWallet} options={{headerShown: false}} />
        <Stack.Screen name="NewGroup" component={NewGroup} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Router