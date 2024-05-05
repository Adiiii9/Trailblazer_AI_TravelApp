import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"

const BookTicketButton = () => {
  return (
    <View style={[mainContainer]}>
      <Pressable style={[container1]}>
        <Text style={[text1]}><Icon name='ticket' size={22} color="white"></Icon>  Book your tickets</Text>
      </Pressable>
    </View>
  )
}



const styles = StyleSheet.create({
    mainContainer:{
        marginVertical:16,
        marginHorizontal:24,
        // paddingRight:20,
        // width:250,
        height: 54,
        borderRadius:12,
        backgroundColor:"turquoise",
        alignItems: 'center',
        justifyContent:"center",
        borderRadius:15
        

    },
    container1:{
        // alignItems:"center",
        // justifyContent:"center"
    }, 
    container2:{},
    text1:{
        color:"white",
        fontWeight: '500',
        fontSize: 24,
    },
    text2:{}
  })
  
  const {mainContainer, container1, container2, text1,text2}=styles
export default BookTicketButton