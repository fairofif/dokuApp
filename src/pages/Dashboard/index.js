import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { color } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import DayTransaction from '../../components/daytransaction';

const Dashboard = () => {
    const route = useRoute();
    const groupname = route.params.groupname;
    const [month, setMonth] = useState();
    const [year, setYear] = useState(0);
    const [date, setDate] = useState(new Date());
    const [transactionList, setTransactionList] = useState([]);
    

    useEffect(() => {
      setMonth(date.getMonth());
      setYear(date.getFullYear());
      console.log(month)
      const urlTransactionList = "https://wakacipuy.my.id/dokuApp/getTransaction/"+groupname+"/"+month+"/"+year 
      const li = fetch(urlTransactionList)
      .then((response) => response.json())
      .then((json) =>  {
        setTransactionList(json);
      })
      console.log(urlTransactionList);
      console.log(transactionList);
    }, [date, month]);



    const [fontLoaded] = useFonts({
      ComfortaaBold: require("../../../assets/fonts/Comfortaa-Bold.ttf"),
      ComfortaaRegular: require("../../../assets/fonts/Comfortaa-Regular.ttf"),
      ComfortaaLight: require("../../../assets/fonts/Comfortaa-Light.ttf")
    });
  
    if (!fontLoaded) return null;

    const changeMonthToString = (number) => {
      const arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      return arrMonth[number]
    }

    const prevMonth = () => {
      if (month != 0) {
        setDate(new Date(date.getFullYear(), date.getMonth()-1, 1))
      }
      else {
        setDate(new Date(date.getFullYear()-1, 11, 1))
      }
    }

    const nextMonth = () => {
      if (month != 11) {
        setDate(new Date(date.getFullYear(), date.getMonth()+1, 1))
      }
      else {
        setDate(new Date(date.getFullYear()+1, 0, 1))
      }
    }

    const openAddTransaction = () => {
      route.params.navigation.navigate("AddTransaction", {groupname})
    }

    const openMemberList = () => {
      route.params.navigation.navigate("MemberList", {groupname})
    }

    const openWalletManagement = () => {
      route.params.navigation.navigate("WalletManagement", {groupname})
    }

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
            
            <View style={styles.dateContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={prevMonth}
              >
                <Image style={styles.backButtonPic}
                  source={require('../../../assets/image/backbutton.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.datePickerButton}
              >
                <Text style={styles.dateText}>
                  {changeMonthToString(month)}, {year}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.backButton}
                onPress={nextMonth}
              >
                <Image style={styles.backButtonPic}
                  source={require('../../../assets/image/nextbutton.png')}
                />
              </TouchableOpacity>
            </View>
            
            <View style={styles.expenseContainer}>
              <View style={styles.incomeContainer}>
                <Text style={styles.expenseText}>Income</Text>
                <Text style={styles.incomeMoneyText}>Rp.120000</Text>
              </View>
              <View style={styles.outcomeContainer}>
                <Text style={styles.expenseText}>Outcome</Text>
                <Text style={styles.outcomeMoneyText}>Rp.120000</Text>
              </View>
            </View>
            
            <View style={styles.bodyContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={transactionList}
                renderItem={({item}) =>
                <DayTransaction
                  day={item.day}
                  expense={10000}
                  transactiondata={item.transactions}
                />
              }
              />
            </View>
              
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                style={styles.otherBottomButton}
                onPress={openMemberList}
              >
                <Image 
                  style={styles.backButton}
                  source={require('../../../assets/image/person.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.plusButton}
                onPress={openAddTransaction}
              >
                <Image 
                  style={styles.backButton}
                  source={require('../../../assets/image/plus.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.otherBottomButton}
                onPress={openWalletManagement}
              >
                <Image 
                  style={styles.backButton}
                  source={require('../../../assets/image/wallet.png')}
                />
              </TouchableOpacity>
            </View>
        </View>
    )
}

export default Dashboard;

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
    dateContainer: {
      height: '5%',
      backgroundColor: '#292b2f',
      borderColor: '#99aab5',
      borderBottomWidth: 0.15,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    expenseContainer: {
      height: '7%',
      flexDirection: "row",
      backgroundColor: '#292b2f',
      borderColor: '#99aab5',
      borderBottomWidth: 0.5
    },
    incomeContainer: {
      height: "100%",
      width: "50%",
      borderRightColor: '#99aab5',
      borderRightWidth: 0.5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    outcomeContainer: {
      height: "100%",
      width: "50%",
      alignItems: 'center',
      justifyContent: 'center'
    },
    bodyContainer: {
      height: '71%',
      width: '100%',
      backgroundColor: '#292b2f'
    },
    bottomContainer: {
      height: '9%',
      width: '100%',
      backgroundColor: '#7366FE',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    group: {
        fontSize: 20,
        color: "white"
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
    dateText: {
      fontFamily: 'ComfortaaRegular',
      color: 'white'
    },
    expenseText: {
      fontFamily: 'ComfortaaRegular',
      color: 'white',
      fontSize:10
    },
    incomeMoneyText: {
      fontFamily: 'ComfortaaRegular',
      color: 'green',
      fontSize:16
    },
    outcomeMoneyText: {
      fontFamily: 'ComfortaaRegular',
      color: 'red',
      fontSize:16
    },
    plusButton: {
      backgroundColor: '#FEE75C',
      borderRadius: 30,
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    otherBottomButton: {
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })