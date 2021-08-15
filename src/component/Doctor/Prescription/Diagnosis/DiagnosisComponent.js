import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {userConstants} from '../../../../constants/userConstants';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';
function DiagnosisComponent(props) {
  const {navigation, storeDiagnosis} = props;
  const [Diagnosis, setSelectedDiagnosis] = useState('');
  const onBackNavigate = () => {
    navigation.goBack();
  };

  const onSelect = () => {
    const date = new Date();
    const newDiagnosis = {
      key: date.getTime(),
      diagnosis: Diagnosis,
    };
    console.log(newDiagnosis);
    storeDiagnosis(newDiagnosis);
    onBackNavigate();
  };
  return (
    <>
      <AllPurposeHeader title="Diagnosis" onBackNavigate={onBackNavigate} />
      <ScrollView
        contentContainerStyle={{
          margin: normalization(20),
          backgroundColor: 'white',
          height: normalization(200),
          justifyContent: 'center',
          padding: normalization(20),
        }}>
        <Text style={{marginStart: normalization(2), color: COLORS.textGrey}}>
          Diagnosis
        </Text>
        <TextInput
          placeholder="Diagnosis"
          style={{
            fontSize: normalization(14),
            padding: 8,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#979A9A',
            marginBottom: normalization(13),
          }}
          value={Diagnosis}
          onChangeText={text => setSelectedDiagnosis(text)}
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
  storeDiagnosis: diagnosis => dispatch =>
    dispatch({type: userConstants.STORE_DIAGNOSIS, diagnosis}),
};
export default connect(mapState, actionCreators)(DiagnosisComponent);
