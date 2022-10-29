import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './source/screens/login';
import AppHome from './source/screens/appHome';
import AddPatient from './source/screens/addPatient';
import ListPatients from './source/screens/listPatients';
import PatientDetails from './source/screens/patientDetails';
import AddTestResult from './source/screens/addTestResult';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="AppHome" component={AppHome} options={{ headerShown: false }} />
        <Stack.Screen name="AddPatient" component={AddPatient} />
        <Stack.Screen name="ListPatients" component={ListPatients} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} />
        <Stack.Screen name="AddTestResult" component={AddTestResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


