import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Image, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'

const NewGroup = () => {
    const [groupNameInput, setGroupNameInput] = useState("")
    const route = useRoute();
    const email = route.params.currentEmail

    const createGroup = () => {
        if (groupNameInput != ""){
            const urlPost = "https://wakacipuy.my.id/dokuApp/createParty/"+groupNameInput+"/"+route.params.currentEmail
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

            const urlPost2 = "https://wakacipuy.my.id/dokuApp/addMember/"+route.params.currentEmail+"/"+groupNameInput
            const value2 = fetch(urlPost2, {method: "POST"})
            .then(res => {
                return res.json();
            })
            .then(res => {
                return res;
            })
            .catch(err => {
                console.log(err);
            })
        }
        route.params.refresh();
        route.params.navigation.navigate("GroupList", {email})
    }
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Group Name"
                value={groupNameInput}
                onChangeText={text => setGroupNameInput(text)}
                style={styles.inputBox}
            />
        </View>
        <TouchableOpacity
          onPress={createGroup}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonTextRegister}>
            Create Group
          </Text>
        </TouchableOpacity>
    </View>    
)
}

export default NewGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292b2f'
  },

  inputContainer: {
    width: '80%'
  },

  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },

  inputBox: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },

  button: {
    backgroundColor: '#7366FE',
    width: '40%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: 'white',
    elevation: 6
  },

  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    shadowColor: 'white',
    elevation: 6
  },

  buttonTextLogin: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonTextRegister: {
    color: '#7366FE',
    fontWeight: '700',
    fontSize: 16
  }
})

