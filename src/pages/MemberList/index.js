import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput
} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import { useEffect, useState } from 'react';
import MemberContainer from '../../components/membercontainer';

const MemberList = () => {
    const route = useRoute();
    const [dataMember, setDataMember] = useState([]);
    const [numberState, setNumberState] = useState(0);
    const [emailType, setEmailType] = useState("");
    
    const setStateNumber = () => {
      setNumberState(numberState+1);
    }

    useEffect(() => {
        const url = "https://wakacipuy.my.id/dokuApp/getMemberLists/"+route.params.groupname
        const li = fetch(url)
            .then((response) => response.json())
            .then((json) =>  {
                setDataMember(json);
            })
    }, [numberState])
    
    const addMember = () => {
      if (emailType != "") {
        const url = "https://wakacipuy.my.id/dokuApp/addMember/"+emailType+"/"+route.params.groupname
        const value = fetch(url, {method: "POST"})
            .then(res => {
                return res.json();
            })
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log(err);
            })
        setNumberState(numberState+1)
      }

    }
    
    const [fontLoaded] = useFonts({
        ComfortaaBold: require("../../../assets/fonts/Comfortaa-Bold.ttf"),
        ComfortaaRegular: require("../../../assets/fonts/Comfortaa-Regular.ttf"),
        ComfortaaLight: require("../../../assets/fonts/Comfortaa-Light.ttf")
      });
    
      if (!fontLoaded) return null;
    
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
              <TouchableOpacity style={styles.backButton}>
                <Image style={styles.backButtonPic}
                  source={require('../../../assets/image/backbutton.png')}
                />
              </TouchableOpacity>
              <Text style={styles.groupName} >
                {route.params.groupname}
              </Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.typeEmail}>
                <TextInput
                  placeholder='type an email'
                  onChangeText={text => setEmailType(text)}
                />
              </View>
              <TouchableOpacity
                style={styles.addMemberButton}
                onPress={addMember}
              >
                <Text style={styles.textAddButton}>Add Member</Text>
              </TouchableOpacity>  
              <View style={styles.listContainer}>
                <FlatList
                  data={dataMember}
                  showsVerticalScrollIndicator={false}
                  renderItem = {({item}) =>
                    <MemberContainer
                      setParentNumberState={setNumberState}
                      name={item.email}
                      groupname={route.params.groupname}
                    />
                  }
                />
              </View>
            </View>
        </View>
    )
}

export default MemberList;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red',
        justifyContent: 'space-between'
      },
      topContainer: {
        height: '8%',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'row'
      },
      backButton: {
        alignItems: 'center',
        height: '70%',
        justifyContent: 'center',
        aspectRatio: 1,
        marginStart: 5,
        marginEnd: 5
      },
      backButtonPic: {
        height: "60%",
        aspectRatio: 1
      },
      groupName: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'ComfortaaBold'
      },
      contentContainer: {
        height: "92%",
        width: "100%",
        backgroundColor: "#292b2f",
        alignItems: "center"
      },
      typeEmail: {
        marginTop: 8,
        backgroundColor: 'white',
        width: '70%',
        height: 35,
        borderRadius: 14,
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
      },
      listContainer: {
        marginTop: 5,
        width:"100%",
        height:"100%"
      },
      textAddButton: {
        fontFamily: 'ComfortaaRegular',
        fontSize: 12,
        color: "white"
      },
      addMemberButton: {
        backgroundColor: "#7366FE",
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 8
      }
})