import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import ActivitiesList from './ActivitiesList';

const ActivityContext = createContext();

export default function ActivityContext() {
    const[data, setData] = useState([]);

    return (
        <ActivityContext.Provider value = {{data, setData}}>
            <ActivitiesList />
        </ActivityContext.Provider>
    )
}

const styles = StyleSheet.create({})