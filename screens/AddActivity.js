import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

import CommonStyles from '../styles/CommonStyles'
import Input from '../components/Input';
import { writeToDB } from '../firebase-files/firebaseHelper';

export default function AddActivity({navigation}) {
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

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
        let newActivity = { activity: activityType, duration: duration, date: date, important: false};
        if ((newActivity.activity === 'Weights'|| newActivity.activity === 'Running') && newActivity.duration > 60){
            newActivity = {...newActivity, important: true};
        }
        writeToDB(newActivity);
        navigation.goBack();
    };
    
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDatePicker(false);
        setDate(currentDate);
      };
    
    const pressHandler = () => {
        if (!date) {
            setDate(new Date());
        }
        setShowDatePicker(!showDatePicker);
    }

      return (
        <View style={CommonStyles.container2}>
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
                    placeholder="Select An Activity"
                />
                <Input
                    label="Duration (min)*"
                    value={duration}
                    onChangeText={(data) => setDuration(data)}
                />
                <Input
                    label="Date *"
                    value={date ? date.toDateString() : ''}
                    focusHandler={pressHandler}
                />
                {showDatePicker && <DateTimePicker
                    value={date || new Date()}
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