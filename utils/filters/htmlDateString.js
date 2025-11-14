import { DateTime } from 'luxon';

export default function htmlDateString (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
};