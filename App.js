import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';

import AddActivity from './screens/AddActivity';
import AllActivities from './screens/AllActivities';
import SpecialActivities from './screens/SpecialActivities';
import Start from './screens/Start';
import CommonStyles from './styles/CommonStyles';
import PressableArea from './components/PressableArea';

//nested navigation of two bottom tabs in home screen
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => ({
        headerStyle: CommonStyles.purpleDark,
        headerTintColor: "#fff",
        headerTitleAlign:"center",
        tabBarStyle: CommonStyles.purpleDark,
        tabBarActiveTintColor: "rgb(235,187,66)",
        headerRight:() => {
          return <PressableArea onPressFunc={() => {navigation.navigate('Add')}}>
            <FontAwesome6 name="plus" size={20} color="white"/>
          </PressableArea>
        },
        tabBarIcon:({size, color}) => {
          let iconName;
          if (route.name === 'All Activities') {
            iconName ='dollar'; // Icon name for "All" tab
          } else if (route.name === 'Special Activities') {
            iconName ='exclamation'; // Icon name for "Special" tab
          }
          return <FontAwesome6 name={iconName} size={size} color={color} />;
        }
      })}
    >  
      <Tab.Screen name="All Activities" component={AllActivities} />
      <Tab.Screen name="Special Activities" component={SpecialActivities} />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerStyle: CommonStyles.purpleDark,
          headerTintColor:"#fff",
          headerTitleAlign:'center',
        }}>
        {/* <Stack.Screen 
          name="Start"
          component={Start}
          options={{headerShown:false}}/> */}
        <Stack.Screen 
          name=" "
          component={MyTabs}
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="Add"
          component={AddActivity}
          options={{
            title: "Add an Activity"}}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
