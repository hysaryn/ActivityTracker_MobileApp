import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonStyles from '../styles/CommonStyles'
import ActivitiesList from '../components/ActivitiesList'

export default function AllActivities() {
  return (
    <View style={CommonStyles.container2}>
        <View style={[{marginTop:10},CommonStyles.contentContainer]}>
            <ActivitiesList type="all" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})