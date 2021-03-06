/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from '../containers/OrderList/reducer';
import userInfo from '../containers/UserInfo/reducer';

export default combineReducers({
  home,
  userInfo,
  router,
});
