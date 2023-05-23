import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import WalletCardTransaction from '../../components/walletcardTransaction';

const AddTransaction = () => {
    const route = useRoute();
    
    const [selectedButton, setSelectedButton] = useState("");
    const [textDate, setDate] = useState("");
    const [textForm2, setTextForm2] = useState("Wallet");
    const [textForm3, setTextForm3] = useState("Category");
    const [valueTextForm2, setValueTextForm2] = useState("");
    const [valueTextForm3, setValueTextForm3] = useState("");
    const [amount, setAmount] = useState("");
    const [dataWallet, setDataWallet] = useState();
    const [numberState, setNumberState] = useState(0);

    useEffect(() => {
      const urlWallet = "https://wakacipuy.my.id/dokuApp/getWallet/"+route.params.groupname
      const val = fetch(urlWallet)
        .then((response) => response.json())
        .then((json) =>  {
          setDataWallet(json);
      })
    }, [numberState])


    const AddTransaction = () => {
      var urlPost;
      if (selectedButton == "buttonTransfer") {
        urlPost = "https://wakacipuy.my.id/dokuApp/addTransaction/"+route.params.groupname+"/"+route.params.email+"/transfer/"+valueTextForm2+"/"+valueTextForm3+"/"+amount+"/"+textDate+"/NULL"
      }
      else if (selectedButton == "buttonIncome") {
        urlPost = "https://wakacipuy.my.id/dokuApp/addTransaction/"+route.params.groupname+"/"+route.params.email+"/income/"+valueTextForm2+"/NULL/"+amount+"/"+textDate+"/"+valueTextForm3
      }
      else {
        urlPost = "https://wakacipuy.my.id/dokuApp/addTransaction/"+route.params.groupname+"/"+route.params.email+"/outcome/"+valueTextForm2+"/NULL/"+amount+"/"+textDate+"/"+valueTextForm3
      }
      console.log(urlPost);
      const value = fetch(urlPost, {method: "POST"})
            .then(res => {
                return res.json();
            })
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log(err);
            })
      route.params.incNumberState();
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
                Add Transaction
              </Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.kindContainer}>
                <TouchableOpacity style={[styles.kindButton, {backgroundColor: selectedButton == "buttonIncome" ? "blue" : "#7366FE"}]}
                  onPress={() => {
                    setSelectedButton("buttonIncome")
                    setTextForm2("Wallet")
                    setTextForm3("Category")
                  }}
                >
                  <Text style={styles.textKindButton}>
                    Income
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.kindButton, {backgroundColor: selectedButton == "buttonOutcome" ? "blue" : "#7366FE"}]}
                  onPress={() => {
                    setSelectedButton("buttonOutcome")
                    setTextForm2("Wallet")
                    setTextForm3("Category")
                  }}
                >
                  <Text style={styles.textKindButton}>
                    Outcome
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.kindButton, {backgroundColor: selectedButton == "buttonTransfer" ? "blue" : "#7366FE"}]}
                  onPress={() => {
                    setSelectedButton("buttonTransfer")
                    setTextForm2("From")
                    setTextForm3("To")
                  }}
                >
                  <Text style={styles.textKindButton}>
                    Transfer
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Date</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    placeholder='YYYY-MM-DD'
                    placeholderTextColor={"grey"}
                    onChangeText={(text) => setDate(text)}
                  />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>{textForm2}</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    onChangeText={(text) => setValueTextForm2(text)}
                  />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>{textForm3}</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    onChangeText={(text) => setValueTextForm3(text)}
                  />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Amount</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    onChangeText={(text) => setAmount(text)}
                  />
                </View>
              </View>
              <TouchableOpacity 
                style={[styles.kindButton, {backgroundColor: "#EB459E", height: "5%", width: "30%", marginTop: 12, borderRadius: 8}]}
                onPress={AddTransaction}
              >
                <Text style={[styles.textKindButton, {fontFamily: "ComfortaaBold"}]}>Add Transaction</Text>
              </TouchableOpacity>
              <View style={styles.lines}></View>
              <View style={styles.listContainer}>
                <FlatList
                  data={dataWallet}
                  renderItem={({item}) => 
                    <WalletCardTransaction
                      name={item.walletName}
                    />
                  }
                />
              </View>
            </View>
        </View>
    )
}

export default AddTransaction;

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
        height: "100%",
        backgroundColor: "#292b2f",
        alignItems: "center"
      },
      kindContainer: {
        height: "10%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottomColor: "white",
        borderBottomWidth: 0.5
      },
      kindButton: {
        borderRadius: 18,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: "25%",
        height: "60%",
        alignItems: "center",
        justifyContent: "center"
      },
      textKindButton: {
        fontFamily: 'ComfortaaRegular',
        fontSize: 12,
        color: "white"
      },
      inputContainer: {
        width: "100%",
        flexDirection: "row",
        height: "5%",
        alignItems: "flex-end",
        justifyContent: "space-between"
      },
      inputTitle: {
        fontFamily: 'ComfortaaRegular',
        fontSize: 14,
        color: "white",
        marginLeft: 20
      },
      inputBox: {
        width: "70%",
        height: "100%",
        borderBottomColor: "white",
        borderBottomWidth: 0.3,
        marginRight: 20,
        justifyContent: "flex-end",
        paddingLeft: 5
      },
      lines: {
        borderBottomColor: "white",
        borderBottomWidth: 0.5,
        width: "100%",
        marginTop: 12
      },
      listContainer: {
        width: "100%",
        height: "60%"
      }
})