import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PatientProfile from '../component/PatientProfile';
import LoginModal from './LoginModal';
import Login from '../component/Auth/Login';
import ModalComponent from './ModalComponent';
import normalization from '../constants/normalization';
import SignUp from '../component/Auth/SignUp';
function Profiles(props) {
  const {loggedIn, navigation, userDetails} = props;

  const [isSignUp, setIsSignUp] = useState(false);

  const onSignUp = () => {
    console.log('Ok');
    setIsSignUp(!isSignUp);
  };

  return loggedIn ? (
    <PatientProfile navigation={navigation} userDetails={userDetails} />
  ) : (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        // backgroundColor: 'red',
        flex: 1,
      }}>
      {isSignUp ? <SignUp onLogin={onSignUp} /> : <Login onSignUp={onSignUp} />}
    </View>
  );
}

function mapState(state) {
  const {userDetails} = state.userReducer;
  const {loggedIn} = state.authReducer;
  return {userDetails, loggedIn};
}
const actionCreators = {};
export default connect(mapState, actionCreators)(Profiles);
