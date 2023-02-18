import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({ placeholder, secretInput }) => {
    if (secretInput) {
        return (
            <>
                
            </>
                
        )
    }
    else {
        return (

            <TextInput
                placeholder={placeholder}
                style={styles.inputBox}
            />
        )
    }
}

export default InputBox;

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    }
})