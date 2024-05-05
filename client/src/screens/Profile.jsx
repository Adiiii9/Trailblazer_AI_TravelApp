import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
// import { authContext } from '../context/authContext'
import FooterMenu from '../components/FooterMenu'
import ProfileComponent from '../components/ProfileComponent'



const Profile=()=>{
//   const [state]=useContext(authContext)
  
  return (
    <SafeAreaView>
     <View style={[mainContainer]}>
      <View>
      <ProfileComponent></ProfileComponent>
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
    backgroundColor:"white"
  },
  container1:{}, 
  container2:{},
  text1:{
    color:"black",
    fontSize: 14,
  },
  text2:{}
})

const {mainContainer, container1, container2, text1,text2}=styles
export default Profile;





