/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useReducer} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import AppNavigation from './src/AppNavigation';
import SplashScreen from './src/SplashScreen';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistStore, persistReducer} from 'redux-persist';
import {useNavigation} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store, pReducer} from './src/reducers';
import ModalComponent from './src/common/ModalComponent';
import normalization from './src/constants/normalization';
import COLORS from './src/constants/COLORS';

const App = props => {
  const [isLoad, setIsload] = useState(false);
  const [channelName, setChannelName] = useState();
  const [isModal, setIsModal] = useState(false);
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     // alert(remoteMessage.data.content);
  //     setIsModal(true);
  //     setChannelName(remoteMessage.data.type);
  //     console.log(remoteMessage);
  //   });

  //   return unsubscribe;
  // }, []);

  // // const navigation = useNavigation();
  // console.log(useNavigation());
  // const onJoinCall = () => {
  //   setIsModal(false);
  //   // navigation.navigate('Video Call', {
  //   //   channel: channelName,
  //   //   type: 'Patient',
  //   // });
  // };
  return (
    <>
      {/* <ModalComponent modalVisible={isModal} closeCross={true}>
        <View
          style={{
            height: normalization(150),
            width: '80%',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text>Doctor has started meeting</Text>
          <TouchableOpacity
            onPress={onJoinCall}
            style={{
              height: normalization(30),
              width: normalization(50),
              backgroundColor: COLORS.deepBlueHeader,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{color: 'white'}}>Join</Text>
          </TouchableOpacity>
        </View>
      </ModalComponent> */}
      <MenuProvider>
        <Provider store={store}>
          <PersistGate persistor={persistStore(store)}>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </MenuProvider>
    </>
  );
};

export default App;