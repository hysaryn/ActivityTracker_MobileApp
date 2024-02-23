import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

export const ActivityContext = createContext([]);

export function ActivityProvider({children}) {
    const[activities, setActivities] = useState([]);

    return (
        <ActivityContext.Provider value={{activities, setActivities}}>
            {children}
        </ActivityContext.Provider>
    )
}

const styles = StyleSheet.create({})