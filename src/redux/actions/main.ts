import {TYPES} from '../actionTypes';

export const setNavigationState = (name: string) => ({
  type: TYPES.SET_NAVIGATION_STATE,
  payload: name,
});

export const setCurrentRouteName = (name: any) => ({
  type: TYPES.SET_CURRENT_ROUTE_NAME,
  payload: name,
});
