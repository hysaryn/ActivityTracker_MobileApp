import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

import AddActivity from './screens/AddActivity';
import AllActivities from './screens/AllActivities';
import SpecialActivities from './screens/SpecialActivities';
import Start from './screens/Start';

//create nested navigation of two bottom tabs 
//(all and special activities in home screen)
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => ({
        headerRight:() => (
          <Pressable onPress={() => navigation.navigate("Add")}>
            <Ionicons name="add" size={30} color="black" />
          </Pressable>
        )
      })}
    >  
      <Tab.Screen name="All" component={AllActivities} />
      <Tab.Screen name="Special" component={SpecialActivities} />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Start"
          component={Start}
          options={{headerShown:false}}/>
        <Stack.Screen 
          name="Home"
          component={MyTabs}
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="Add"
          component={AddActivity}
          options={{title: "Add an Activity"}}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
