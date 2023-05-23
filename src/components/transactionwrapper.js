import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const TransactionWrapper = ({kind, incomeOutcomeKind, amount, fromWallet, toWallet, createdBy}) => {
    const [fontLoaded] = useFonts({
        ComfortaaBold: require("../../assets/fonts/Comfortaa-Bold.ttf"),
        ComfortaaRegular: require("../../assets/fonts/Comfortaa-Regular.ttf"),
        ComfortaaLight: require("../../assets/fonts/Comfortaa-Light.ttf")
    });

    if (!fontLoaded) return null;

    if (kind == "outcome" || kind == "income")
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>
                    {kind}
                </Text>
                <Text style={styles.text}>
                    {fromWallet}
                </Text>
                <Text style={styles.text}>
                    {incomeOutcomeKind}
                </Text>
                <Text style={styles.text}>
                    {createdBy}
                </Text>
                <Text style={styles.text}>
                    Rp.{amount}
                </Text>
            </View>
        )
    else {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>
                    {kind}
                </Text>
                <Text style={styles.text}>
                    {fromWallet} to {toWallet}
                </Text>
                <Text style={styles.text}>
                    {createdBy}
                </Text>
                <Text style={styles.text}>
                    Rp.{amount}
                </Text>
            </View>
        )
    }
}

export default TransactionWrapper;

const styles = StyleSheet.create({
    wrapper: {
        height: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#7289DA",
        borderBottomWidth: 0.5,
        borderBottomColor: 'black'
    },
    text: {
        fontFamily: 'ComfortaaLight',
        fontSize: 10,
        color: 'white',
    }
})