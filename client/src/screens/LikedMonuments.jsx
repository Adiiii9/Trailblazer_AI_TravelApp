import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FooterMenu from '../components/FooterMenu'
import LikedMonumentComponent from '../components/LikedMonumentComponent'

const LikedMonuments = () => {
  return (
    <SafeAreaView>
     <View style={[mainContainer]}>
      <View>
        <LikedMonumentComponent></LikedMonumentComponent>
      </View>

      <View>
      {/* <Text style={[text1]}>{JSON.stringify(state.email,null,4)}</Text> */}
      </View>

      <FooterMenu></FooterMenu>
     
     
      
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    mainContainer:{
    display:"flex",
    justifyContent:"space-between",
    height: "100%",
    backgroundColor:"white",
    // paddingHorizontal:29,
    
    },
    container1:{}, 
    container2:{},
    text1:{
        color:"black"
    },
    text2:{}
  })
  
const {mainContainer, container1, container2, text1,text2}=styles

export default LikedMonuments