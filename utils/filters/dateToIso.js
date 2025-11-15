export default function dateToIso (dateString) {
    return new Date(dateString).toISOString();
};