import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native'
import React, { useContext, useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import { authContext } from '../context/authContext'
// import ImagePicker from 'react-native-image-crop-picker';

import FooterMenu from '../components/FooterMenu'
import { Button } from '@rneui/themed';
import axios from 'axios';
import { Image } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

import predictHeritage from "../data/predictHeritage"

const Discover=()=>{
//   const [state]=useContext(authContext)
const navigation=useNavigation()
const [selectedImage, setSelectedImage] = useState(null);

const [prediction, setPrediction] = useState(null);



  const foundPrediction=async()=>{
    // console.log(prediction.predicted_class);
    const predictionPclass = prediction.predicted_class; // Example value, consider trimming and converting to lowercase

// Trim and convert to lowercase
const predictionPclassFormatted = predictionPclass.trim().toLowerCase();
console.log(predictionPclassFormatted );


// Find matching object in the predictHeritage array
const matchedHeritage = predictHeritage.find(heritage => heritage.name.trim().toLowerCase().replace(/\s/g, "") === predictionPclassFormatted);

// Display the matched heritage data if found
if (matchedHeritage) {
  console.log("Match found!");
  console.log(matchedHeritage);
  navigation.navigate("Discover2",{
    match:matchedHeritage
  })
} else {
  console.log("No match found.");
  Alert.alert("Info not available")


}
  }
    

  const handlePredict = async () => {
    try {
      // const base64Image = await RNFetchBlob.fs.readFile(selectedImage.uri, 'base64');
      // Assuming 'image' is your image file
      console.log(reqImg)
      const formData = new FormData();
      formData.append('image',  {
        uri: selectedImage.uri,
        name: 'image.jpg', // Name of the file on the server
        type: selectedImage.type,
        // data: base64Image
      });

      const response = await axios.post('http://192.168.216.70:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Handle response
      console.log(response.data);
      setPrediction(response.data);
    } catch (error) {
      console.error('Error predicting:', error);
    }
  };


const openGallery=async()=>{


  const resultG = await launchImageLibrary({
    mediaType:"photo",
    quality:1,
    maxWidth:300,
    maxHeight:300,
    base64:true

  }, (result) => {
    if (!result.didCancel) {
      setSelectedImage(result.assets[0]);
      console.log(result.assets[0]);
    }
  });

  // console.log({resultG})
  reqImg=JSON.stringify(resultG.assets[0].uri)
  console.log(JSON.stringify(resultG.assets[0].uri))
  console.log(resultG)
  
}

const openCamera=async()=>{
  const resultC = await launchCamera({
    mediaType:"photo",
    quality:1,
    maxWidth:300,
    maxHeight:300,
    cameraType:"front",
    base64:true,
    cropping: true,

  },(result) => {
    if (!result.didCancel) {
      setSelectedImage(result.assets[0]);
      console.log(result.assets[0]);
    }
  }
  );

  reqImg=JSON.stringify(resultC.assets[0].uri)
  console.log(JSON.stringify(resultC.assets[0].uri))
  console.log(resultC)

}

    
  
  return (
    // <SafeAreaView>
    //  <View style={[mainContainer]}>
    //   <View style={[container1]}>
    //   <Text style={[text1]}>Discover</Text>

    //   <TouchableOpacity onPress={openGallery}>
    //     <Text>Open gallery</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity onPress={openCamera}>
    //     <Text>Open Camera</Text>
    //     </TouchableOpacity>
      
    //  </View>
      


    

    //   <View>
    //   {/* <Text style={[text1]}>{JSON.stringify(state.email,null,4)}</Text> */}
    //   </View>

    //   <FooterMenu></FooterMenu>
     
     
      
    // </View>
    // </SafeAreaView>
    <SafeAreaView>
    <View style={[mainContainer]}>
     <ScrollView>
     <View>
     <View style={[container1]}>
      <Text style={[text1]}>Discover our Iconic heritage's using AI !</Text>

      <View style={[container2]}>

      <TouchableOpacity style={{justifyContent:"center",alignItems:"center",backgroundColor:"black", borderRadius:6,padding:15,marginBottom:10,height:83,width:145}} onPress={openGallery}>
        <Text style={{fontSize:20,fontWeight:600,color:"white"}}>Open{"\n"}Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{justifyContent:"center",alignItems:"center",backgroundColor:"black",borderRadius:6,padding:15,marginBottom:10,height:83,width:145}} onPress={openCamera}>
        <Text style={{fontSize:20,fontWeight:600,color:"white"}}>Open Camera</Text>
        </TouchableOpacity>
        </View>

      <View style={[container3]}>
      <Button   title="Predict" onPress={handlePredict} />
      {prediction && (

        <Pressable onPress={foundPrediction}>
        <View style={[container4]}>
          {/* <Image source={{ uri: 'path-to-your-image' }} style={{ width: 200, height: 200 }} /> */}
          <Image source={{ uri: selectedImage.uri }} style={{ width: 250, height: 200 , marginVertical:15,borderRadius:8}} />
          <View style={[container5]}>
  
          <Text style={{color:"black",fontSize: 18,fontWeight:600,marginHorizontal:12,}}>Predicted Monument: {(prediction.predicted_class).toUpperCase()}</Text>
          <Text style={{color:"grey", fontSize:14,
    fontWeight:500,marginHorizontal:12,}}>Probability: <Text style={{color:"#74E291",fontWeight:600}}> {(prediction.probability*100).toFixed(2)+"%"}</Text></Text>
          <Text style={[text2]}>{"\n"}Click to know more...</Text>
          </View>
        </View>
        </Pressable>
      )}
    </View>
      
     </View>
      
       
       
     </View>

     <View>
     
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
    backgroundColor:"white"
  },
  container1:{
    paddingLeft:27,
    marginTop:36,
    
  }, 
  container2:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginRight:20,
    marginBottom:12
  },
  text1:{
    color:"black",
        fontSize: 27,
        fontWeight: 800,
        marginBottom:24
        
  },
  text2:{
    fontSize:12,
    fontWeight:500,
    color:"grey",
    textAlign:"center"
    
    
  },
  container3:{
    marginRight:20,
    

  },
  container4:{
    marginVertical:24,
    backgroundColor:"#FEFBF6",
    justifyContent:"center",
    alignItems:"center",
    shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.24,
      shadowRadius: 2.84,
      elevation: 3,
      borderRadius:12
  },
  container5:{
    flexDirection:"column",
    // marginHorizontal:2,
    marginBottom:20
  }
})

const {mainContainer, container1, container2, text1,text2,container3,container4,container5}=styles
export default Discover





