import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import Search from '../../../../common/Search';
import Advice from './Advices';
import {Advices} from '../../../../helpers/Advices';
import {ScrollView} from 'react-native-gesture-handler';
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';
import {userConstants} from '../../../../constants/userConstants';
import {connect} from 'react-redux';
function AdviceComponent(props) {
  const {navigation, storeAdvice} = props;
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(Advices);
  const [advice, setSelectedAdvice] = useState('');

  const onBackNavigate = () => {
    navigation.goBack();
  };
  const onSearch = text => {
    setSearchText(text);
  };
  const onSelect = () => {
    const date = new Date();
    const newAdvice = {
      key: date.getTime(),
      advice: advice,
    };
    storeAdvice(newAdvice);
    onBackNavigate();
  };

  return (
    <>
      <AllPurposeHeader title="Advices" onBackNavigate={onBackNavigate} />
      <Search onChangeText={onSearch} value={searchText} title="Advices" />
      <Advice list={list} setSelectedAdvice={setSelectedAdvice} />
      <ScrollView
        contentContainerStyle={{
          margin: normalization(20),
          backgroundColor: 'white',
          height: normalization(200),
          justifyContent: 'center',
          padding: normalization(20),
        }}>
        <Text style={{marginStart: normalization(2), color: COLORS.textGrey}}>
          Advice
        </Text>
        <TextInput
          placeholder="Medicine Name"
          style={{
            fontSize: normalization(14),
            padding: 8,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#979A9A',
            marginBottom: normalization(13),
          }}
          value={advice}
          onChangeText={text => setSelectedAdvice(text)}
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
  storeAdvice: advice => dispatch =>
    dispatch({type: userConstants.STORE_ADVICE, advice}),
};
export default connect(mapState, actionCreators)(AdviceComponent);
