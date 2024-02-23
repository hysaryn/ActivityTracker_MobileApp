import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CommonStyles from '../styles/CommonStyles'

export default function Input({label, value, onChangeText, error, focusHandler}) {

  return (
    <View style={styles.container}>
      <Text style={CommonStyles.inputHeader}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={focusHandler}
        />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginTop:'2%',
    },

    input:[,
        CommonStyles.inputBox,
        CommonStyles.regularFont,
    ],

    errorMessage: [
        {fontSize: 18},
        CommonStyles.fontGrey,
    ]
})