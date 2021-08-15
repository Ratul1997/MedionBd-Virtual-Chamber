import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Search from '../../../../common/Search';
import {connect} from 'react-redux';
import {userConstants} from '../../../../constants/userConstants';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import MedicineName from './MedicineName';
import {Medicine} from '../../../../helpers/Medicine';
import Details from './Details';
import {} from 'react-native-gesture-handler';
import VirtualizedView from '../../../../common/VirtualizedView';

function RXComponent(props) {
  const {navigation} = props;
  const [list, setSelectedList] = useState(Medicine);
  const [searchText, setSearchText] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState({});
  const onSearch = text => {
    setSearchText(text);
  };

  const onBackNavigate = () => {
    navigation.goBack();
  };
  console.log(selectedMedicine);
  return (
    <>
      <AllPurposeHeader title="Medicines" onBackNavigate={onBackNavigate} />
      <Search onChangeText={onSearch} value={searchText} title="Medicines" />

      <MedicineName
        rowNumber={2}
        list={list}
        selectedMedicine={selectedMedicine}
        setSelectedMedicine={setSelectedMedicine}
      />
      <ScrollView>
        <Details selectedMedicine={selectedMedicine} navigation={navigation} />
      </ScrollView>
    </>
  );
}
function mapState(state) {
  const {medicines} = state.prescriptionReducer;
  return {medicines};
}
const actionCreators = {
  storedata: user => dispatch =>
    dispatch({type: userConstants.STORE_DOC_DETAILS, user}),
  loggedInReq: () => dispatch => dispatch({type: userConstants.LOGIN_SUCCESS}),
};
export default connect(mapState, actionCreators)(RXComponent);
