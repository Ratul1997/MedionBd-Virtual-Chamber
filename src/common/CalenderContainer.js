/** 
 name: CalenderContainer
 function: This is a  component for CalenderContainer
**/
import React from 'react';
import {View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
// Colors And Dynamic Screen

// Moment
import moment from 'moment';
//Vector Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../constants/COLORS';
import normalization from '../constants/normalization';

export default function CalenderContainer(props) {
  /*

  Getting properties from navigation
  children: children in the routing component (React Children)

  variable -
  headerHide : it will detect the header means AppointMent Schedule Text. (boolean)

  function:
  onDateChange: for changing the date
  */
  const {headerHide, onDateChange} = props;

  //render Main View

  return (
    <View style={{width: '100%', marginBottom: 20}}>
      {!headerHide && (
        <Text
          style={{
            color: '#011A30',
            fontSize: normalization(18),
            marginBottom: 10,
            marginLeft: 10,
          }}>
          Appointment Schedule
        </Text>
      )}
      <CalendarPicker
        dayLabelsWrapper={{borderBottomWidth: 0, borderTopWidth: 0}}
        previousComponent={<AntDesign name="left" size={20} color="#000" />}
        nextComponent={<AntDesign name="right" size={20} color="#000" />}
        selectedDayColor="#19769F"
        // minDate={moment().startOf('day')}
        // maxDate={
        //   new Date(
        //     moment()
        //       .add(1, 'months')
        //       .startOf('day'),
        //   )
        // }
        onDateChange={onDateChange}
      />
    </View>
  );
}