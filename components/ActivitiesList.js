import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

import ActivityItem from './ActivityItem';
import {collection, onSnapshot, query, where, getDocs} from 'firebase/firestore';
import { database } from '../firebase-files/firebaseSetup';

export default function ActivitiesList({type}) {
    // State to store activities
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        let q;
        if (type === 'special') {
            q = query(collection(database, 'activities'),
            where('important', '==', true));
        } else {
            q = query(collection(database, 'activities'));
        }
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let items = [];
            querySnapshot.forEach((doc) => {
                //store the data in a new array
                items.push({...doc.data(), date: doc.data().date.toDate(), id: doc.id});
            });
            setActivities(items);
        });
        return () => unsubscribe();
    }, []);

    return (
        <View>
        <FlatList
        data={activities}
        renderItem={({item}) => (
            <ActivityItem item={item}/>
        )} />
        </View>
    )
}

const styles = StyleSheet.create({})