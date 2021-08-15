import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import normalization from '../constants/normalization';
import COLORS from '../constants/COLORS';

export default function PrescriptionPicker({text, setDose}) {
  //   const [medicineAmount, setMedicineAmount] = useState(text);
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.textGrey,
        paddingVertical: normalization(5),
        marginHorizontal: normalization(15),
        marginVertical: normalization(10),
        backgroundColor: COLORS.white,
        elevation: 3,
      }}>
      <Text
        style={{
          flex: 0.7,
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '600',
        }}>
        {text}
      </Text>
      <View style={{flex: 0.3, justifyContent: 'center'}}>
        <AntDesign onPress={() => setDose(text + 1)} name="caretup" size={10} />
        <AntDesign
          onPress={() => setDose(text - 1)}
          name="caretdown"
          size={10}
        />
      </View>
    </View>
  );
}
