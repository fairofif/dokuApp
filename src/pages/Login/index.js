import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { InputBox } from '../../components'
import { auth } from '../../config/FireBase/index'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


const Login = ({navigation}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((re) => {
        console.log(re);
      })
      .catch((re) => {
        console.log(re);
      })
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((re) => {
        setIsSignedIn(true);
      })
      .catch((re) => {
        console.log(re);
      })
  }

  // kondisi auth sign in accepted
  if (isSignedIn == true) {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('GroupList')}
          style={styles.button}
        >
          <Text style={styles.buttonTextLogin}>
            Lanjut
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  // Kondisi belum login
  else {
    return (
      <KeyboardAvoidingView
        style={styles.container}
      >
        <Image
          source={require('../../../assets/appAssets/logo.png')}
          style={
            {
              width: '30%',
              height: '30%',
              resizeMode: 'contain',
              marginTop: -100
            }
          }
        />
        <Image
          source={require('../../../assets/appAssets/appname.png')}
          style={
            {
              width: '30%',
              height: '30%',
              resizeMode: 'contain',
              marginTop: -100,
              marginBottom: -40
            }
          }
        />
        
        <View style={styles.inputContainer}> 
          {/* input email */}
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.inputBox}
          />
          {/* input pass */}
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.inputBox}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* button login */}
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonTextLogin}>
              Login
            </Text>
          </TouchableOpacity>

          {/* button register */}
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonTextRegister}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default Login;

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
    width: '100%',
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

