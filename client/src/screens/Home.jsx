import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { authContext } from '../context/authContext'
import FooterMenu from '../components/FooterMenu'
import PopularCities from '../components/PopularCities'

import Icon from 'react-native-vector-icons/FontAwesome';
import PlanYourTrip from '../components/PlanYourTrip'





const Home=()=>{
  const [state]=useContext(authContext)
  
  
  return (
    
    <SafeAreaView>
     <View style={[mainContainer]}>
      <ScrollView>
      <View style={[tempContainer]}>

      <View style={[container1]}>
      <Text style={[text1]}>Immerse yourself in India's iconic heritage's !</Text>
      </View>

      <View>
        <PopularCities></PopularCities>
      </View>

      <View>
        <PlanYourTrip></PlanYourTrip>
      </View>

      </View>
      </ScrollView>

      

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
    
    // width: "100%",
    

  },
  container1:{
    marginTop:115
    
  }, 
  container2:{},
  text1:{
    color:"#1E0342",
    fontSize: 25,
    fontWeight: '800',
  },
  text2:{},

  tempContainer:{
    paddingLeft:24
  }
})

const {mainContainer, container1, container2, text1,text2, tempContainer}=styles
export default Home;





