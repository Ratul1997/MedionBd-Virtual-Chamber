import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../../common/Header';
import VirtualizedView from '../../../common/VirtualizedView';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
import {connect} from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';
import PatientProfileOptions from '../../../helpers/PatientProfileOptions';
import DoctorProfileOptions from '../../../helpers/DoctorProfileOptions';
function HomePageDoc(props) {
  const {navigation, userDetails} = props;
  /**
   * @name: openDrawer
   * @function: for opening drawer
   */
  const openDrawer = () => {
    navigation.openDrawer();
  };

  /**
   * @name: onClickForNavigate
   * @function: navigate To patientStack according to individual Item
   */
  const onClickForNavigate = navTo => () => {
    navigation.navigate(navTo);
  };

  const renderItem = ({item}) => {
    const borderBottomWidth = item.key === '8' ? 0 : 0.8;
    return (
      <TouchableOpacity
        style={{
          padding: normalization(15),
          borderBottomWidth,
          borderColor: '#D7DBE0',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={onClickForNavigate(item.navTo)}>
        <Text
          style={{
            fontSize: normalization(17),
            color: COLORS.deepBlueHeader,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <AntDesign name="right" size={20} color={COLORS.deepBlueHeader} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <Header openDrawer={openDrawer} />
      </View>
      <VirtualizedView style={{flex: 0.9}}>
        <Image
          source={require('../../../images/doc.jpg')}
          style={{
            borderRadius: normalization(50),
            borderWidth: 2,
            borderColor: COLORS.white,
            alignSelf: 'center',
            justifyContent: 'center',
            height: normalization(100),
            width: normalization(100),
            marginVertical: normalization(10),
          }}
        />
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: normalization(18),
              color: COLORS.deepBlueHeader,
              fontWeight: 'bold',
            }}>
            {userDetails.doctor_name}
          </Text>
          <Text>{userDetails.doctor_speciality}</Text>

          <Text
            style={{
              fontSize: normalization(16),
              color: COLORS.deepBlueHeader,
            }}>
            {userDetails.doctor_institution}
          </Text>

          <Text
            style={{
              fontSize: normalization(16),
              color: COLORS.deepBlueHeader,
            }}>
            Specialized Category: {userDetails.doctor_specialization_catagory}
          </Text>

          <Text
            style={{fontSize: normalization(16), color: COLORS.deepBlueHeader}}>
            Membership Id: {userDetails.idonlinedoctors}
          </Text>
        </View>
        <View
          style={{
            elevation: 4,
            backgroundColor: COLORS.white,
            margin: normalization(15),
            borderRadius: 15,
            padding: normalization(15),
          }}>
          <FlatList data={DoctorProfileOptions} renderItem={renderItem} />
        </View>
      </VirtualizedView>
    </View>
  );
}
function mapState(state) {
  const {userDetails} = state.docAuthReducer;
  const {loggedIn} = state.authReducer;
  return {userDetails, loggedIn};
}
const actionCreators = {};
export default connect(mapState, actionCreators)(HomePageDoc);
