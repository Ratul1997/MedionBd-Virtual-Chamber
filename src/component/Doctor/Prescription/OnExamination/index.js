import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import normalization from '../../../../constants/normalization';
import {userConstants} from '../../../../constants/userConstants';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
function OnExamination(props) {
  const {item, removeOnExamination} = props;
  const removeOnExaminations = () => {
    removeOnExamination(item);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{fontSize: normalization(13), marginBottom: normalization(5)}}>
        {' '}
        {item.onExamination}
      </Text>
      <TouchableOpacity onPress={removeOnExaminations}>
        <AntDesign
          name="closecircle"
          size={normalization(13)}
          color="#CB4335"
        />
      </TouchableOpacity>
    </View>
  );
}
function mapState(state) {
  // const {userDetails} = state.userReducer;
  // const {loggedIn} = state.authReducer;
  return {};
}
const actionCreators = {
  removeOnExamination: onExamination => dispatch =>
    dispatch({type: userConstants.REMOVE_ON_EXAMINATION, onExamination}),
};
export default connect(mapState, actionCreators)(OnExamination);
