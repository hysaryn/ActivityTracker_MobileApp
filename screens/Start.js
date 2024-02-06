import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Start({navigation}) {
  return (
    <View>
      <Text>Start</Text>
      <Button 
        title="confirm"
        onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({})