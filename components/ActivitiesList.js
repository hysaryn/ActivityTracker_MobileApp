import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ActivityContext from './ActivityContext'

export default function ActivitiesList({type}) {
    const {data} = useContext(ActivityContext);

    const filteredActivities = type === 'special' ? 
    data.filter(activity => (activity.type === 'Running' || activity.type === 'Weight Training') && activity.duration > 60) :
    data;

    return (
        <FlatList
        data={filteredActivities}
        renderItem={({item}) => (
            <Text>
                {item.type} - {item.data} - {item.duration} min
            </Text>
        )} />
    )
}

const styles = StyleSheet.create({})