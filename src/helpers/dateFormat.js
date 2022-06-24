import moment from "moment";

const dateFormatShow = 'DD/MM/YYYY';

const getPickerDateFormat = date => moment(date).format(dateFormatShow);

const getDateInIsoFormat = date => {
  const dateTmp = moment(date, dateFormatShow);
  return dateTmp.format();
}

export { getPickerDateFormat, getDateInIsoFormat }
