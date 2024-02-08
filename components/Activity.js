import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'
import ActivitiesList from './ActivitiesList';
import AddActivity from '../screens/AddActivity';

export const ActivityContext = createContext([]);

export default function Activity() {
    const[activities, setActivities] = useState([]);

    return (
        <ActivityContext.Provider value = {{activities, setActivities}}>
            <ActivitiesList />
            <AddActivity />
        </ActivityContext.Provider>
    )
}

const styles = StyleSheet.create({})