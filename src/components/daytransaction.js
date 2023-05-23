import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { } from 'react'
import { useFonts } from 'expo-font'
import TransactionWrapper from './transactionwrapper';
import { faL } from '@fortawesome/free-solid-svg-icons';

const DayTransaction = ({day, expense, transactiondata}) => {
    const [fontLoaded] = useFonts({
        ComfortaaBold: require("../../assets/fonts/Comfortaa-Bold.ttf"),
        ComfortaaRegular: require("../../assets/fonts/Comfortaa-Regular.ttf"),
        ComfortaaLight: require("../../assets/fonts/Comfortaa-Light.ttf")
      });
    
      if (!fontLoaded) return null;

      return (
        <View>
            <View style={styles.dayContainer}>
                <Text style={styles.textDay}>
                    Day {day}
                </Text>
                <Text style={[styles.textExpense, {color: expense < 0 ? "red":"green"}]}>
                    Rp.{expense}
                </Text>
            </View>
            <View style={styles.transactionContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={transactiondata}
                    renderItem={({item}) =>
                        <TransactionWrapper 
                            kind={item.kind}
                            fromWallet={item.fromWallet}
                            amount={item.amount}
                            incomeOutcomeKind={item.IncomeOutcomeKind}
                            toWallet={item.toWallet}
                            createdBy={item.createdBy}
                        />
                    }
                
                />
            </View>
        </View>
            
      )


}

export default DayTransaction;

const styles = StyleSheet.create({
    dayContainer: {
        width: "100%",
        height: 20,
        borderBottomColor: "#99aab5",
        borderBottomWidth: 0.5,
        borderTopColor: "#99aab5",
        borderTopWidth: 0.5,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    transactionContainer: {
        
    },  
    textDay: {
        fontFamily: 'ComfortaaLight',
        fontSize: 12,
        color: 'white',
        marginLeft: 12
    },
    textExpense: {
        fontFamily: 'ComfortaaLight',
        fontSize: 12,
        color: 'white',
        marginRight: 12
    }
})