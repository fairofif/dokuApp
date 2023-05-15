import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const WalletCard = ({ name, balance }) => {
    const [fontLoaded] = useFonts({
        ComfortaaBold: require("../../assets/fonts/Comfortaa-Bold.ttf"),
        ComfortaaRegular: require("../../assets/fonts/Comfortaa-Regular.ttf"),
        ComfortaaLight: require("../../assets/fonts/Comfortaa-Light.ttf")
    });

    if (!fontLoaded) return null;

    return (
        <View style={styles.wrapper}>
            <Text style={styles.textName}>
                {name}
            </Text>
            <Text style={styles.textName}>
                Rp.{balance}
            </Text>
        </View>
    )
}

export default WalletCard;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#7289DA',
        width: "100%",
        height: 30,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        borderTopColor: "white",
        borderTopWidth: 0.3
    },
    textName: {
        fontFamily: 'ComfortaaRegular',
        fontSize: 12,
        color: "white"
    }
})