const appointmentHistory = [
  {
    date: '15',
    month: 'Aug',
    year: '2019',
    docName: 'Dr. Saif Hasan',
    speciality: 'Cardiology',
    time: '10:00 AM - 11:00 AM',
    type: 'Pending',
    key: '1',
  },
  {
    date: '12',
    month: 'Jul',
    year: '2019',
    docName: 'Dr. Mahmudul Hasan',
    speciality: 'Cardiology',
    time: '9:00 AM - 10:00 AM',
    type: 'Completed',
    key: '2',
  },
];

const medicine = [
  {name: 'medicine Name1', gram: '10mg', key: '1'},
  {name: 'medicine Name2', gram: '5mg', key: '2'},
  {name: 'medicine Name3', gram: '20mg', key: '3'},
  {name: 'medicine Name4', gram: '10mg', key: '4'},
];

const packages = [
  {name: 'Senior Citizen Combo', purchased: '23, July, 2020', key: '1'},
  {name: 'Silver Package', purchased: '23, July, 2020', key: '2'},
];
const subscription = [
  {
    packageName: 'Senior Citizen Package',
    date: '20-10-2020',
    cost: '1500 BDT',
    key: '1',
  },
  {packageName: 'package 2', date: '20-11-2020', cost: '2000 BDT', key: '2'},
];
const PatientHistoryData = {
  appointmentHistory,
  medicine,
  packages,
  subscription,
};

export default PatientHistoryData;
