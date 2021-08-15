/** 
 name: ArticleComponent
 function: This is a component for a Article
**/

import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
//Colors And Dynamic Screen
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';

// Vector Icons
import Entypo from 'react-native-vector-icons/Entypo';

export default function ArticleComponent(props) {
  /*

  Getting properties from navigation

  variables-
  item : item of an Articles (Object)
  
  function-
  navigation: navigation properties
  */
  const {item, navigation} = props;

  /*
  name: onNavigate
  function: for Navigate to BlogDetails Page
  */
  const onNavigate = () => {
    navigation.navigate('BlogDetails');
  };

  return (
    // TouchableOpacity View
    <TouchableOpacity style={styles.articles} onPress={onNavigate}>
      {/* Image for an Article */}
      <Image
        style={{
          width: '100%',
          height: normalization(210),
          borderRadius: 20,
          borderColor: COLORS.doctorListHeader,
        }}
        source={item.img}
      />

      {/* Article Card */}
      <View style={styles.childCard}>
        <Text style={styles.titleStyle}>{item.title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* Date of Article Item */}
          <Text style={styles.dateStyle}>{item.date}</Text>
          {/* Share Button */}
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.doctorListHeader,
              padding: 3,
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: 50,
              paddingStart: normalization(5),
              paddingEnd: normalization(15),
            }}>
            {/* Share Icon */}
            <Entypo name="share" size={normalization(20)} color="#fff" />
            <Text style={{color: '#fff', fontSize: normalization(14)}}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  articles: {
    width: COLORS.Width * 0.9,
    elevation: 10,
    borderRadius: 20,
    margin: normalization(13),
    alignSelf: 'center',
  },
  titleStyle: {
    color: '#19769F',
    fontSize: normalization(17),
    fontWeight: 'bold',
    marginLeft: normalization(13),
  },
  dateStyle: {
    color: '#444547',
    fontSize: normalization(14),
    marginLeft: normalization(13),
  },
  childCard: {
    width: '90%',
    backgroundColor: '#fff',
    opacity: 0.98,
    elevation: 6,
    position: 'absolute',
    bottom: normalization(7),
    alignSelf: 'center',
    padding: normalization(7),
    borderRadius: 15,
    borderColor: COLORS.doctorListHeader,
    borderWidth: 0.8,
  },
  fadingContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: COLORS.DoctorAppnt_Background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
