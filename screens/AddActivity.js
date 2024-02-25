import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import Checkbox from 'expo-checkbox';

import CommonStyles from '../styles/CommonStyles'
import Input from '../components/Input';
import { writeToDB, updateDB} from '../firebase-files/firebaseHelper';
import PressableArea from '../components/PressableArea';

export default function AddActivity({navigation, route}) {
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isImportant, setIsImportant] = useState(false);
    const [isReviewed, setIsReviewed] = useState(false);

    const {mode, activity, type} = route.params || {};

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

    const saveNewActivity = () => {
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

    const editActivity = () => {
        // Validate inputs
        if (isNaN(duration) || duration <= 0 || !activityType || !date) {
            Alert.alert('Invalid Input', 'Please enter valid data.');
            return;
        }

        // Edit activity
        let editedActivity = {
            activity: activityType, 
            duration: duration, 
            date: date, 
            important: isImportant
        };

        // Check if the activity is important
        if ((editedActivity.activity === 'Weights'|| editedActivity.activity === 'Running') && editedActivity.duration > 60){
            editedActivity = {...editedActivity, important: true};
        } else {
            editedActivity = {...editedActivity, important: false};
        }

        // Check if the activity is reviewed
        if (isReviewed) {
            editedActivity = {...editedActivity, important: false};
        }

        updateDB(activity.id, editedActivity);
        type === 'all'? navigation.navigate('All Activities'): navigation.navigate('Special Activities');   
    }

    const editHandler = () => {
        Alert.alert('Important', 'Are you sure you want to save these changes?', [
            {text: 'No', style: 'cancel'},
            {text: 'Yes', style: 'destructive', 
                onPress: () => {
                    editActivity();
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
                <View style={{marginTop: '40%'}}>
                    {mode === 'edit' && activity.important &&
                    <View style={[CommonStyles.directionRow, {justifyContent:'center', alignItems:'center', marginBottom:'10%'}]}>
                        <Text style={{color:"rgb(60,61,132)", fontWeight:'bold'}}>
                            This item is marked as Special. Select the checkbox if you want to approve it.
                        </Text>
                        <Checkbox
                            value={isReviewed}
                            onValueChange={setIsReviewed} />
                    </View>}
                    <View style={[CommonStyles.buttonsContainer]}>
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
        </View>
      );
}

const styles = StyleSheet.create({
})