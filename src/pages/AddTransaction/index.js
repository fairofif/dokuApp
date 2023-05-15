import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font'

const AddTransaction = () => {
    const route = useRoute();
    const [fontLoaded] = useFonts({
        ComfortaaBold: require("../../../assets/fonts/Comfortaa-Bold.ttf"),
        ComfortaaRegular: require("../../../assets/fonts/Comfortaa-Regular.ttf"),
        ComfortaaLight: require("../../../assets/fonts/Comfortaa-Light.ttf")
      });
    
      if (!fontLoaded) return null;
    
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
        </View>
    )
}

export default AddTransaction;

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
})