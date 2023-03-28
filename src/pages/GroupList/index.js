import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import GroupCard from '../../components/groupcard'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

const GroupList = () => {
  const [currentEmail, setCurrentEmail] = useState();
  const [partyList, setPartyList] = useState([]);
  const route = useRoute();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setCurrentEmail(route.params.email);
    const urlPartyList = "https://wakacipuy.my.id/dokuApp/getPartyList/" + route.params.email;
    const li = fetch(urlPartyList)
      .then((response) => response.json())
      .then((json) =>  {
        setPartyList(json);
      })
  }, []);




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
  }
})