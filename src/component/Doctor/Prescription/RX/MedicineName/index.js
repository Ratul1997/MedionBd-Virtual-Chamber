import React from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import normalization from '../../../../../constants/normalization';
import COLORS from '../../../../../constants/COLORS';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VirtualizedView from '../../../../../common/VirtualizedView';
import PrescriptionPicker from '../../../../../common/PrescriptionPicker';
export default function MedicineName(props) {
  const {list, rowNumber, selectedMedicine, setSelectedMedicine} = props;

  const renderItem2 = item => {
    const {brand_name, type, company_name} = item.item;
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
        onPress={() => setSelectedMedicine(item.item)}>
        <View
          style={{
            flexDirection: 'row',
            margin: normalization(3),
            alignItems: 'baseline',
          }}>
          <Text
            style={{fontSize: normalization(13), color: COLORS.textlightBlue}}>
            {brand_name}{' '}
          </Text>
          <Text style={{fontSize: normalization(10), color: COLORS.textGrey}}>
            {type}{' '}
          </Text>
        </View>

        <Text style={{fontSize: normalization(10), textAlign: 'right'}}>
          {company_name}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderItem = ({item}) => {
    const {medicines} = item;
    return (
      <FlatList
        data={medicines}
        style={{width: '100%'}}
        renderItem={renderItem2}
        listKey={index => 'd' + index.toString()}
        keyExtractor={(item2, index) => index}
      />
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
