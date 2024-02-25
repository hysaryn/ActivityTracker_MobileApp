import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

import CommonStyles from '../styles/CommonStyles'
import Input from '../components/Input';
import { writeToDB, updateDB} from '../firebase-files/firebaseHelper';
import PressableArea from '../components/PressableArea';

export default function AddActivity({navigation, route}) {
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isImportant, setIsImportant] = useState(false);

    const {mode, activity, type} = route.params;

    useEffect(() => {
        if (mode === 'edit') {
            setActivityType(activity.activity);
            setDuration(activity.duration.toString());
            setDate(activity.date.toDate());
            setIsImportant(activity.important);
        }
    }, [mode, activity]);

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

    const validateInput = () => {
        if (isNaN(duration) || duration <= 0 || !activityType || !date) {
            Alert.alert('Invalid Input', 'Please enter valid data.');
            return;
        }
    }

    const saveNewActivity = () => {
        // Validate inputs
        validateInput();
    
        // Save activity
        let newActivity = { activity: activityType, duration: duration, date: date, important: false};
        if ((newActivity.activity === 'Weights'|| newActivity.activity === 'Running') && newActivity.duration > 60){
            newActivity = {...newActivity, important: true};
        }
        writeToDB(newActivity);
        navigation.goBack();
    };

    const EditActivity = () => {
        // Validate inputs
        validateInput();
    
        // Edit activity
        const editedActivity = {
            ...activity, 
            activity: activityType, 
            duration: duration, 
            date: date, 
            important: isImportant
        };

        updateDB(activity.id, editedActivity);
        type === 'all'? navigation.navigate('All Activities'): navigation.navigate('Special Activities');   
    }

    const editHandler = () => {
        Alert.alert('Important', 'Are you sure you want to save these changes?', [
            {text: 'No', style: 'cancel'},
            {text: 'Yes', style: 'destructive', 
                onPress: () => {
                    EditActivity();
                }}
        ]);
    }
    
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
                    <PressableArea 
                        commonStyle={CommonStyles.cancelButton} 
                        onPressFunc={() => navigation.goBack()}>
                        <Text style={CommonStyles.buttonFont}>Cancel</Text>
                    </PressableArea>
                    <PressableArea 
                        commonStyle={CommonStyles.confirmButton} 
                        onPressFunc={mode === 'edit'? editHandler: saveNewActivity} >
                        <Text style={CommonStyles.buttonFont}>Save</Text>
                    </PressableArea>
                </View>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
})