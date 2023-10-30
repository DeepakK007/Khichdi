import { StyleSheet, Text, View,Image,Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LinkingCard() {
    function openWeb(webUrl:string){
        Linking.openURL(webUrl)
    }
  return (
    <View>
      <Text style={styles.headingText}>LinkingCard</Text>
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={{uri:'https://picsum.photos/id/25/200/300'}}/>
        <View><Text style={styles.cardTitle}>Title</Text></View>
        <View style={styles.cardDesc}><Text numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, inventore. Aspernatur aliquid exercitationem ad, assumenda voluptates quas corporis laudantium nostrum doloremque temporibus doloribus rerum unde laboriosam optio harum error nemo?</Text></View>
        <TouchableOpacity onPress={()=>openWeb('https://reactnative.dev/docs/handling-touches')}>
           <Text> Read More....</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        marginTop:10,
        fontSize:20,
        fontWeight:'bold'
    },
    cardContainer:{
        padding:5
    },
    cardImage:{
        height:150,
    },
    cardTitle:{
        fontSize:24
    },
    cardDesc:{

    }
})