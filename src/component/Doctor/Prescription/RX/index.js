import React from 'react';
import {View, Text} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import normalization from '../../../../constants/normalization';
import {connect} from 'react-redux';
import {userConstants} from '../../../../constants/userConstants';
import {TouchableOpacity} from 'react-native-gesture-handler';
function RX(props) {
  const {item, removeRX} = props;

  const removeMedicine = () => {
    removeRX(item);
  };
  return (
    <View>
      <Text style={{fontSize: 15, marginBottom: normalization(5)}}>
        {item.medicine_name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: normalization(10),
        }}>
        <Text> {item.type}</Text>
        <Text>- - - -</Text>
        <Text>{item.eating}</Text>
        <Text>- - - -</Text>
        <Text>{item.days} days</Text>
        <TouchableOpacity onPress={removeMedicine}>
          <AntDesign
            style={{alignSelf: 'flex-end'}}
            name="closecircle"
            size={15}
            color="#CB4335"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
function mapState(state) {
  const {medicines} = state.prescriptionReducer;
  return {medicines};
}
const actionCreators = {
  removeRX: medicine => dispatch =>
    dispatch({type: userConstants.REMOVE_MEDICINE, medicine}),
};
export default connect(mapState, actionCreators)(RX);
