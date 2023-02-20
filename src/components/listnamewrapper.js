import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const NameWrapper = ({ name }) => {
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
        </View>
    )
}

export default NameWrapper

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FEC166',
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 8,
        marginRight: 4
    },
    textName: {
        fontFamily: 'ComfortaaRegular',
        fontSize: 12
    }
})