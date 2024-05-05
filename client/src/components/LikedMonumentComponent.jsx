import { StyleSheet, Text, View } from 'react-native'


const LikedMonumentComponent = () => {
  return (
    <View style={[mainContainer]}>

      <View style={[container1]}>
        <Text style={[text1]}>Favourites</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:29,

    },
    container1:{
        marginTop:36
    }, 
    container2:{},
    text1:{
        fontSize: 28,
        color:"black",
        fontWeight:"bold"

    },
    text2:{}
  })
  
const {mainContainer, container1, container2, text1,text2}=styles

export default LikedMonumentComponent;