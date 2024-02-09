import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import { ActivityContext } from './ActivityContext';
import ActivityItem from './ActivityItem';

export default function ActivitiesList({type}) {
    const {activities} = useContext(ActivityContext);

    const filteredActivities = type === 'special' ? 
    activities.filter(activity => (activity.type === 'Weights'|| activity.type === 'Running') && activity.duration > 60) :
    activities;

    return (
        <View>
        <FlatList
        data={filteredActivities}
        renderItem={({item}) => (
            <ActivityItem item={item}/>
        )} />
        </View>
    )
}

const styles = StyleSheet.create({})