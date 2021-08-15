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
function InvestigationComponent(props) {
  const {navigation, storeInvestigation} = props;
  const [Investigation, setSelectedInvestigation] = useState('');
  const onBackNavigate = () => {
    navigation.goBack();
  };

  const onSelect = () => {
    const date = new Date();
    const newInvestigation = {
      key: date.getTime(),
      investigation: Investigation,
    };
    console.log(newInvestigation);
    storeInvestigation(newInvestigation);
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
          Investigation
        </Text>
        <TextInput
          placeholder="Investigation"
          style={{
            fontSize: normalization(14),
            padding: 8,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#979A9A',
            marginBottom: normalization(13),
          }}
          value={Investigation}
          onChangeText={text => setSelectedInvestigation(text)}
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
  storeInvestigation: investigation => dispatch =>
    dispatch({type: userConstants.STORE_INVESTIGATION, investigation}),
};
export default connect(mapState, actionCreators)(InvestigationComponent);
