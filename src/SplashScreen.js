import React, {useRef, useEffect, useState} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  Image,
} from 'react-native';
import normalization from './constants/normalization';

const SplashScreen = props => {
  const {isLoaded, children} = props;

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={true}
      logoImage={require('../src/images/asset-1.png')}
      backgroundColor={'#262626'}
      logoHeight={150}
      logoWidth={150}>
      {children}
    </AnimatedSplash>
  );
};

export default SplashScreen;
