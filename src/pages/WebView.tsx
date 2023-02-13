import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { WebView  } from 'react-native-webview';
import { StackParamList } from '../routes';

type WebViewScreenRouteProp = RouteProp<StackParamList, 'WebView'>;
type WebViewScreenNavigationProp = StackNavigationProp<StackParamList, 'WebView'>;

type Props = {
  route: WebViewScreenRouteProp;
  navigation: WebViewScreenNavigationProp;
};

export default ({ route }:Props) =>  (
    <View
      style={{flex: 1, overflow: 'hidden'}}
    >
      <WebView
        androidHardwareAccelerationDisabled={true}
        source={{ uri: route.params.url }}
      />
    </View>
  );

