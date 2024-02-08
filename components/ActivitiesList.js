import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import {ActivityContext} from './Activity'

export default function ActivitiesList({type}) {
    const {activities, setActivities} = useContext(ActivityContext);

    const filteredActivities = type === 'special' ? 
    activities.filter(activity => (activity.type === 'Running' || activity.type === 'Weight Training') && activity.duration > 60) :
    activities;

    return (
        <FlatList
        data={filteredActivities}
        renderItem={({item}) => (
            <Text>
                {item.type} - {item.date} - {item.duration} min
            </Text>
        )} />
    )
}

const styles = StyleSheet.create({})