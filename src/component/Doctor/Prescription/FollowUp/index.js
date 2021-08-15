import React from 'react';
import {View, Text} from 'react-native';
import normalization from '../../../../constants/normalization';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {userConstants} from '../../../../constants/userConstants';
import { TouchableOpacity } from 'react-native-gesture-handler';
function FollowUp(props) {
  const {item, removeFollowUp} = props;

  const remove = () => {
    removeFollowUp(item);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 15, marginBottom: normalization(5)}}>
        {' '}
        {item.followup}
      </Text>
      <TouchableOpacity onPress={remove}>
        <AntDesign
          style={{alignSelf: 'flex-end'}}
          name="closecircle"
          size={15}
          color="#CB4335"
        />
      </TouchableOpacity>
    </View>
  );
}
function mapState(state) {
  const {medicines, advices, followup} = state.prescriptionReducer;
  return {medicines, advices, followup};
}
const actionCreators = {
  removeFollowUp: followUp => dispatch =>
    dispatch({type: userConstants.REMOVE_FOLLOW_UP, followUp}),
};
export default connect(mapState, actionCreators)(FollowUp);
