import React from 'react';
import {Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {IContent} from '.';

const Content = ({
  children,
  contentContainerStyle,
  keyboardShouldPersistTaps,
  showsVerticalScrollIndicator,
  ...props
}: IContent) => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      automaticallyAdjustContentInsets={false}
      contentContainerStyle={[{}, contentContainerStyle]}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      enableAutomaticScroll={Platform.OS === 'ios'}
      {...props}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default Content;
