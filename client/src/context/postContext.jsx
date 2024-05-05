import React, { Children, createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";


// Context
export const postContext = createContext();

// Provider




export const PostProvider = ({children}) =>{
    const [posts,setPosts]=useState([])
    

    const getAllPosts = async() =>{
        try {

            const {data}=await axios.get("http://192.168.216.70:8080/api/v1/post/get-post")
            setPosts(data?.posts)

            
        } catch (error) {
            console.log("Error at getAllPosts() :: in postContext.jsx :: ",error)
            
        }
    }

    useEffect(()=>{
        getAllPosts();

    },[])


    return(
        <postContext.Provider value={[posts,setPosts]}>
            {children}
        </postContext.Provider>
    )
};