/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { union, isEmpty } from 'lodash';

import { FETCH_ROOMS } from './actions';

//----------------------------------------------------
// Centralized application state
// For more information visit http://redux.js.org/
const initialState = {
  //----------------------------------------------------
  // Rooms, with info of a specific day
  rooms: {}
};


//-------------------------------------------------------------------------------------
// Reducers: Here is the central meeting point for all reducers
//
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const reducers = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {

    case FETCH_ROOMS: {
      const data = action.payload.data.sort((a, b) => a.name > b.name);

      return { ...state, rooms: action.payload.data }

      return newState;
    }

    default:
      return state;
  }
};
const store = createStoreWithMiddleware(reducers);

export default store;
