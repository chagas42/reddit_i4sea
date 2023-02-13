import { 
  Dimensions, 
  Image, 
  StyleSheet,
  Text, 
  TouchableOpacity, 
  View
} from "react-native"
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import fonts from "../styles/fonts";

export const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.navigationArea}>
          <Feather name="arrow-left" size={24} color="white" />
          <View style={styles.searchArea}>
            <Ionicons name="search-outline" size={20} color="white" />
            <Text style={styles.SearchText}>r/pics</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={20} color="white" />
        </View>
        <Image
          source={require('../assets/pics.png')} 
          style={{
            height: 72,
            width: 72,
            backgroundColor: 'white',
            borderRadius: 100,
            marginTop: 30,
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
      </View>
      <View style={styles.infoArea}>
        <View style={styles.info}>
          <Text style={[styles.SearchText, { color: 'black', fontSize: 18,}]}>r/pics</Text>
          <Text style={[styles.SearchText, { color: '#7c7c7c', fontSize: 13, fontFamily: fonts.regular}]}>
            29.799.805 Photographers 30.379 online
          </Text>
          <Text style={[styles.SearchText, { color: '#000', fontSize: 13, fontFamily: fonts.semibold,}]}>
            A place for pictures and photographs.
            </Text>
        </View>
        <TouchableOpacity 
        style={styles.button} activeOpacity={0.2}>
          <Text style={styles.textButton}>Unir-se</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}


const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    width,
    height: 150,
    backgroundColor: '#5a74cc',
    paddingHorizontal: 20,
  }, 
  infoArea: {
    width,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  info: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  navigationArea: {
    paddingTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  searchArea: {
    height: 35,
    width: '80%',
    flexDirection:'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#8F9FD4',
    alignItems: 'center',
    borderRadius: 5,
  },
  SearchText: {
    color: 'white',
    fontFamily: fonts.semibold,
    marginLeft: 3,
  }, 
  button: {
    width: 86,
    height: 22,
    backgroundColor: '#014980',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontSize: 12,
    fontFamily: fonts.semibold,
    color: 'white'
  }
})