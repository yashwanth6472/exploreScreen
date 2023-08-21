import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";


const Product = (props: {
    title: string,
    description: string,
    image: string
}) =>{
    return <TouchableOpacity style={styles.container}>
       <View>
        <Image source={{uri: props.image}} style={styles.image} />
       </View>
       <View>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={[styles.text, {fontSize: 12, marginRight: 60}]}>{props.description}</Text>
       </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        borderRadius:50
    },
    text:{
        color: '#fff',
        fontSize: 20,
        paddingHorizontal: 20,
        
        
    },
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        width: '90%',
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
        alignSelf: 'center',
        paddingVertical: 20,

    }
})

export default Product