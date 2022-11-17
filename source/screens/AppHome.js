import { useIsFocused } from "@react-navigation/native";
import Moment from 'moment';
import { React, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { getActivities } from '../api/api';
import AppSearchInputField from '../components/AppSearchInputField';
import CustomBottomNav from '../components/CustomBottomNav';

function AppHome(props) {
    const userActivity = 1;
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();

    const isFocused = useIsFocused();

    useEffect(() => {
        console.log("called");
        getActivities()
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
    }, [props, isFocused]);


    // Here, we use Moment.js to format the date from JSON date to string
    let stringifyDate = (date) => {
        Moment.locale('en');
        return (Moment(date).format('MMMM DD, YYYY HH:mm a'))
    }

    return (
        <ImageBackground
            source={require('../assets/empty-background.png')}
            style={styles.container}>

            <View style={styles.top}>
                <View style={styles.topRow}>
                    <View style={styles.topColumnOne}>
                        <Text style={styles.intro}>Hi, Clinton</Text>
                        <Text style={[styles.caption, styles.captionTop]}>Keep taking</Text>
                        <Text style={styles.caption}>care of your health</Text>
                    </View>
                    <View style={styles.topColumnTwo}>
                        <Image source={require('../assets/avatarUser.png')} style={styles.avatar} />
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <AppSearchInputField placeholder="Search for patient here ..." />

                <Text style={styles.tinyText}>Recent activities</Text>

                {userActivity < 1 ?
                    <View style={styles.activityView}>
                        <ImageBackground source={require('../assets/no-activity.png')} style={styles.noActivityImage} />
                        <Text style={styles.noActivityHeader}>No Recent Activity</Text>
                        <Text style={styles.noActivityDesc}>Try adding a patient using the + button below</Text>
                    </View>
                    :

                    response !== undefined ? <FlatList data={response}
                        ItemSeparatorComponent={FlatList.ItemSeparatorComponent}
                        keyExtractor={(item) => item._id + ""}
                        renderItem={(item) =>
                            <TouchableOpacity onPress={() => props.navigation.navigate('PatientDetails')}>
                                <View style={[styles.activityView, styles.activityRow]}>
                                    <View style={styles.activityColumnOne}>
                                        <Image source={require('../assets/patient-1.png')} style={styles.activityAvatar} />
                                    </View>
                                    <View style={styles.activityColumnTwo}>
                                        <Text style={styles.activityDescOne}>{item.item.activity_type.replace('_', ' ')}</Text>
                                        <Text style={styles.activityDescTwo}>{item.item.title}</Text>
                                        <Text style={styles.activityDescThree}>{stringifyDate(item.item.createdAt)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }>
                    </FlatList>
                        :
                        <Text>Loading...</Text>
                }
            </View>

            <View style={styles.navArea}>
                <CustomBottomNav nav={props.navigation} page="home" />
            </View>

        </ImageBackground>


    );
}

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
    topRow: {
        flex: 1,
        flexDirection: 'row',
    },
    topColumnOne: {
        backgroundColor: 'transparent',
        flex: 3,
        alignContent: 'flex-start',
        justifyContent: 'flex-end',
    },
    topColumnTwo: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',
    },
    bottom: {
        flex: 2,
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: 10,
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
    noActivityImage: {
        height: 130,
        width: 120,
        marginTop: 30,
    },
    activityView: {
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
        borderRadius: '50%',
    },
    activityColumnOne: {
        flex: 1,
    },
    activityColumnTwo: {
        flex: 3,
        // backgroundColor: 'red',
    },
    activityDescOne: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    activityDescTwo: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '500',
    },
    activityDescThree: {
        color: '#5298EB',
        fontSize: 12,
    },
    activityScrollView: {
        marginBottom: 20
    }



})

export default AppHome;