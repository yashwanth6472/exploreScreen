import React from "react";
import { View, Text, ScrollView } from "react-native";
import Product from "./Product";
import {useSelector} from 'react-redux'

const Products = () =>{
    const products = useSelector((state: any)=>state.products)


    console.log("console at products", products.productsData)
    return <ScrollView showsVerticalScrollIndicator={true} >
        {
            products.productsData.map((item: {title: string, description: string, images: [string]})=>{
                return <Product title={item.title} description={item.description} image={item.images[0]} />
            })  
        }
        
        <Text>Products</Text>
    </ScrollView>
}

export default Products