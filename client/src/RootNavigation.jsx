import { StyleSheet, Text, View } from 'react-native'
import { AuthProvider } from './context/authContext'
import ScreenMenu from './components/ScreenMenu'
import { PostProvider } from './context/postContext'



const RootNavigation = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <ScreenMenu ></ScreenMenu>
        </PostProvider>
    </AuthProvider>
  )
}
const styles = StyleSheet.create({})
export default RootNavigation