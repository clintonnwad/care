import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AddPatient from './source/screens/AddPatient';
import AddTestResult from './source/screens/AddTestResult';
import AppHome from './source/screens/AppHome';
import ListPatients from './source/screens/ListPatients';
import Login from './source/screens/Login';
import PatientDetails from './source/screens/PatientDetails';

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


