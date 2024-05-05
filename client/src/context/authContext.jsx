import React, { Children, createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'


// Context
export const authContext = createContext();

// Provider

export const AuthProvider = ({children}) =>{
    const [state,setState]=useState({
        user:null,
        token:""
    })

    useEffect(()=>{
        const loadlocalStorageData = async()=>{
            const value=await AsyncStorage.getItem("@auth")
            let loginValue = JSON.parse(value)
            setState({...state,user:loginValue?.user,token:loginValue?.token})
        }
        loadlocalStorageData();
    },[]);


    return(
        <authContext.Provider value={[state,setState]}>
            {children}
        </authContext.Provider>
    )
};