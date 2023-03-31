import {Dispatch} from 'redux';
import {TYPES} from '../actionTypes';
import Endpoints from '_services/API/endpoint';
import {http} from '_services/API/http';
import {CategoryType, ProductType} from '../reducers/main';

export const setNavigationState = (name: string) => ({
  type: TYPES.SET_NAVIGATION_STATE,
  payload: name,
});

export const setCurrentRouteName = (name: any) => ({
  type: TYPES.SET_CURRENT_ROUTE_NAME,
  payload: name,
});

export const getCategory =
  () =>
  (dispatch: Dispatch): Promise<CategoryType[]> => {
    const path = Endpoints.category;
    dispatch({type: TYPES.GET_CATEGORY_START});
    return new Promise((resolve, reject) => {
      http
        .get(path)
        .then(res => {
          const responseData = res?.data;
          if (responseData) {
            dispatch({type: TYPES.GET_CATEGORY_SUCCESS, payload: responseData});
            resolve(responseData || []);
          }
        })
        .catch(err => {
          dispatch({type: TYPES.GET_CATEGORY_FAILED, payload: err});
          reject(err);
        });
    });
  };

export const getProduct =
  () =>
  (dispatch: Dispatch): Promise<ProductType[]> => {
    const path = Endpoints.product;
    dispatch({type: TYPES.GET_PRODUCT_START});
    return new Promise((resolve, reject) => {
      http
        .get(path)
        .then(res => {
          const responseData = res?.data;
          if (responseData) {
            dispatch({type: TYPES.GET_PRODUCT_SUCCESS, payload: responseData});
            resolve(responseData || []);
          }
        })
        .catch(err => {
          dispatch({type: TYPES.GET_PRODUCT_FAILED, payload: err});
          reject(err);
        });
    });
  };
