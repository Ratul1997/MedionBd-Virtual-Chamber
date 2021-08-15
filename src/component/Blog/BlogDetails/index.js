/** 
 name: BlogDetails
 function: This is a  component for BlogDetails
**/

import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
// Vector Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
//ScrollView Using FlatList
import VirtualizedView from '../../../common/VirtualizedView';

export default function BlogDetails(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation} = props;

  /*
  name: onBack
  function: navigate Back
  */
  const onBack = () => {
    navigation.goBack();
  };

  return (
    // Bloag Deatils View
    <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>
      {/* ScrollView */}
      <VirtualizedView>
        <View style={{backgroundColor: '#fff', height: '100%'}}>
          {/* Image of a Blog */}
          <Image
            style={{width: '100%', height: normalization(150)}}
            source={require('../../../images/sliderImage.png')}
          />
          <Text style={styles.titleStyle}>COVID-19 এর জন্ম চীনের ল্যাবে!</Text>
          <Text style={styles.dateStyle}>20 November, 2020</Text>

          {/* View for Bookmark and Share */}
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              margin: normalization(15),
            }}>
            {/* BookMark Button */}
            <TouchableOpacity
              style={{
                marginRight: normalization(7),
                borderColor: '#19769F',
                borderWidth: 2,
                padding: normalization(13),
                borderRadius: 20,
                paddingTop: normalization(4),
                paddingBottom: normalization(2),
              }}>
              <Text style={{color: '#19769F'}}>Bookmark</Text>
            </TouchableOpacity>
            {/* Share Button */}
            <TouchableOpacity
              style={{
                marginRight: normalization(7),
                borderColor: '#19769F',
                borderWidth: 2,
                padding: normalization(13),
                borderRadius: 20,
                paddingTop: normalization(4),
                paddingBottom: normalization(4),
              }}>
              <Text style={{color: '#19769F'}}>Share</Text>
            </TouchableOpacity>
          </View>

          {/* Article Text */}
          <Text style={styles.articleStyle}>
            নোবেলজয়ী ফরাসী ভাইরোলজিস্ট লুক মন্টেনিয়ার সম্প্রতি এক সাক্ষাৎকারে
            এমন টি ই দাবী করেছেন। তার মতে,কোভিড-১৯ ল্যাবেই তৈরি হয়েছে। AIDS
            প্রতিষেধক ভ্যাকসিন তৈরি করতে গিয়ে এই ভাইরাসের জন্ম। HIV- র গঠনের
            সাথে নোভেল করোনার প্রচুর মিল পাওয়া যায়। ম্যালেরিয়া জীবানুর সাথেও এর
            মিল পাওয়া যায়। যা বায়ো ইঞ্জিনিয়ারিং এই তৈরি সম্ভব। The Epoch Times
            এর দেয়া তথ্যমতে,করোনার জন্মবৃত্তান্ত ধামাচাপা দিতে জেনে বুঝে ভুল
            তথ্য প্রকাশ করছে চীন যাতে ভাইরাসের উৎস কেউ খুঁজে না পায়!
          </Text>
        </View>

        {/* Close Button */}
        <TouchableOpacity
          style={{margin: normalization(13), position: 'absolute'}}
          onPress={onBack}>
          {/* Close Icon */}
          <AntDesign name="close" size={normalization(25)} />
        </TouchableOpacity>
      </VirtualizedView>
    </View>
  );
}
const styles = StyleSheet.create({
  titleStyle: {
    flex: 1,
    color: '#19769F',
    fontSize: normalization(20),
    fontWeight: 'bold',
    margin: normalization(17),
    marginBottom: 0,
  },
  dateStyle: {
    color: '#444547',
    fontSize: normalization(15),
    marginLeft: normalization(17),
    marginBottom: normalization(3),
  },
  articleStyle: {
    color: '#444547',
    fontSize: normalization(17),
    marginHorizontal: normalization(14),
    marginBottom: normalization(23),
  },
});
