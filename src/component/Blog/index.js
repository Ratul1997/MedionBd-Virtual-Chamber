/** 
 name: Blog
 function: This is a component for Blog
**/

import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../constants/COLORS';
import normalization from '../../constants/normalization';
// Custom Components
import Header from '../../common/Header';
import Articles from './Articles';
//Article Topic
import ArticleTopic from '../../helpers/ArticleTopic';
//Article Dummy Data
import ArticlesData from '../../helpers/DummyData/ArticlesData';

export default function Blog(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation} = props;

  /**
   * name: articletopic
   * value: topic of a article (Array of Objects)
   */
  const articletopic = ArticleTopic;

  /**
   * @name: selectedId for State
   * @function: setSelectedId for setting State
   */
  const [selectedId, setSelectedId] = useState(null);

  /**
   * name: openDrawer
   * function: navigation for openDrawer
   */
  const openDrawer = () => {
    navigation.openDrawer();
  };

  /**
   * @name renderItem
   * @function: rendering for article component
   */

  const renderItem = ({item}) => {
    const backgroundColor = item.key === selectedId ? '#E7E7E7' : null;
    return (
      <TouchableOpacity
        style={{
          padding: 20,
          paddingStart: 10,
          paddingEnd: 10,
          borderTopWidth: 0.8,
          borderColor: COLORS.doctorListHeader,
          backgroundColor,
        }}
        onPress={() => setSelectedId(item.key)}>
        <Text
          style={{
            color: COLORS.doctorListHeader,
            fontSize: normalization(15),
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      <View style={{flex: 0.1}}>
        <Header openDrawer={openDrawer} />
      </View>

      <View style={{flex: 0.9, alignItems: 'center'}}>
        {/* ArticleTopic FlatList */}
        <FlatList
          data={articletopic}
          horizontal={true}
          contentContainerStyle={{height: normalization(55)}}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
        {/* Custom Article */}
        <Articles article={ArticlesData} navigation={navigation} />
      </View>
    </View>
  );
}
