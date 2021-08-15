/** 
 name: AllPurposeHeader
 function: This is a header component for all navigation screen
**/

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Colors
import COLORS from '../constants/COLORS';
// Dynamic Screen
import normalization from '../constants/normalization';

// Vector Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Header} from 'react-native/Libraries/NewAppScreen';

export default function AllPurposeHeader(props) {
  /*

  Getting properties from navigation

  variables-
  title : title of  the Header (string)
  filter: filter icon visible or not (bool)
  
  function-
  onBackNavigate: navigate to the back page 
  */
  const {title, onBackNavigate, filter} = props;

  return (
    // Header View
    <View
      style={{
        height: normalization(50),
        backgroundColor: COLORS.doctorListHeader,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {/* Back Button Icon */}
      <TouchableOpacity
        onPress={onBackNavigate}
        style={{padding: normalization(15)}}>
        {/* Back Button Icon */}
        <AntDesign
          name="arrowleft"
          size={normalization(23)}
          color={COLORS.white}
        />
      </TouchableOpacity>

      {/* Title of header */}
      <Text style={{fontSize: normalization(20), color: COLORS.white, flex: 1}}>
        {title}
      </Text>

      {/* Filter Button  */}
      {filter && (
        <TouchableOpacity style={{padding: normalization(15)}}>
          {/* Filter Icon */}
          <Feather
            name="filter"
            size={normalization(22)}
            color={COLORS.white}
            style={{transform: [{rotateY: '180deg'}]}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
