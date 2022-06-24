import moment from "moment";

const getPickerDateFormat = date => moment(date).format('DD/MM/YYYY');

export { getPickerDateFormat }
