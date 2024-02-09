import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

import CommonStyles from '../styles/CommonStyles'
import {ActivityContext} from '../components/ActivityContext'
import Input from '../components/Input';

export default function AddActivity({navigation}) {
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const {activities, setActivities} = useContext(ActivityContext); 

    //initialize activity drop down category
    const [open, setOpen] = useState(false);
    const [activityType, setActivityType] = useState(null);
    const [items, setItems] = useState([
        { label: 'Walking', value: 'Walking' },
        { label: 'Running', value: 'Running' },
        { label: 'Swimming', value: 'Swimming' },
        { label: 'Weights', value: 'Weights' },
        { label: 'Yoga', value: 'Yoga' },
        { label: 'Cycling', value: 'Cycling' },
        { label: 'Hiking', value: 'Hiking' },
    ]);

    const saveActivity = () => {
        // Validate inputs
        if (isNaN(duration) || duration <= 0 || !activityType || !date) {
          Alert.alert('Invalid Input', 'Please enter valid data.');
          return;
        }
    
        // Save activity
        const newActivity = {
          type: activityType,
          duration: parseInt(duration),
          date: date.toDateString() // Convert date object to string
        };
        
        setActivities((activities) =>[...activities, newActivity]);
        navigation.goBack();
    };
    
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
      };

      return (
        <View style={CommonStyles.addContainer}>
            <View style={CommonStyles.contentContainer}>
                <Text style={[CommonStyles.inputHeader,{marginTop:'10%'}]}>Activity *</Text>
                <DropDownPicker
                    open={open}
                    value={activityType}
                    items={items}
                    setOpen={setOpen}
                    setValue={setActivityType}
                    setItems={setItems}
                    style={{backgroundColor: CommonStyles.purpleLightColor, marginBottom:'2%'}}
                    textStyle={{color: CommonStyles.fontPurple}}
                    placeholder="Select an activity"
                />
                <Input
                    label="Duration (min)*"
                    value={duration}
                    onChangeText={(data) => setDuration(data)}
                />
                <Input
                    label="Date *"
                    value={date.toDateString()}
                    focusHandler={() => setShowDatePicker(true)}
                />
                {showDatePicker && <DateTimePicker
                    value={date}
                    mode="date"
                    display='inline'
                    onChange={onChangeDate}
                    /> }
                <View style={[CommonStyles.buttonsContainer,{marginTop: '40%'}]}>
                    <Button title="Cancel" color='red' onPress={() => navigation.goBack()} />
                    <Button title="Save" color={CommonStyles.fontPurple} onPress={saveActivity} />
                </View>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
})