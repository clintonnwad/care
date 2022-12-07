import Moment from 'moment';
import React from 'react';

// Here, we use Moment.js to format the date from JSON date to string
export function stringifyDate(date) {
    Moment.locale('en');

    return (Moment(date).format('MMMM DD, YYYY'));
}

// This is the long form of the Stringigy Date function above
export function stringifyDateLong(date) {
    Moment.locale('en');

    return (Moment(date).format('MMMM Do, YYYY • h:mm a'));
}

// Here, we calculate the age of a patient using Moment.js
export function calcNumYears(dob) {
    const formattedDate = Moment(dob).format('MMDDYYYY');
    const numYearsMoment = Moment(formattedDate, "MMDDYYYY").fromNow();

    const numYearsArr = numYearsMoment.split(' ');
    const numYears = numYearsArr[0] + " " + numYearsArr[1];

    return numYears;
}