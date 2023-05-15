import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import { useEffect, useState } from 'react';

const WalletManagement = () => {
  const route = useRoute();

  const [numberState, setNumberState] = useState(0);
  const [dataBalance, setDataBalance] = useState(0);
  const [dataWallet, setDataWallet] = useState();


  useEffect(() => {
    const url = "https://wakacipuy.my.id/dokuApp/getBalance/"+route.params.groupname
    const li = fetch(url)
      .then((response) => response.json())
      .then((json) =>  {
          setDataBalance(json[0]["ballance"]);
      })
    const urlWallet = "https://wakacipuy.my.id/dokuApp/getWallet/"+route.params.groupname
    const val = fetch(url)  
      .then((response) => response.json())
      .then((json) =>  {
          setDataWallet(json);
      })
  }, [numberState])




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

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>Rp.{dataBalance}</Text>
      </View>

      <View style={styles.contentContainer}>

      </View>
    </View>
  )
}

export default WalletManagement;

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
  totalContainer: {
    width: "100%",
    height: "10%",
    backgroundColor: "#292b2f",
    alignItems: "center",
    justifyContent: "center"
  },
  totalText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'ComfortaaBold'
  },
  contentContainer: {
    height: "82%",
    width: "100%",
    backgroundColor: "#292b2f",
    borderTopColor: "white",
    borderTopWidth: 1
  }
})