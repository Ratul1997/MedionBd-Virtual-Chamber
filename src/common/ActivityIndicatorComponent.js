import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default function ActivityIndicatorComponent({size, color}) {
  return (
    <View>
      <ActivityIndicator size={size} color={color ? color : '#0000ff'} />
    </View>
  );
}
