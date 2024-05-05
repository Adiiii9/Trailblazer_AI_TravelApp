import { FlatList } from 'react-native'
import { ScrollView, StyleSheet, Text, View,Pressable,Image } from 'react-native'
import heritage from '../data/heritage'
import FooterMenu from './FooterMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const TopPlacesSeeAll = ({route}) => {
  const navigation=useNavigation()
  const { heritage } = route.params;
  const groupMonumentsByCity = () => {
    const groupedMonuments = {};
    heritage.forEach((site) => {
      if (!groupedMonuments[site.city]) {
        groupedMonuments[site.city] = [];
      }
      groupedMonuments[site.city].push(site);
    });
    return groupedMonuments;
  };

  const groupedMonuments = groupMonumentsByCity();
  return (
    // <ScrollView>
    //     <View>
    //         <FlatList
    //         data={heritage}
    //         renderItem={({site})=>(
    //             <Pressable onPress={()=>navigation.navigate("PlacesDetail",{
    //                 places:site
    //               })}>
    //                 <View key={site.name} style={[siteContainer]}>
    //                 <View style={[siteContainer2]}>
    //                 <Image source={{ uri: site.imageURL }} style={image} />
    //                 </View>
      
    //                 <View style={[siteContainer3]}>
    //                   <View style={[siteContainer4]}>
    //                     <Text style={[name1,common]}>{site.name}</Text>
    //                     <Text style={[rating1,common]}>
    //                        <Icon name='star' size={18} color="turquoise"></Icon>  {site.rating}</Text>
    //                   </View>
      
    //                 <Text style={[city1]}>
    //                 <Icon2 name="map-marker-alt" size={14} color="grey" /> {site.city}</Text>
      
    //                 <View style={[siteContainer5]}>
    //                 <Text style={[cost1]}>
    //                 <Icon name='rupee' size={12} color="black"></Icon> {site.cost}
    //                 </Text>
      
    //                 <TouchableOpacity onPress={handleFavourites}>
    //                 <Text style={[hearticon]}>
    //                   <Icon3 name='hearto' size={27} color="black" ></Icon3>
    //                   </Text>
    //                 </TouchableOpacity>
      
      
    //                 </View>
      
    //                 </View>
                    
    //               </View>
      
    //               </Pressable>

    //         )}
            
    //         >

    //         </FlatList>
    //     </View>
    // </ScrollView>
    <View style={[mainContainer]}>
    
    <ScrollView>
      <View style={[tempContainer]}>

        <View style={[container1]}>
          <Pressable onPress={()=>navigation.navigate("Home")} style={[btn1]}>
              <Text >
                  <Icon  name='arrow-left' size={22} color="black"></Icon>
              </Text>
          </Pressable>
          <Text  style={[text1]}>Top Places to visit</Text>
        </View>

     
      {Object.keys(groupedMonuments).map((city) => (
        <View key={city}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 15, color:"black" }}>{city}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {groupedMonuments[city].map((monument) => (

            <View style={[siteContainer]}>

              <View style={[container2]}>
                {/* <View>
                  <Text>Hello</Text>
                </View>
                <View><Text>World</Text></View> */}

                {/* <View style={[siteContainer2]}> */}
                  <Image source={{ uri: monument.imageURL }} style={image} />
                {/* </View> */}

                <View style={[container3]}>
                  <Text style={{color:"black", fontSize:18, fontWeight:500,marginVertical:4}}>{monument.name}</Text>
                  {/* <Text style={{color:"black", fontSize:18, fontWeight:500}}>{monument.name}</Text> */}
                  <Text style={[rating1]}>
                     <Icon name='star' size={15} color="turquoise"></Icon>  {monument.rating}</Text>
                  <Text style={[text3]}>Know More...</Text>
                </View>
                
            </View>
            </View>
          ))}
          </ScrollView>
        </View>
      ))}
      

    </View>
    </ScrollView>
    
    <FooterMenu></FooterMenu>

    </View>
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

  tempContainer:{
    paddingLeft:27,
    marginTop:36
  },

  container1:{
    flexDirection:"row",
    gap:18,
    marginBottom:15
  },

  text1:{
    color:"black",
    marginTop:3,
    fontSize:24,
    fontWeight: '800',
  },

  btn1:{
    width: 40,
    height: 40,
    backgroundColor:"white",
    // marginHorizontal:20,
    // marginVertical:18,
    borderRadius:10,
    padding:8,
    shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.24,
  shadowRadius: 2.84,
  elevation: 5,
},

siteContainer: {
  // marginBottom: 20,
  // marginVertical: 9,
  backgroundColor:"#F9FBE7",
  // backgroundColor:"turquoise",
  marginRight:16,
  width: 300,
  height: 140,
  display:"flex",
  // flexDirection:"row",
  borderRadius:18,
  
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.24,
  shadowRadius: 3.84,
  elevation: 3,

},

container2:{
  display:"flex",
  flexDirection:"row",
  
},

image: {
  width: 140,
  height: 120,
  // marginBottom: 10,
  marginHorizontal:12,
  marginVertical:10,
  borderRadius: 12,
  

},

siteContainer2:{
  width: "100%",
  height: 138,
  // backgroundColor:"blue",
  borderRadius:12,
  marginVertical: 10,
  marginLeft:10
},


container3:{
  // backgroundColor:"blue",
  width: 120,
  height: 138,
  // marginHorizontal:10,
  marginVertical:10,
  borderRadius:12,
  marginTop:15,
  marginHorizontal:5,
  flexDirection:"column"
},

rating1:{

  color:"black",
  fontSize: 15,
  fontWeight: '500',
  color:"grey",
  // marginVertical:2
},

text3:{
  fontSize:10,
  color:"gray",
  marginVertical:2
}

    
  })
  
  const {mainContainer, tempContainer,text1, btn1, text2, container1,container2, container3, siteContainer, siteContainer2, 
    name1, cost1, rating1,city1,image, common, siteContainer3, siteContainer4, siteContainer5, hearticon, text3}=styles
export default TopPlacesSeeAll