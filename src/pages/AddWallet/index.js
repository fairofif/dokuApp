import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import { useState } from 'react';

const AddWallet = () => {
    const route = useRoute();
    const groupname = route.params.groupname;
    const navigation = route.params.navigation;

    const [walletName, setWalletName] = useState();
    const [walletBalance, setWalletBalance] = useState();

    const addWallet = () => {
        var url = "https://wakacipuy.my.id/dokuApp/addWallet/"+groupname+"/"+walletName+"/"+walletBalance
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
        route.params.setNumberState();
        navigation.navigate("WalletManagement", {groupname, navigation});
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
                Add Wallet
              </Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.inputTextContainer}>
                    <TextInput
                        placeholder='Wallet Name'
                        onChangeText={(text) => setWalletName(text)}
                    />
                </View>
                <View style={styles.inputTextContainer}>
                    <TextInput
                        placeholder='Balance'
                        onChangeText={(text) => setWalletBalance(text)}
                    />
                </View>
                <TouchableOpacity style={styles.addWalletButton}
                    onPress={addWallet}    
                >
                    <Text style={styles.textAddButton}>Add Wallet</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddWallet;

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
        alignItems: "center",
        justifyContent: "center"
      },
      inputTextContainer: {
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
      textAddButton: {
        fontFamily: 'ComfortaaRegular',
        fontSize: 12,
        color: "white"
      },
      addWalletButton: {
        backgroundColor: "#7366FE",
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 8
      }
})