import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Card from './Card';
import CommonStyles from '../styles/CommonStyles';
import PressableArea from './PressableArea';

export default function ActivityItem({item, type}) {

  const navigation = useNavigation();

  return (
    <PressableArea onPressFunc={() => {navigation.navigate('Edit', {activity: item, type: type})}}>
      <Card cardStyle={CommonStyles.card}>
          <View style={[CommonStyles.directionRow, {justifyContent:'space-between'}]}>
              <Text style={CommonStyles.boxFont}>  {item.activity}  </Text>

              {(item.important === true) && (
              <FontAwesome6 name="triangle-exclamation" size={15} color="orange" />)}

              <View style= {[CommonStyles.directionRow, {justifyContent:'flex-end', marginRight:'2%'}]}>
                  <Text style={CommonStyles.boxFont2}> {item.date.toDate().toDateString()} </Text>
                  <Text> </Text>
                  <Text style={CommonStyles.boxFont2}> {item.duration} min </Text>
              </View>
          </View>
      </Card>
      </PressableArea>
  )
}

const styles = StyleSheet.create({})