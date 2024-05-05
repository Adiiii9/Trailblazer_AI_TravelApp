import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FooterMenu from '../components/FooterMenu'
import DiscoverCard from "../components/DiscoverCard"

const Discover2 = ({route}) => {
    const {match}=route.params
  return (
    <SafeAreaView>
     {/* <View style={[]}>
      <ScrollView>
      <View>
        
        
      </View>

      <View>
     
      </View>
      </ScrollView>

      <FooterMenu></FooterMenu>
     
     
      
    </View> */}
    <DiscoverCard match={match}/>
    
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    mainContainer:{},
    container1:{}, 
    container2:{},
    text1:{
        fontSize:24,
        color:"black"
    },
    text2:{}
  })
  
  const {mainContainer, container1, container2, text1,text2}=styles
export default Discover2