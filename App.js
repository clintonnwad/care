import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AddPatient from './source/screens/addPatient';
import AddTestResult from './source/screens/addTestResult';
import AppHome from './source/screens/appHome';
import ListPatients from './source/screens/listPatients';
import Login from './source/screens/login';
import PatientDetails from './source/screens/patientDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="AppHome" component={AppHome} options={{ headerShown: false, headerBackVisible: false }} />
        <Stack.Screen name="AddPatient" component={AddPatient} />
        <Stack.Screen name="ListPatients" component={ListPatients} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} />
        <Stack.Screen name="AddTestResult" component={AddTestResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


