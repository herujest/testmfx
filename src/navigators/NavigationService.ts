import {CommonActions, StackActions} from '@react-navigation/native';

let navigator: any;
const setTopLevelNavigator = (navigatorRef: any) => {
  navigator = navigatorRef;
};

function navigate(routeName: string, params?: any, key: string = '') {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
      key,
    }),
  );
}

function navigateBack() {
  navigator.dispatch(StackActions.pop(1));
}

function navigateAndReset(routeName: string, params?: any, routes?: any) {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      key: '',
      routes: routes
        ? routes
        : [
            {
              name: routeName,
              params: params,
            },
          ],
    }),
  );
}

export default {
  setTopLevelNavigator,
  navigate,
  navigateBack,
  navigateAndReset,
};
