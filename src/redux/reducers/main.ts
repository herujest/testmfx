import {AnyAction} from 'redux';
import {TYPES} from '../actionTypes';

export type NavState = {
  routes: Array<any> | any;
};

export interface MainInitialStateType {
  currentRouteName: string;
  currentState: any;
  navState: NavState;
}

const initialState: MainInitialStateType = {
  currentRouteName: '',
  currentState: {},
  navState: {
    routes: <any[]>[],
  },
};

export default (state = initialState, {type, payload}: AnyAction) => {
  switch (type) {
    case TYPES.SET_NAVIGATION_STATE:
      return {
        ...state,
        navState: {
          ...state.navState,
          ...payload,
        },
      };
    case TYPES.SET_CURRENT_ROUTE_NAME:
      const route = state.navState?.routes?.find(
        (i: any) => i.name === payload,
      );
      return {
        ...state,
        currentRouteName: payload,
        currentState: route?.params,
      };

    default:
      return state;
  }
};
