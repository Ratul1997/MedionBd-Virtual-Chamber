import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import Patients from './Patients';
import PatientDataAppointMent from '../../../helpers/DummyData/PatientDataAppointMent';
import {connect} from 'react-redux';
import {userConstants} from '../../../constants/userConstants';
import axios from 'axios';
import ActivityIndicatorComponent from '../../../common/ActivityIndicatorComponent';
import {sortByDate} from '../../../constants/calcuationdata';
function AppointMents(props) {
  const {userDetails, navigation} = props;

  const [patientList, setPatientList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(userDetails);

  const isFocused = useIsFocused();
  const onBackNavigate = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, [isFocused]);

  const loadData = () => {
    const url =
      'https://videoallapi.medionbd.com/' + 'search-appointment-online-virtual';
    console.log(url, userDetails.idvirtualchamber);
    axios
      .post(url, {
        virtualChamberId: userDetails.idvirtualchamber,
      })
      .then(res => {
        console.log(res.data);
        const sortedArray = sortByDate(res.data);
        setPatientList(sortedArray);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        alert(err);
      });
  };

  return (
    <>
      <AllPurposeHeader title="Appointments" onBackNavigate={onBackNavigate} />
      {isLoading ? (
        <View style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}>
          <ActivityIndicatorComponent size="large" />
        </View>
      ) : (
        <Patients data={patientList} navigation={navigation} />
      )}
    </>
  );
}
function mapState(state) {
  const {userDetails} = state.docAuthReducer;
  const {loggedIn} = state.authReducer;
  return {userDetails, loggedIn};
}
const actionCreators = {};
export default connect(mapState, actionCreators)(AppointMents);
