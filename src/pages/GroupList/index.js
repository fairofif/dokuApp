import { View, Text } from 'react-native'
import React from 'react'
import {auth} from '../../config/FireBase'

const GroupList = () => {
  return (
    <View>
      <Text>Email: {auth.currentUser?.email}</Text>
    </View>
  )
}

export default GroupList;