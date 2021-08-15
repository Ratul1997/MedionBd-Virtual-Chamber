import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {convertStringToDate} from '../../../../constants/calcuationdata';
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';
import {connect} from 'react-redux';
import IonIcons from 'react-native-vector-icons/Ionicons';
import ModalComponent from '../../../../common/ModalComponent';
import VideoCall from '../../../VideoCall';
import axios from 'axios';

import RNFetchBlob from 'rn-fetch-blob';
function PatientItem(props) {
  const {item, index, userDetails, navigation} = props;
  const date = convertStringToDate(item.selectedDay);
  const newDate =
    date.getDate() + '/' + date.getDay() + '/' + date.getFullYear();
  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };
  const onStartPrescription = () => {
    let date = new Date();
    const fileUrl = item.url;
    // File URL which we want to download
    let FILE_URL = fileUrl;
    console.log(FILE_URL);
    // Function to get extention of the file url
    let file_ext = getFileExtention(FILE_URL);

    file_ext = '.' + file_ext[0];

    // config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/file_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading file...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        // Alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('File Downloaded Successfully.');
      });
  };
  return (
    <>
      <View
        style={{
          width: '90%',
          height: normalization(80),
          backgroundColor: COLORS.prescription_Notselected,
          alignSelf: 'center',
          marginVertical: normalization(5),
          borderColor: COLORS.slideItemBorder, // if you need
          borderWidth: 1,
          overflow: 'hidden',
          shadowColor: COLORS.slideItemBorder,
          shadowRadius: 10,
          shadowOpacity: 1,
          borderRadius: 10,
          padding: normalization(10),
          flexDirection: 'row',
        }}>
        <View style={{width: '20%', alignSelf: 'center'}}>
          <Image
            source={require('../../../../images/doc.jpg')}
            style={{
              height: normalization(50),
              width: normalization(50),
              borderRadius: 30,
            }}
          />
        </View>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <Text style={{fontSize: normalization(15), fontWeight: 'bold'}}>
            {item.patient_name}
          </Text>
          <Text>Age: {item.patient_age}</Text>
          <Text style={{fontSize: normalization(10)}}>Date: {newDate}</Text>
          <Text style={{fontSize: normalization(10)}}>
            Time: {item.preferredTime}
          </Text>
        </View>
        {item.virtualChamberId && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: COLORS.Prescription_button,
              right: 5,
              bottom: 10,
              padding: normalization(2),
            }}>
            <Text style={{color: 'white', fontSize: normalization(10)}}>
              Virtual Chamber
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            top: 32,
            backgroundColor: COLORS.deepBlueHeader,
            height: normalization(18),
            width: normalization(18),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 18,
          }}
          onPress={onStartPrescription}>
          <IonIcons name="file-tray-full" color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}
function mapState(state) {
  const {userDetails} = state.docAuthReducer;
  return {userDetails};
}
const actionCreators = {};
export default connect(mapState, actionCreators)(PatientItem);
