import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';
import {userConstants} from '../../../../constants/userConstants';
import {connect} from 'react-redux';
function Details(props) {
  const {selectedMedicine, storeMedicine, navigation} = props;

  const {brand_name, type, suggetions} = selectedMedicine;
  const initial_medicine_name = type ? type + '.' + brand_name : '';

  const [medicine_name, setMedicineName] = useState(initial_medicine_name);

  useEffect(() => {
    setMedicineName(initial_medicine_name ? initial_medicine_name : '');
    return () => {
      setMedicineName('');
    };
  }, [initial_medicine_name]);
  const [BeforeEating, setBeforeEating] = useState(true);
  const [eating, setEating] = useState('B.Eat');
  const [dose1, setDose1] = useState('');
  const [dose2, setDose2] = useState('');
  const [dose3, setDose3] = useState('');
  const [days, setDays] = useState('');
  const onSelect = () => {
    const date = new Date();
    const data = {
      key: date.getTime(),
      medicine_name: medicine_name,
      type: dose1 + ' + ' + dose2 + ' + ' + dose3,
      days: days,
      eating: eating,
    };
    storeMedicine(data);
    navigation.goBack();
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginHorizontal: normalization(15),
        borderRadius: 10,
        marginVertical: normalization(20),
        padding: normalization(10),
      }}>
      <Text style={{marginStart: normalization(2), color: COLORS.textGrey}}>
        Medicine Name
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
        value={medicine_name}
        onChangeText={text => setMedicineName(text)}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          placeholder="Dose 1"
          style={{
            fontSize: normalization(14),
            padding: 8,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#979A9A',
            marginBottom: normalization(13),
            width: normalization(80),
          }}
          value={dose1}
          onChangeText={text => setDose1(text)}
        />
        <Text
          style={{
            fontSize: normalization(25),
            marginHorizontal: normalization(5),
          }}>
          +
        </Text>
        <TextInput
          placeholder="Dose 2"
          style={{
            fontSize: normalization(14),
            padding: 8,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#979A9A',
            marginBottom: normalization(13),
            width: normalization(80),
          }}
          value={dose2}
          onChangeText={text => setDose2(text)}
        />
        <Text
          style={{
            fontSize: normalization(25),
            marginHorizontal: normalization(5),
          }}>
          +
        </Text>
        <TextInput
          placeholder="Dose 3"
          style={{
            fontSize: normalization(14),
            padding: 8,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#979A9A',
            marginBottom: normalization(13),
            width: normalization(80),
          }}
          value={dose3}
          onChangeText={text => setDose3(text)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            // flex: 1,
            padding: normalization(8),
            // marginLeft: normalization(15),
            backgroundColor: COLORS.Prescription_button,
            borderWidth: 1,
            alignItems: 'center',
            //   alignSelf: 'center',
            width: normalization(80),
            marginRight: normalization(15),
            opacity: 1,
            height: normalization(40),
            justifyContent: 'center',
          }}
          onPress={() => {
            setEating(BeforeEating ? 'A.Eat' : 'B.Eat');
            setBeforeEating(!BeforeEating);
          }}>
          {BeforeEating === true ? (
            <Text style={{color: COLORS.white, fontSize: normalization(20)}}>
              B. Eat
            </Text>
          ) : (
            <Text style={{color: COLORS.white, fontSize: normalization(20)}}>
              A. Eat
            </Text>
          )}
        </TouchableOpacity>

        {/* <PrescriptionPickerComponent2 text={'মাস'} /> */}
        <TextInput
          placeholder="Days"
          style={{
            fontSize: normalization(14),
            padding: 8,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#979A9A',
            width: normalization(80),
            alignSelf: 'center',
          }}
          value={days}
          onChangeText={text => setDays(text)}
        />
        <Text>Days</Text>
      </View>
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
    </View>
  );
}
function mapState(state) {
  // const {userDetails} = state.userReducer;
  // const {loggedIn} = state.authReducer;
  return {};
}
const actionCreators = {
  storeMedicine: medicine => dispatch =>
    dispatch({type: userConstants.STORE_MEDICINE, medicine}),
};
export default connect(mapState, actionCreators)(Details);
