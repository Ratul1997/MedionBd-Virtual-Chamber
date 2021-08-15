/** 
 name: InputField
 function: This is a component for Custom TextInput
**/
import * as React from 'react';
import {View, TextInput, Dimensions} from 'react-native';
//Colors And Dynamic Screen

//Vector Icons
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS from '../constants/COLORS';
import normalization from '../constants/normalization';

export default function InputField(props) {
  /**
   * Getting properties from navigation
   *
   * variables:
   * text: PlaceHolderText (string)
   * iconName: iconName (string)
   */
  const {text, iconName, onChangeText, value} = props;
  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.9,
        height: normalization(30),
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 10,
        marginTop: normalization(8),
        marginBottom: normalization(5),
        alignItems: 'center',
        flexDirection: 'row',
        paddingStart: normalization(10),
      }}>
      <EvilIcons name={iconName} size={25} color="#063777" onPress={() => {}} />
      <TextInput
        style={{padding: normalization(5), fontSize: 16}}
        placeholder={text}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}