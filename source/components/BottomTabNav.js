import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import AddPatient from '../screens/addPatient';
// import AppHome from '../screens/appHome';
import ListPatients from '../screens/listPatients';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen name="Home" component={AppHome} /> */}
            <Tab.Screen name="Add Patient" component={AddPatient} options={{ headerShown: false }} />
            <Tab.Screen name="List Patients" component={ListPatients} />
        </Tab.Navigator>
    )
}

export default BottomTabNav