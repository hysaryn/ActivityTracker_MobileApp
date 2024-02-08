import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

import { ActivityContext } from './ActivityContext';
import Card from './Card';
import CommonStyles from '../styles/CommonStyles';
import Input from './Input';

export default function ActivitiesList({type}) {
    const {activities} = useContext(ActivityContext);

    // const activities = [{type: 'Walking', duration:12, date: "Tue Feb 20 2024"},
    // {type: 'Running', duration:65, date: "Tue Feb 20 2024"},
    // {type: 'Yoga', duration:20, date: "Tue Feb 20 2024"}];

    const filteredActivities = type === 'special' ? 
    activities.filter(activity => (activity.type === 'Running' || activity.type === 'Weight Training') && activity.duration > 60) :
    activities;

    return (
        <View>
        <FlatList
        data={filteredActivities}
        renderItem={({item}) => (
            <Card cardStyle={CommonStyles.card}>
                <View style={[CommonStyles.directionRow]}>
                    <Text style={CommonStyles.boxFont}>  {item.type}  </Text>

                    {(item.type === 'Running' || item.type === 'Weight Training') && item.duration > 60 && (
                    <FontAwesome6 name="triangle-exclamation" size={15} color="orange" />)}

                    <View style= {[CommonStyles.directionRow, {alignItems:'flex-end', marginRight:'2%'}]}>
                        <Text style={CommonStyles.boxFont2}> {item.date} </Text>
                        <Text> </Text>
                        <Text style={CommonStyles.boxFont2}> {item.duration} min </Text>
                    </View>
                </View>
            </Card>
        )} />
        </View>
    )
}

const styles = StyleSheet.create({})