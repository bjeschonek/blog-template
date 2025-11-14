import { DateTime } from 'luxon';

export default function createReadableDate (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('LLL dd yyyy');
};