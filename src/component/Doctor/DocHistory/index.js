import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import PatientList from './PatientList';
import {connect} from 'react-redux';
import {sortByDate} from '../../../constants/calcuationdata';
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';
import ActivityIndicatorComponent from '../../../common/ActivityIndicatorComponent';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
function DocHistory(props) {
  const {userDetails, navigation} = props;

  const [patientList, setPatientList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isFocused = useIsFocused();
  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, [isFocused]);

  const loadData = () => {
    const url =
      'https://videoallapi.medionbd.com/' +
      'search-appointment-online-history-virtual';
    console.log(url,userDetails.idvirtualchamber);
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
  const onBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <>
      <AllPurposeHeader title="History" onBackNavigate={onBackNavigate} />
      {isLoading ? (
        <View style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}>
          <ActivityIndicatorComponent size="large" />
        </View>
      ) : (
        <PatientList data={patientList} navigation={navigation} />
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
export default connect(mapState, actionCreators)(DocHistory);
