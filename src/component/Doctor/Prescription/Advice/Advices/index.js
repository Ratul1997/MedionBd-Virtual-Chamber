import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import COLORS from '../../../../../constants/COLORS';
import normalization from '../../../../../constants/normalization';

export default function Advices(props) {
  const {list, setSelectedAdvice} = props;
  const renderItem = ({item}) => {
   
    return (
      <TouchableOpacity
        style={{
          borderColor: COLORS.deepBlueHeader,
          width: '100%',
          flexDirection: 'row',
          borderBottomWidth: 0.2,
          alignSelf: 'center',
          height: normalization(35),
          //   backgroundColor: 'white',
          padding: normalization(10),
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
        onPress={() => setSelectedAdvice(item.type)}>
        <View
          style={{
            flexDirection: 'row',
            margin: normalization(3),
            alignItems: 'baseline',
          }}>
          <Text
            style={{fontSize: normalization(13), color: COLORS.textlightBlue}}>
            {item.type}{' '}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        height: COLORS.Height * 0.25,
        width: '100%',
      }}>
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        style={{
          marginHorizontal: normalization(20),
          marginVertical: normalization(10),
          borderRadius: 10,
          backgroundColor: 'white',
        }}
        listKey={index => 'd' + index.toString()}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
