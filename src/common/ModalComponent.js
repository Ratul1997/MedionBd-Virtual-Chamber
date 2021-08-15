/** 
 name: Modal
 function: This is a modal component 
**/

import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../constants/COLORS';
import normalization from '../constants/normalization';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

export default function ModalComponent(props) {
  /*

  Getting properties from navigation

  variables-
  modalVisible : modal visible or not (string)
  children: children in the routing component (React Children)

  function-
  onPressCloseModal: for closing modal from routing page
  */

  const {modalVisible, onPressCloseModal, children, color, closeCross} = props;
  return (
    // Modal View
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      presentationStyle="overFullScreen">
      {/* Background of Modal */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        {/* Main Modal View */}
        <View
          style={{
            width: '95%',
            backgroundColor: color ? 'transparent' : '#fff',
            borderRadius: 25,
            padding: 25,
            elevation: 100,
          }}>
          {!closeCross && (
            <TouchableOpacity onPress={onPressCloseModal}>
              <Feather
                style={{alignSelf: 'flex-end'}}
                name="x"
                size={normalization(27)}
                color={COLORS.doctorListHeader}
              />
            </TouchableOpacity>
          )}

          {/* Children Component */}
          {children}
        </View>
      </View>
    </Modal>
  );
}
