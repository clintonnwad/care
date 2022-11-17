import Moment from 'moment';
import { React, useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { getAllPatients } from '../api/api';
import AppSearchInputField from '../components/AppSearchInputField';
import CustomBottomNav from '../components/CustomBottomNav';

function ListPatients(props) {
    const numPatients = 3;
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();

    useEffect(() => {
        console.log("called");
        getAllPatients()
            .then(
                (result) => {
                    setIsLoading(false);
                    setResponse(result);
                    console.log(result);
                }
            )
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }, []);

    // Here, we use Moment.js to format the date from JSON date to string
    let stringifyDate = (date) => {
        Moment.locale('en');
        return (Moment(date).format('MMMM DD, YYYY'))
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <AppSearchInputField placeholder={"Search for patient here ..."} />


                {response !== undefined ? <FlatList data={response}
                    ItemSeparatorComponent={FlatList.ItemSeparatorComponent}
                    keyExtractor={(item) => item._id + ""}
                    renderItem={(item) =>
                        <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                            <View style={[styles.listItem, styles.activityRow]}>
                                <View style={styles.activityColumnOne}>
                                    <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                                </View>
                                <View style={styles.activityColumnTwo}>
                                    <Text style={styles.activityDescOne}>{item.item.first_name + ' ' + item.item.last_name}</Text>
                                    <Text style={styles.activityDescTwo}>{item.item.gender}</Text>
                                    <Text style={styles.activityDescThree}>Joined {stringifyDate(item.item.createdAt)}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }>
                </FlatList>
                    :
                    <View><Text>Loading...</Text></View>}






            </View>

            <View style={styles.navArea}>
                <CustomBottomNav nav={props.navigation} page="listPatients" />
            </View>

        </View>


    );
}

export default ListPatients;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A161D',
        width: '100%',
        height: '100%',
    },
    top: {
        flex: 1,
        paddingStart: 20,
        paddingEnd: 20,
    },
    bottom: {
        flex: 4,
        paddingStart: 20,
        paddingEnd: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        flex: 1,
        resizeMode: 'contain',
        marginRight: 20,
        justifyContent: 'flex-end',
        alignContent: 'center',
        marginTop: '100%',
    },
    intro: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    caption: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    captionTop: {
        marginTop: 30
    },
    navArea: {
        height: 100,
        paddingStart: 40,
        paddingEnd: 40,
        paddingTop: 20,
        backgroundColor: '#0A161D',
    },
    tinyText: {
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10
    },
    listItem: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noActivityHeader: {
        color: '#2B4764',
        fontSize: 16,
        marginTop: 15,
        fontWeight: "600",
    },
    noActivityDesc: {
        color: '#2B4764',
        fontWeight: '500',
        fontSize: 12,
        marginTop: 6,
    },
    activityRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    activityAvatar: {
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    activityColumnOne: {
        flex: 1,
    },
    activityColumnTwo: {
        flex: 3,
    },
    activityDescOne: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
    },
    activityDescTwo: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '400',
        marginTop: 2,
    },
    activityDescThree: {
        marginTop: 3,
        color: '#5298EB',
        fontSize: 12,
    },
    activityScrollView: {
        marginBottom: 20
    }



})