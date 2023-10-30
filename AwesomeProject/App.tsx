import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopCards from './TopCards'
import LinkingCard from './LinkingCard'
export default function App() {
  return (
    <View style={{flex:1,backgroundColor:'red'}}>
      <TopCards/>
      <LinkingCard/>
    </View>
  )
}

