import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import GroupCard from '../../components/groupcard'
import { useRoute } from '@react-navigation/native'
import { useFonts } from 'expo-font'

const GroupList = () => {
  const [currentEmail, setCurrentEmail] = useState();
  const [partyList, setPartyList] = useState([]);
  const route = useRoute();
  const [isLoading, setLoading] = useState(true);
  const navigation = route.params.navigation

  

  useEffect(() => {
    setLoading(true);
    setCurrentEmail(route.params.email);
  
    const urlPartyList = "https://wakacipuy.my.id/dokuApp/getPartyList/" + route.params.email;
    const li = fetch(urlPartyList)
      .then((response) => response.json())
      .then((json) =>  {
        setPartyList(json);
      })
  }, [isLoading]);

  const refresh = () => {
    setLoading(!isLoading);
  }

  const openNewGroupScreen = () => {
    route.params.navigation.navigate("NewGroup", {currentEmail, refresh, navigation})
  }

  const [fontLoaded] = useFonts({
    ComfortaaBold: require("../../../assets/fonts/Comfortaa-Bold.ttf"),
    ComfortaaRegular: require("../../../assets/fonts/Comfortaa-Regular.ttf"),
    ComfortaaLight: require("../../../assets/fonts/Comfortaa-Light.ttf")
  });

  if (!fontLoaded) return null;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} />
        <TextInput
          placeholder='Search Group'
        />
      </View>
      <FlatList style={{ marginTop: 10 }}
        showsVerticalScrollIndicator={false}
        data={partyList}
        renderItem={({ item }) =>
          <GroupCard
            // {...this.resetMemberList()}
            groupname={item.partyName}
            listmember={item.members}
            numberofmember={item.members.length}
            balance={parseInt(item.ballance[0]["ballance"])}
            email={route.params.email}
            navigation={route.params.navigation}
          />
        }
      />
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          onPress={openNewGroupScreen}
          style={styles.buttonAddGroup}>
          <Text style={styles.textCreate}>Create New Group</Text>
        </TouchableOpacity>
      </View>
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
    width: '70%',
    height: 35,
    borderRadius: 14,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    backgroundColor: "#7366FE",
    width: "100%",
    height: 50,
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonAddGroup: {
    backgroundColor: "#FEC166",
    width: "40%",
    height: "70%",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center"
  },
  textCreate: {
    fontFamily: "ComfortaaBold",
    color: "white"
  }
})