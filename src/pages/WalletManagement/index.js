import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import { useEffect, useState } from 'react';
import WalletCard from '../../components/walletcard';

const WalletManagement = () => {
  const route = useRoute();
  const navigation = route.params.navigation;
  const groupname = route.params.groupname;

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
    const val = fetch(urlWallet)  
      .then((response) => response.json())
      .then((json) =>  {
          setDataWallet(json);
      })
    console.log(dataWallet)
  }, [numberState])

  const changeNumberState = () => {
    setNumberState(numberState+1);
  }

  const openAddWalletScreen = () => {
    navigation.navigate("AddWallet", {groupname, navigation, setNumberState})
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
          Wallet Management
        </Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>Rp.{dataBalance}</Text>
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          data={dataWallet}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => 
            <WalletCard
              name={item.walletName}
              balance={item.ballance}
            />
          }
        />
      </View>
      <TouchableOpacity style={styles.floatingButton}
        onPress={openAddWalletScreen}
      >
        <Image 
          style={styles.backButton}
          source={require('../../../assets/image/plus.png')}
        />
      </TouchableOpacity>
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
  },
  floatingButton: {
    backgroundColor: "#FEE75C",
    width: "15%",
    aspectRatio: 1,
    position: "absolute",
    right: 40,
    bottom: 40,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center"
  },
})