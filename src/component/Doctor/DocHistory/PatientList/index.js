import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
// Colors and Dynamic Screen
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';
// Vector Icons
import IonIcons from 'react-native-vector-icons/Ionicons';

import ModalComponent from '../../../../common/ModalComponent'

import convertDate from '../../../../helpers/convertDate';
import {convertStringToDate} from '../../../../constants/calcuationdata';
import PatientItem from './PatientItem';
import CalenderContainer from '../../../../common/CalenderContainer';

export default function PatientList(props) {
  const {data, onStartCall, navigation} = props;
  /**
   * States-
   * modalVisible: for showing modal
   * date: for getting Date
   */
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState('');

  /**
   * @name: onPressCloseModal
   * @function: setting Modal False
   */
  const onPressCloseModal = () => {
    setModalVisible(false);
  };
  /**
   * @name: onPressOpenModal
   * @function: setting Modal True
   */
  const onPressOpenModal = () => {
    setModalVisible(true);
  };

  const onDateChange = date => {
      
    const newDate = convertDate.convertDateToString(date);
    setDate(newDate);
    onPressCloseModal();
    console.log(newDate);
  };
  //render Patient List
  const renderItem = ({item, index}) => {
    return <PatientItem item={item} index={index} navigation={navigation} />;
  };
  //render Main
  return (
    <View style={{flex: 1}}>
      <ModalComponent
        onPressCloseModal={onPressCloseModal}
        modalVisible={modalVisible}>
        <CalenderContainer onDateChange={onDateChange} headerHide={true} />
      </ModalComponent>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: normalization(18),
            fontWeight: 'bold',
            fontFamily: COLORS.font_family,
            marginEnd: normalization(5),
          }}>
          Sort By
        </Text>
        <View style={[styles.dateContainer]}>
          <Text> {date ? date : 'Select Date'} </Text>
          <IonIcons
            name="calendar-outline"
            size={normalization(15)}
            color={COLORS.Prescription_button}
            onPress={onPressOpenModal}
          />
        </View>

        <IonIcons
          name="search-circle"
          size={normalization(25)}
          color={COLORS.Prescription_button}
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginRight: normalization(10),
          }}
        />
      </View>

      {/* PatientFlatList */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.idonlineappointment}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around',
    height: normalization(30),
    borderColor: COLORS.textlightBlue,
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: normalization(10),
    marginHorizontal: normalization(10),
    borderRadius: 10,
  },
});
