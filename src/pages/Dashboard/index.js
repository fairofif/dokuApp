import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

const Dashboard = () => {
    const route = useRoute();


    return (
        <View style={styles.mainContainer}>
            <Text style={styles.group}>{route.params.groupname}</Text>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: "flex-start",
      backgroundColor: '#292b2f',
      alignItems: 'center',
      paddingTop: 40
    },
    searchContainer: {
      backgroundColor: 'white',
      width: '70%',
      height: 35,
      borderRadius: 14,
      paddingLeft: 8,
      paddingRight: 8,
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    group: {
        fontSize: 20,
        color: "white"
    }
  })