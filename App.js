import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AddPatient from './source/screens/AddPatient';
import AddTestResult from './source/screens/Add_TestResult';
import AppHome from './source/screens/App_Home';
import ListPatients from './source/screens/List_Patients';
import Login from './source/screens/Login_';
import PatientDetails from './source/screens/Patient_Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="AppHome" component={AppHome} options={{ headerShown: false, headerBackVisible: false }} />
        <Stack.Screen name="AddPatient" component={AddPatient} options={{ title: "Add Patient", headerTintColor: '#FFFFFF', headerStyle: { backgroundColor: '#0A161D', } }} />
        <Stack.Screen name="ListPatients" component={ListPatients} options={{ headerShown: false, title: 'List Patients', animation: 'none', headerTintColor: '#FFFFFF', headerStyle: { backgroundColor: '#0A161D', } }} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} options={{ title: "Patient Details" }} />
        <Stack.Screen name="AddTestResult" component={AddTestResult} options={{ title: "Add Test Result" }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}