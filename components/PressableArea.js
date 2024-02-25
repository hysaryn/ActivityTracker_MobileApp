import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PressableArea({commonStyle, onPressFunc, disabledCondition, children}) {
  return (
    <Pressable 
        style={({pressed})=> [styles.defaultStyle, commonStyle, pressed && styles.pressed]} 
        onPress={onPressFunc} 
        disabled={disabledCondition}>
        {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    defaultStyle: {
        borderRadius: 10,
    },

    pressed:{
        opacity: 0.5
    }
})