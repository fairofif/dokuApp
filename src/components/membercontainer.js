import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const MemberContainer = ({ name, groupname, setParentNumberState }) => {
    const [fontLoaded] = useFonts({
        ComfortaaBold: require("../../assets/fonts/Comfortaa-Bold.ttf"),
        ComfortaaRegular: require("../../assets/fonts/Comfortaa-Regular.ttf"),
        ComfortaaLight: require("../../assets/fonts/Comfortaa-Light.ttf")
    });

    if (!fontLoaded) return null;

    const deleteMember = () => {
        const url = "https://wakacipuy.my.id/dokuApp/deleteMember/"+name+"/"+groupname
        console.log(name,groupname)
        console.log(url)
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
        setParentNumberState();
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.textName}>
                {name}
            </Text>

            <TouchableOpacity style={styles.deleteButton}
                onPress={deleteMember}
            >
                <Text style={styles.textDeleteButton}>X</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MemberContainer

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FEC166',
        height: 30,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 8,
        marginHorizontal: "10%",
        marginTop: "5%",
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: "center"
    },
    textName: {
        fontFamily: 'ComfortaaRegular',
        fontSize: 12
    },
    deleteButton: {
        height: "100%",
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    textDeleteButton: {
        fontFamily: 'ComfortaaBold',
        fontSize: 12
    }
})