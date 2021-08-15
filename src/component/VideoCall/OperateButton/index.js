import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const BtnEndCall = () => (
  <MaterialIcon name="call-end" size={normalization(25)} color="white" />
);
const BtnReceiveCall = () => (
  <MaterialIcon name="call" size={normalization(25)} color="white" />
);
const BtnUnMute = () => (
  <Ionicons name="mic" size={normalization(25)} color="white" />
);
const BtnSpeaker = () => (
  <Ionicons name="volume-medium-sharp" size={normalization(25)} color="white" />
);
const BtnSwitchCamera = () => (
  <MaterialIcon
    name="flip-camera-android"
    size={normalization(15)}
    color="white"
  />
);
const EnableCamera = () => (
  <Ionicons name="camera" size={normalization(15)} color="white" />
);
const DisableCamera = () => (
  <Feather name="camera-off" size={normalization(15)} color="white" />
);
const BtnMute = () => (
  <Ionicons name="mic-off" size={normalization(25)} color="white" />
);
const BtnHeadSpeaker = () => (
  <Ionicons name="volume-mute" size={normalization(25)} color="white" />
);

export default function OperateButton(props) {
  const isCalling = false;

  const {
    endCall,
    switchCamera,
    toggleVideo,
    showVideo,
    isSpeak,
    toggleSpeakerPhone,
    isMute,
    toggleAllRemoteAudioStreams,
  } = props;

  const [showEndCall, setShowEndCall] = useState(false);

  const toggleEndCall = () => {
    setShowEndCall(!showEndCall);
  };
  return (
    <>
      <TouchableOpacity
        style={{
          height: normalization(30),
          width: normalization(30),
          borderRadius: 30,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: normalization(50),
          top: normalization(15),
        }}
        onPress={switchCamera}>
        <BtnSwitchCamera />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: normalization(30),
          width: normalization(30),
          borderRadius: 30,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          top: normalization(15),
          position: 'absolute',
          right: normalization(15),
        }}
        onPress={toggleVideo}>
        {showVideo ? <DisableCamera /> : <EnableCamera />}
      </TouchableOpacity>
      {showEndCall && (
        <View
          style={{
            height: normalization(100),
            width: normalization(150),
            borderRadius: 10,
            position: 'absolute',
            backgroundColor: '#484848',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 4,
            borderColor: 'black',
            top: HEIGHT / 3,
            left: WIDTH / 3.5,
          }}>
          <TouchableOpacity
            style={{
              height: normalization(50),
              width: normalization(150),
              borderRadius: 10,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 4,
              borderColor: 'black',
            }}
            onPress={endCall}>
            <Text style={{fontSize: normalization(15), color: 'white'}}>
              Leave Call
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: normalization(50),
              width: normalization(150),
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={toggleEndCall}>
            <Text style={{fontSize: normalization(15), color: 'white'}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: normalization(20),
          justifyContent: 'space-between',
          alignItems: 'center',
          //   backgroundColor:'red',
          width: '70%',
          alignSelf: 'center',
        }}>
        {isCalling ? (
          <TouchableOpacity
            style={{
              height: normalization(50),
              width: normalization(50),
              borderRadius: 30,
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <BtnReceiveCall />
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={{
                height: normalization(50),
                width: normalization(50),
                borderRadius: 50,
                backgroundColor: 'gray',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={toggleAllRemoteAudioStreams}>
              {!isMute ? <BtnUnMute /> : <BtnMute />}
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity
          style={{
            height: normalization(50),
            width: normalization(50),
            borderRadius: 50,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={toggleEndCall}>
          <BtnEndCall />
        </TouchableOpacity>
      </View>
    </>
  );
}
