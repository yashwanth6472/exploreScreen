import React, {useEffect, useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {useDispatch, useSelector} from 'react-redux'
import { setProducts } from "../redux/action";
import Products from "../Components/Products";
const Explore = () =>{
    const dispatch = useDispatch()
    const products = useSelector((state: any)=> state.products)

  const fetchApi = async() =>{
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      if(res.status != 200){
        throw Error("something went wrong")
      }

      console.log(data.products)

      dispatch(setProducts(data.products))

    

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchApi()
  }, [])

  const [search, setSearch] = useState("")

console.log(search)

    return(
        <View>
            <Text style={{color: '#ccc', textAlign: 'center', marginVertical: 20, fontSize: 24, fontWeight: '900'}}>Explore</Text>
           <TouchableOpacity style={{borderWidth: 2, borderColor:'#fff', borderStyle: 'solid', borderRadius: 10}}>
           <TextInput autoFocus={true} style={{height: 40, color: '#fff',}} placeholder="search your fav here..." placeholderTextColor={"#fff"} value={search} onChangeText={newText=>setSearch(newText)} defaultValue="text" />
           </TouchableOpacity>
           <Products />
        </View>
    )
}

export default Explore;