import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import {auth} from '../../config/FireBase'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import GroupCard from '../../components/groupcard'

const GroupList = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
            <FontAwesomeIcon icon={faSearch}/>
            <TextInput
              placeholder='Search Group'
            />
        </View>
        <GroupCard
          groupname={"Wakacipuy"}
          numberofmember= {'3'}
          balance={'300000'}
        />
    </View>
  )
}

export default GroupList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: '#292b2f',
    alignItems: 'center',
    paddingTop: 40
  },
  searchContainer: {
    backgroundColor: 'white',
    width : '70%',
    height: 35,
    borderRadius: 14,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})