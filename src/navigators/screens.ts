import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {HomeScreen} from '../views/screens/stacks';

interface INavigationOption {
  name: string;
  component: React.ComponentType<any>;
  options: NativeStackNavigationOptions;
}

const MainScreen: Array<INavigationOption> = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
];

export const Screens = [...MainScreen];
