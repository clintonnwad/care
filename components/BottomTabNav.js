import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AppHome from '../screens/appHome';
import AddPatient from '../screens/addPatient';
import ListPatients from '../screens/listPatients';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
            <Tab.Screen name="Add Patient" component={AddPatient} />
            <Tab.Screen name="List Patients" component={ListPatients} />
        </Tab.Navigator>
    )
}

export default BottomTabNav