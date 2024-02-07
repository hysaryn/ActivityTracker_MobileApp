import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CommonStyles from '../styles/CommonStyles'

export default function Input({label, value, onChangeText, error}) {

  return (
    <View style={styles.container}>
      <Text style={styles.inputHeader}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginBottom:'10%',
    },

    inputHeader:[
        {fontWeight:'bold'},
        CommonStyles.regularFont,
    ],

    input:[,
        CommonStyles.inputBox,
        CommonStyles.regularFont,
    ],

    errorMessage: [
        {fontSize: 18},
        CommonStyles.fontGrey,
    ]
})