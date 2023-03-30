import React from 'react';
import {StatusBar, View} from 'react-native';
import {IContainer} from '.';
import Base from './basic.style';

const Container = ({children, style, statusBar, ...props}: IContainer) => {
  const styles = [Base['Basic.Container'], style];
  if (statusBar?.translucent) {
    styles.push(Base['Translucent.Container']);
  }
  styles.push(style);
  return (
    <View {...props} style={styles}>
      <StatusBar {...statusBar} />
      {children}
    </View>
  );
};

export default Container;
