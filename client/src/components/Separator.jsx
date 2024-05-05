import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import React from 'react'

const Separator=()=>{
  return (
    
     <View style={[mainContainer]}>
    </View>
    
   
  )
}


const styles = StyleSheet.create({
  mainContainer:{
    height: 10,
    backgroundColor:"#F3EEEA"
  },
  container1:{}, 
  container2:{},
  text1:{},
  text2:{}
})

const {mainContainer, container1, container2, text1,text2}=styles
export default Separator





