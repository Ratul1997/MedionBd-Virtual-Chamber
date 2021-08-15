/** 
 name: Header
 function: This is a header component for Home Screen
**/

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

// Colors and Dynamic Screen
import COLORS from '../constants/COLORS';
import normalization from '../constants/normalization';

// Vector Icons
import Entypo from 'react-native-vector-icons/Entypo';

export default function Header(props) {
  /*
  Getting properties from navigation

  function -
  openDrawer: navigate to the back page 
  */
  const {openDrawer} = props;

  const [selectedValue, setSelectedValue] = useState('English');

  return (
    // Header View
    <View style={styles.container}>
      {/* Menu Button */}
      <TouchableOpacity
        style={{marginLeft: normalization(15)}}
        onPress={openDrawer}>
        {/* Menu Icon */}
        <Entypo
          name="menu"
          size={normalization(30)}
          color={COLORS.HPmenuIcon}
        />
      </TouchableOpacity>

      {/* Image of Medion */}
      <Image
        style={{marginBottom: normalization(10)}}
        source={require('../images/asset-1.png')}
      />

      {/* Language Change Button */}
      <TouchableOpacity style={styles.language}>
        <Text style={{color: COLORS.HPmenuIcon}}>{selectedValue}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 8,
    width: '100%',
    backgroundColor: COLORS.white,
  },
  language: {
    marginRight: normalization(15),
    borderWidth: 1,
    borderRadius: 50,
    paddingStart: normalization(10),
    paddingEnd: normalization(10),
    borderColor: COLORS.HPmenuIcon,
  },
});
