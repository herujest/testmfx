import {AnyAction} from 'redux';
import {TYPES} from '../actionTypes';

export type NavState = {
  routes: Array<any> | any;
};

export type CategoryType = {
  id: number;
  name: string;
};

export type ProductType = {
  id: string;
  image: string;
  images: string[];
  name: string;
  price: string;
  off: string;
  rating: number;
  new: boolean;
  isFav: boolean;
  out_of_stock: boolean;
  reviewCount: number;
  sizes: number[];
  description: string;
};

export interface MainInitialStateType {
  currentRouteName: string;
  currentState: any;
  navState: NavState;
  isLoading: boolean;
  error: any | null;
}

const initialState: MainInitialStateType = {
  currentRouteName: '',
  currentState: {},
  navState: {
    routes: <any[]>[],
  },
  isLoading: false,
  error: null,
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
    case TYPES.GET_CATEGORY_START:
    case TYPES.GET_PRODUCT_START:
      return {...state, isLoading: true};
    case TYPES.GET_CATEGORY_FAILED:
    case TYPES.GET_PRODUCT_FAILED:
      return {...state, isLoading: false, error: payload};
    case TYPES.GET_CATEGORY_SUCCESS:
    case TYPES.GET_PRODUCT_SUCCESS:
      return {...state, isLoading: false, error: null};
    default:
      return state;
  }
};
