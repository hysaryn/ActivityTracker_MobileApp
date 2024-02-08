import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

import { ActivityContext } from './ActivityContext';
import Card from './Card';
import CommonStyles from '../styles/CommonStyles';

export default function ActivitiesList({type}) {
    //const {activities} = useContext(ActivityContext);

    const activities = [{type: 'Walking', duration:12, date: "Tue Feb 20 2024"},
    {type: 'Running', duration:65, date: "Tue Feb 20 2024"},
    {type: 'Yoga', duration:20, date: "Tue Feb 20 2024"}];

    const filteredActivities = type === 'special' ? 
    activities.filter(activity => (activity.type === 'Running' || activity.type === 'Weight Training') && activity.duration > 60) :
    activities;

    return (
        <FlatList
        data={filteredActivities}
        renderItem={({item}) => (
            <Card>
                {/* <View style={CommonStyles.directionRow}>
                    <Text>{item.type}</Text>
                    {(item.type === 'Running' || item.type === 'Weight Training') && item.duration > 60 && (
                    <FontAwesome6 name="triangle-exclamation" size={15} color="yellow" />)}
                    <Text>{item.date} - {item.duration} min</Text>
                </View> */}
            </Card>
        )} />
    )
}

const styles = StyleSheet.create({})