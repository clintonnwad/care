import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/login";
import AppHome from '../screens/appHome';
import AddPatient from '../screens/addPatient';
import ListPatients from '../screens/listPatients';
import PatientDetails from '../screens/patientDetails';
import AddTestResult from '../screens/addTestResult';

// Using Key-value pairs, let's configure the individual screens
const screens = {
    Login:{
        screen: Login
    },
    AppHome:{
        screen: AppHome
    },
    AddPatient:{
        screen: AddPatient
    },
    ListPatients:{
        screen: ListPatients
    },
    PatientDetails:{
        screen: PatientDetails
    },
    AddTestResult:{
        screen: AddTestResult
    },
}

// Create a new Stack Navigator
const HomeStack = createStackNavigator( screens );

export default createAppContainer(HomeStack);