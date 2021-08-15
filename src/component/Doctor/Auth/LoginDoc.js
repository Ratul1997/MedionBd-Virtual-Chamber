/** 
 name: Login
 function: This is a component for login
**/

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

import {connect} from 'react-redux';
import ActivityIndicatorComponent from '../../../common/ActivityIndicatorComponent';
import axios from 'axios';
import {userConstants} from '../../../constants/userConstants';
function LoginDoc(props) {
  /*

  Getting properties from navigation

  function-
  applyButtonClick: for navigating to next Page
  */
  const {navigation, storedata, loggedInReq} = props;

  const [confirmResult, setConfirmResult] = useState(null);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validatePhoneNumber = phone => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(phone);
  };

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  const onLogin = () => {
    navigation.navigate('DrawerNav');
  };
  const onApplyButton = () => {
    setIsLoading(true);
    const url = 'https://videoallapi.medionbd.com/' + 'virtual-auth';
    console.log(url);
    axios
      .post(url, {
        contact_number: phone,
        password: password,
      })
      .then(res => {
        console.log(res.data.results[0]);
        setIsLoading(false);
        storedata(res.data.results[0]);
        loggedInReq();
        onLogin();
      })
      .catch(err => {
        console.log(err);
        alert('Password or Phone Number doesnot match');
        setIsLoading(false);
      });
  };

  return (
    // Mani View
    <View style={{justifyContent: 'center', flex: 1, alignSelf: 'center'}}>
      <Image
        style={{margin: normalization(23), alignSelf: 'center'}}
        source={require('../../../images/33.png')}
      />
      <Text
        style={{
          color: COLORS.textlightBlue,
          fontWeight: 'bold',
          fontSize: normalization(20),
          alignSelf: 'center',
          marginBottom: normalization(20),
        }}>
        Log in to continue
      </Text>
      <Text style={{marginStart: normalization(2), color: COLORS.textGrey}}>
        Phone Number
      </Text>
      <TextInput
        placeholder="Phone Number"
        style={styles.textInputStyle}
        value={phone}
        onChangeText={text => setPhone(text)}
      />
      <Text style={{marginStart: normalization(2), color: COLORS.textGrey}}>
        Password
      </Text>
      <TextInput
        placeholder="Password"
        style={styles.textInputStyle}
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity style={styles.logInButton} onPress={onApplyButton}>
        {isLoading ? (
          <ActivityIndicatorComponent size="large" color="white" />
        ) : (
          <Text
            style={{
              fontSize: normalization(14),
              color: COLORS.white,
              fontWeight: 'bold',
            }}>
            Apply
          </Text>
        )}
      </TouchableOpacity>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text
          style={{
            marginStart: normalization(10),
            color: COLORS.textGrey,
            fontSize: normalization(13),
          }}>
          Don't have an account!{' '}
        </Text>
        <TouchableOpacity onPress={onSignUp}>
          <Text
            style={{
              marginStart: normalization(10),
              color: COLORS.textlightBlue,
              fontSize: normalization(13),
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: normalization(14),
    padding: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#979A9A',
    marginBottom: normalization(13),
  },
  logInButton: {
    height: normalization(47),
    width: Dimensions.get('window').width * 0.92 - normalization(57),
    backgroundColor: '#053871',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
    marginBottom: normalization(7),
  },
});
function mapState(state) {
  const {userDetails} = state.userReducer;
  const {loggedIn} = state.authReducer;
  return {userDetails, loggedIn};
}
const actionCreators = {
  storedata: user => dispatch =>
    dispatch({type: userConstants.STORE_DOC_DETAILS, user}),
  loggedInReq: () => dispatch => dispatch({type: userConstants.LOGIN_SUCCESS}),
};
export default connect(mapState, actionCreators)(LoginDoc);
