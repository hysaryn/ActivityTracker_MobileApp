import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CommonStyles from '../styles/CommonStyles';

import Input from '../components/Input';

export default function Start({navigation}) {
        //initialize userName
        const[email, setEmail] = useState("");
        const[emailError, setEmailError] = useState("");
    
        //initialize number
        const[phone, setPhone] = useState("");
        const[phoneError, setPhoneError] = useState("");

        const handleReset = () => {
            // Reset input fields
            setEmail('');
            setEmailError('');
            setPhone('');
            setPhoneError('');
          };
        
        const handleStart = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[0-9]{10}$/;
            //reset email and phone error message and test again
            setEmailError("");
            setPhoneError("");

            if (emailRegex.test(email) && phoneRegex.test(phone)) {
                // Valid data, navigate to the next screen
                navigation.navigate(' ');
            } 
            if (!phoneRegex.test(phone)) {
                setPhoneError("Please enter a valid phone number");
            }
            if (!emailRegex.test(email)){
                setEmailError("Please enter a valid email address");
            }
        }

        return (
            <View style={CommonStyles.container}>
                <Input
                    label="Email Address"
                    value={email}
                    onChangeText={(data) => setEmail(data)}
                    error={emailError}
                />
                <Input
                    label="Phone Number"
                    value={phone}
                    onChangeText={(data) => setPhone(data)}
                    error={phoneError}
                />
                <View style={CommonStyles.buttonsContainer}>
                    <Button color={'red'} title='Reset' onPress={handleReset} />
                    <Button 
                        color={"rgb(60,61,132)"} 
                        title='Confirm'
                        disabled={!(email || phone)} 
                        onPress={handleStart} />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({})