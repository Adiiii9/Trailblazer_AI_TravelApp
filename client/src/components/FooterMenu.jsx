import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import React from 'react'


import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';

const FooterMenu=()=>{
  const navigation=useNavigation()
  const route=useRoute()
  return (
    <View style={[mainContainer]}>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
      <Text style={[text2]}>
      <Icon name="home" size={30} color={
        (route.name==="Home")?"turquoise":"black"
      } />
      </Text>
        <Text style={[text1]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Location")}>
        <Text style={[text2]}>
        <Icon2 name="map-marker-alt" size={30} color={
        (route.name==="Location")?"turquoise":"black"
      }  />
        </Text>
        <Text style={[text1]}>Navigate</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Discover")}>
        <Text style={[text2]}>
        <Icon3 name="map-search" size={30} color={
        (route.name==="Discover")?"turquoise":"black"
      }  />
        </Text>
        <Text style={[text1]}>Discover</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Threads")}>
        <Text style={[text2]}>
        <Icon5 name="threads" size={30} color={
        (route.name==="Threads")?"turquoise":"black"
      }  />
        </Text>
        <Text style={[text1]}>Threads</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
      <Text style={[text2]}>
      <Icon4 name="account" size={30} color={
        (route.name==="Profile")?"turquoise":"black"
      }  />
      </Text>
        <Text style={[text1]}>Profile</Text>
      </TouchableOpacity>
    </View>
    
  )
}


const styles = StyleSheet.create({
  mainContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    // backgroundColor:"plum",
    padding:9,
    borderTopWidth: 1.8,
    borderColor:"#F3EEEA"
    

  },
  container1:{

  }, 
  container2:{

  },
  text1:{
    fontSize:12,
    color:"black",
  },
  text2:{
    textAlign:"center"
  }
})

const {mainContainer, container1, container2, text1,text2}=styles
export default FooterMenu





