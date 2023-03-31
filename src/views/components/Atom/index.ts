import {StyleProp, ViewStyle} from 'react-native/types';

export interface IconSet {
  icons: Array<any>;
}

export type IconName =
  | 'love'
  | 'left'
  | 'filter'
  | 'star'
  | 'star-filled'
  | 'star-half';

export interface IconMap {
  name: string;
  paths: Array<string>;
}

export interface SvgIconProps {
  iconSet: IconSet;
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number; // some icon might have different padding, use this to offset it
  width?: number;
  height?: number;
  viewBoxWidthPercentage?: number;
  viewBoxHeightPercentage?: number;
  style?: StyleProp<ViewStyle>;
}
export interface IIcon extends Omit<SvgIconProps, 'iconSet' | 'name' | 'size'> {
  name: IconName;
  color?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number;
}
