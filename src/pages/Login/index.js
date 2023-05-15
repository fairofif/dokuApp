import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Image, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataLogin, setDataLogin] = useState([]);

//asynchronous

//async-await
//promise
  const handleLogin = () => {
    fetchDataLogin();
    if (dataLogin.status) {
      navigation.navigate('GroupList', {email, navigation});
    }
  }

  const fetchDataLogin = async () => {
    const url = "https://wakacipuy.my.id/dokuApp/login/" + email + "/" + password;
    const valLog = await fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        setData(res);
        return (res); // would return to valLog
      })
      .catch(err => {
        console.log(err);
      })
    if (valLog.status) {
      navigation.navigate('GroupList', {email, navigation});
    }
  }
  
  const setData = async (value) => {
    await setDataLogin(value)
  }


  // buat kalo keyboardnya lagi muncul, ilangin si logo sama nama app
  const [isKeyboardShown, setKeyboardStatus] = useState(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    })
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    })
  }, [])


  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      {!isKeyboardShown &&
        <Image
          source={require('../../../assets/image/logo.png')}
          style={
            {
              width: '30%',
              height: '30%',
              resizeMode: 'contain',
              marginTop: -100
            }
          }
        />
      }
      {!isKeyboardShown &&
        <Image
          source={require('../../../assets/image/appname.png')}
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
      }

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
          onPress={() => {}}
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

