import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function TopCards() {
  return (
    <View style={styles.container}>
      <Text>FancyCards</Text>
      <View style={styles.cards}><Image source={{uri:`https://picsum.photos/id/3/200/300`}} 
            style={styles.card}/>
            <View style={styles.cardDetail}>
              <View style={styles.title}><Text>Title</Text></View>
              <View style={styles.description}><Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ad ut, amet necessitatibus, officia dolore qui eveniet inventore nisi hic repellendus aperiam suscipit eaque neque! Culpa enim aut exercitationem nam.</Text></View>
            </View>
      </View>
      <View style={styles.cards}><Image source={{uri:`https://picsum.photos/id/3/200/300`}} 
            style={styles.card}/>
            <View style={styles.cardDetail}>
              <View style={styles.title}><Text>Title</Text></View>
              <View style={styles.description}><Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ad ut, amet necessitatibus, officia dolore qui eveniet inventore nisi hic repellendus aperiam suscipit eaque neque! Culpa enim aut exercitationem nam.</Text></View>
            </View>
      </View>
      <View style={styles.cards}><Image source={{uri:`https://picsum.photos/id/3/200/300`}} 
            style={styles.card}/>
            <View style={styles.cardDetail}>
              <View style={styles.title}><Text>Title</Text></View>
              <View style={styles.description}><Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ad ut, amet necessitatibus, officia dolore qui eveniet inventore nisi hic repellendus aperiam suscipit eaque neque! Culpa enim aut exercitationem nam.</Text></View>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      height:200,
      margin:8,
      flexDirection:'row',
      
    },
    cards:{
      width:200,
      height:200,
      flexWrap:'wrap',
      marginBottom:5,
      
    },
    card:{
     flex:1,
      marginLeft:8,
    },
    cardDetail:{
      flex:1,
      backgroundColor:'white',
      marginLeft:8,
    },
    title:{
      flex:1,
    },
    description:{
      flex:1,
      
    }
    
  })