import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {userConstants} from '../../../../../constants/userConstants';
import COLORS from '../../../../../constants/COLORS';
import normalization from '../../../../../constants/normalization';
import AllPurposeHeader from '../../../../../common/AllPurposeHeader';
function HistoryComponent(props) {
  const {navigation, storeHistory} = props;
  const [History, setSelectedHistory] = useState('');
  const onBackNavigate = () => {
    navigation.goBack();
  };

  const onSelect = () => {
    const date = new Date();
    const newHistory = {
      key: date.getTime(),
      history: History,
    };
    console.log(newHistory);
    storeHistory(newHistory);
    onBackNavigate();
  };
  return (
    <>
      <AllPurposeHeader title="History" onBackNavigate={onBackNavigate} />
      <ScrollView
        contentContainerStyle={{
          margin: normalization(20),
          backgroundColor: 'white',
          height: normalization(200),
          justifyContent: 'center',
          padding: normalization(20),
        }}>
        <Text style={{marginStart: normalization(2), color: COLORS.textGrey}}>
          History
        </Text>
        <TextInput
          placeholder="History"
          style={{
            fontSize: normalization(14),
            padding: 8,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#979A9A',
            marginBottom: normalization(13),
          }}
          value={History}
          onChangeText={text => setSelectedHistory(text)}
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
  storeHistory: history => dispatch =>
    dispatch({type: userConstants.STORE_HISTORY, history}),
};
export default connect(mapState, actionCreators)(HistoryComponent);
