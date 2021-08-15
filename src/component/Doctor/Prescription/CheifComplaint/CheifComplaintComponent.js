import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import Search from '../../../../common/Search';
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';
import {userConstants} from '../../../../constants/userConstants';
import {connect} from 'react-redux';
function CheifComplaintComponent(props) {
  const {navigation, storeComplaints} = props;
  const [Complaints, setSelectedComplaints] = useState('');
  const onBackNavigate = () => {
    navigation.goBack();
  };

  const onSelect = () => {
    const date = new Date();
    const newComplaints = {
      key: date.getTime(),
      complaints: Complaints,
    };
    console.log(newComplaints);
    storeComplaints(newComplaints);
    onBackNavigate();
  };
  return (
    <>
      <AllPurposeHeader
        title="Cheif Complaint"
        onBackNavigate={onBackNavigate}
      />
      <ScrollView
        contentContainerStyle={{
          margin: normalization(20),
          backgroundColor: 'white',
          height: normalization(200),
          justifyContent: 'center',
          padding: normalization(20),
        }}>
        <Text style={{marginStart: normalization(2), color: COLORS.textGrey}}>
          Complaints
        </Text>
        <TextInput
          placeholder="Complaints"
          style={{
            fontSize: normalization(14),
            padding: 8,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#979A9A',
            marginBottom: normalization(13),
          }}
          value={Complaints}
          onChangeText={text => setSelectedComplaints(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.deepBlueHeader,
            height: normalization(35),
            width: normalization(100),
            justifyContent: 'center',
            alignSelf: 'center',
            margin: normalization(20),
            alignItems: 'center',
            borderRadius: 40,
          }}
          onPress={onSelect}>
          <Text style={{color: 'white'}}>Select</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
function mapState(state) {
  // const {userDetails} = state.userReducer;
  // const {loggedIn} = state.authReducer;
  return {};
}
const actionCreators = {
  storeComplaints: cheifComplaint => dispatch =>
    dispatch({type: userConstants.STORE_CHIEF_COMPLAINT, cheifComplaint}),
};
export default connect(mapState, actionCreators)(CheifComplaintComponent);
