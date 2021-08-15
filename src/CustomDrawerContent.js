import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Button, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {userConstants} from './constants/userConstants';
import normalization from './constants/normalization';

function CustomDrawerContent(props) {
  const {loggedout, loggedIn} = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {loggedIn && (
        <TouchableOpacity
          onPress={() => loggedout()}
          style={{
            marginHorizontal: normalization(18),
            marginVertical: normalization(10),
          }}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      )}
    </DrawerContentScrollView>
  );
}

function mapState(state) {
  const {loggedIn} = state.authReducer;
  return {loggedIn};
}

const actionCreators = {
  loggedout: () => dispatch => {
    dispatch({type: userConstants.LOGOUT});
    dispatch({type: userConstants.REMOVE_USER_DETAILS});
  },
};
export default connect(mapState, actionCreators)(CustomDrawerContent);
