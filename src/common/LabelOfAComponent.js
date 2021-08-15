import React from 'react';
import {View, Text} from 'react-native';
import COLORS from '../constants/COLORS';
import normalization from '../constants/normalization';

export default function LabelOfAComponent(props) {
  const {title} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        overflow: 'hidden',
        marginHorizontal: normalization(10),
        marginVertical: normalization(10),
      }}>
      {/* Service Name */}
      <Text
        style={{
          fontSize: normalization(18),
          fontWeight: 'bold',
          fontFamily: COLORS.font_family,
          marginEnd: normalization(5),
        }}>
        {title}
      </Text>

      {/* Straigth Line View */}
      <View
        style={{
          alignSelf: 'center',
          marginEnd: normalization(10),
          borderWidth: 0.5,
          borderColor: COLORS.black,
          width: '76%',
          height: 0,
        }}
      />
    </View>
  );
}
