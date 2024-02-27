import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { deleteFromDB } from '../firebase-files/firebaseHelper';
import PressableArea from '../components/PressableArea';
import AddActivity from './AddActivity';

export default function EditActivity({navigation, route}) {
    const {activity} = route.params;
    const {type} = route.params;

    // Delete activity
    const deleteHandler = () => {
        Alert.alert('Delete', 'Are you sure you want to delete this item?', [
            {text: 'No', style: 'cancel'},
            {text: 'Yes', style: 'destructive', 
                onPress: () => {
                    deleteFromDB(activity.id); 
                    navigation.goBack()}}
        ]);
    }

    // Set the header right button to delete
    useEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            return <PressableArea onPressFunc={deleteHandler}> 
                <AntDesign name="delete" size={24} color="white" />
                </PressableArea>;
          },
        });
      }, []);
      
    return (
        <AddActivity 
            navigation={navigation} 
            route={{params: {mode: 'edit', activity: activity, type: type}}}/>
    )
}

const styles = StyleSheet.create({})