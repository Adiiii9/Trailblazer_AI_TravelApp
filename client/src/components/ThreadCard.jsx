import { StyleSheet, Text, View } from 'react-native'
import moment from "moment"


const ThreadCard = ({posts}) => {
  return (
    <View>
        {
            posts?.map((post,i)=>(
                <View key={i} style={[container1]}>
                    <View>
                        <Text style={[text1]}>{post?.title}</Text>
                    </View>

                    <View>
                        <Text style={[text2]}>{post?.content}</Text>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={[common]}>By {post?.postedBy?.email}</Text>
                        <Text style={[common]}>{moment(post?.createdAt).format("DD MMMM YYYY") }</Text>
                    </View>
                </View>
            ))
        }
      
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{},
    container1:{
        marginRight:15,
        // height:80,
        backgroundColor:"#FEFBF3",
        marginVertical:10,
        borderRadius:10,
        shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.24,
      shadowRadius: 2.84,
      elevation: 3,


    }, 
    container2:{},
    text1:{
        color:"black",
        fontSize: 22,
        paddingLeft:15,
        paddingTop:8,
        fontWeight: 700,

    },
    text2:{
        color:"black",
        fontSize: 15,
        paddingLeft:15,
        paddingTop:8,

    },
    common:{
        fontSize: 10,
        fontWeight: 300,
        color:"gray",
        padding:10,
        paddingLeft:15,
    }
  })
  
  const {mainContainer, container1, container2, text1,text2,common}=styles
export default ThreadCard