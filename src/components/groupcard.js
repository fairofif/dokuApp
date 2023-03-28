import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { } from 'react'
import { useFonts } from 'expo-font'
import NameWrapper from './listnamewrapper'
import { ScrollView } from 'react-native-gesture-handler'


const GroupCard = ({ navigation, groupname, numberofmember, balance, listmember, email }) => {

  const [fontLoaded] = useFonts({
    ComfortaaBold: require("../../assets/fonts/Comfortaa-Bold.ttf"),
    ComfortaaRegular: require("../../assets/fonts/Comfortaa-Regular.ttf"),
    ComfortaaLight: require("../../assets/fonts/Comfortaa-Light.ttf")
  });

  if (!fontLoaded) return null;

  const openGroup = () => {
    navigation.navigate("Dashboard", {email, groupname});
  }
  

  return (
    <View style={styles.cardContainer}>
      <View style={styles.topWrapper}>
        <Text style={styles.fontGroupName}>{groupname}</Text>
        <View style={styles.memberWrapper}>
          <Text style={styles.fontNumberofMember}>{numberofmember} members</Text>
        </View>
      </View>
      <View style={styles.NameListContainer}> 
        <FlatList
          horizontal={true}
          data={listmember}
          renderItem={({item}) => <NameWrapper name={item.email}/>}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.lines}>

      </View>

      <View style={styles.bottomContainer}>
        <Text
          style={styles.fontGroupName}
        >
          Rp.{balance}
        </Text>
        <TouchableOpacity
          onPress={openGroup}
          style={styles.buttonOpenGroup}
        >
          <Text style={{fontFamily: 'ComfortaaBold', fontSize: 16, color: 'white'}}>
            Enter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GroupCard

const styles = StyleSheet.create({
  cardContainer: {
    height: 120,
    width: 250,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 14,
    shadowColor: '#68FCD6',
    elevation: 5,
    marginHorizontal: 15
  },
  topWrapper: {
    marginTop: 4,
    marginLeft: 6,
    marginRight: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  memberWrapper: {
    backgroundColor: '#7366FE',
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  NameListContainer: {
    marginLeft: 6,
    marginRight: 6,
    paddingTop: 5,
  },
  fontGroupName: {
    fontFamily: 'ComfortaaBold',
    fontSize: 16,

  },
  fontNumberofMember: {
    fontFamily: 'ComfortaaLight',
    fontSize: 12,
    color: 'white'
  },

  bottomContainer: {
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  buttonOpenGroup: {
    backgroundColor: '#FF7387',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lines: {
    backgroundColor: 'black',
    height: 1,
    marginTop: 6
  }
})