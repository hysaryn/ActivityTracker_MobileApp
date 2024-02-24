import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

import Card from './Card';
import CommonStyles from '../styles/CommonStyles';

export default function ActivityItem({item}) {
  return (
    <Card cardStyle={CommonStyles.card}>
        <View style={[CommonStyles.directionRow, {justifyContent:'space-between'}]}>
            <Text style={CommonStyles.boxFont}>  {item.activity}  </Text>

            {(item.important === true) && (
            <FontAwesome6 name="triangle-exclamation" size={15} color="orange" />)}

            <View style= {[CommonStyles.directionRow, {justifyContent:'flex-end', marginRight:'2%'}]}>
                <Text style={CommonStyles.boxFont2}> {item.date.toDateString()} </Text>
                <Text> </Text>
                <Text style={CommonStyles.boxFont2}> {item.duration} min </Text>
            </View>
        </View>
    </Card>
  )
}

const styles = StyleSheet.create({})