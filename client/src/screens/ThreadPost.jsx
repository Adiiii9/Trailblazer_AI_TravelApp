import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { postContext } from '../context/postContext'
import FooterMenu from '../components/FooterMenu'
import { useContext } from 'react'
import ThreadCard from '../components/ThreadCard'
import Icon5 from 'react-native-vector-icons/FontAwesome6';

const ThreadPost = () => {
    const [posts]=useContext(postContext)
    return (
        <SafeAreaView>
         <View style={[mainContainer]}>
          <ScrollView>
          <View style={[container1]}>
          <Text style={[text1]}><Icon5 name="threads" size={24} color="black"/>  Trending Threads</Text>
            <ThreadCard posts={posts}/>
            {/* <Text style={{color:"black"}}>{JSON.stringify(posts,null,4)}</Text> */}
          </View>
    
          <View>
          {/* <Text style={[text1]}>{JSON.stringify(state.email,null,4)}</Text> */}
          {/* <Maps></Maps> */}
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
        marginTop:36
      }, 
      container2:{},
      text1:{
        color:"black",
        fontSize: 27,
        fontWeight: 800,
        marginBottom:10
      },
      text2:{}
    })
    
    const {mainContainer, container1, container2, text1,text2}=styles
export default ThreadPost