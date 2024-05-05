import { useNavigation } from '@react-navigation/native'
import { Image } from '@rneui/base'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from "react-native-vector-icons/FontAwesome6"


const PlanYourTrip = () => {
  const navigation=useNavigation()
  return (
    <View>
        <Text style={[text1]}>Explore trending threads </Text>
        <View style={[mainContainer]}>
            {/* <Text style={[text2]}><Icon name='superpowers' color="black" size={22}></Icon>  Your AI-Powered Trip</Text> */}
            <View style={[container1]}>
              <Image style={[image]} source={require("../../assets/thread.jpg")} ></Image>
            <Pressable onPress={()=>navigation.navigate("ThreadPost")} style={[container2]}>
                <Text style={[text3]}>Popular threads</Text>
            </Pressable>
        </View>
        </View>
        

    </View>
    
  )
}


const styles = StyleSheet.create({
    mainContainer:{
        marginVertical: 12,
      // backgroundColor:"#8CB9BD",

    //   backgroundColor:"turquoise",
      marginRight:20,
    //   width: 266,
      height: 220,
      display:"flex",
      flexDirection:"column",
      padding:15,
      borderRadius:18,
      
      // shadowColor: '#000000',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 0.24,
      // shadowRadius: 2.84,
      // elevation: 3,
    },
    container1:{
        height:150,
        // backgroundColor:"blue",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",


    }, 
    container2:{
        backgroundColor:"black",
        padding:2,
        borderRadius:15,
        marginBottom:28,
        height: 90,
        alignItems:"center",
        justifyContent:"center"
    },
    text1:{
        fontSize: 22,
        color:"black",
        fontWeight: '500',
        marginRight:12,
        marginVertical:10
    },
    text2:{
        marginVertical:10,
        textAlign:"center",
        fontSize: 27,
        fontWeight:"600"
    },
    text3:{
        fontSize: 18,
        fontWeight: '800',


    },
    image:{
      width:170,
      height: 224,
    }
  })
  
  const {mainContainer, container1, container2, text1,text2, text3,image}=styles

export default PlanYourTrip