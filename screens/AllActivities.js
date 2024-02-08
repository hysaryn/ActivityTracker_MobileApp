import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonStyles from '../styles/CommonStyles'

export default function AllActivities() {
  return (
    <View style={CommonStyles.container}>
        <ActivitiesList type="all" />
    </View>
  )
}

const styles = StyleSheet.create({})