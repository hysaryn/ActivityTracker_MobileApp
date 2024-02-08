import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonStyles from '../styles/CommonStyles'
import ActivitiesList from '../components/ActivitiesList'

export default function SpecialActivities() {
  return (
    <View style={CommonStyles.container}>
      <ActivitiesList type="special" />
    </View>
  )
}

const styles = StyleSheet.create({})