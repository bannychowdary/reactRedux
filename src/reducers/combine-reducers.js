import React from 'react';
import { combineReducers  } from 'redux';
import productsData from './reducer-products';
import friendsData from './reducer-friends';

const allReducers = combineReducers({
    products: productsData,
    friends: friendsData

})

export default allReducers
