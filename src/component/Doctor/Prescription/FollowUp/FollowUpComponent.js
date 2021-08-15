import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import Search from '../../../../common/Search';
import {Advices} from '../../../../helpers/Advices';
import {ScrollView} from 'react-native-gesture-handler';
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';
import {userConstants} from '../../../../constants/userConstants';
import {connect} from 'react-redux';
import {FollowUps} from '../../../../helpers/Follw-up';
import FollowUp from './FollowUps';
function FollowUpComponent(props) {
  const {navigation, storeFollow} = props;
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(FollowUps);
  const [followUps, setSelectedFollowUps] = useState('');

  const onBackNavigate = () => {
    navigation.goBack();
  };
  const onSearch = text => {
    setSearchText(text);
  };
  const onSelect = () => {
    const date = new Date();
    const newFollowUp = {
      key: date.getTime(),
      followup: followUps,
    };
    storeFollow(newFollowUp);
    onBackNavigate();
  };

  return (
    <>
      <AllPurposeHeader title="Follow Ups" onBackNavigate={onBackNavigate} />
      <Search onChangeText={onSearch} value={searchText} title="Follow Ups" />
      <FollowUp list={list} setSelectedFollowUps={setSelectedFollowUps} />
      <ScrollView
        contentContainerStyle={{
          margin: normalization(20),
          backgroundColor: 'white',
          height: normalization(200),
          justifyContent: 'center',
          padding: normalization(20),
        }}>
        <Text style={{marginStart: normalization(2), color: COLORS.textGrey}}>
          Follow Up
        </Text>
        <TextInput
          placeholder="Follow Up"
          style={{
            fontSize: normalization(14),
            padding: 8,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#979A9A',
            marginBottom: normalization(13),
          }}
          value={followUps}
          onChangeText={text => setSelectedFollowUps(text)}
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
  storeFollow: followUp => dispatch =>
    dispatch({type: userConstants.STORE_FOLLOW_UP, followUp}),
};
export default connect(mapState, actionCreators)(FollowUpComponent);
