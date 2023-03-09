// ./src/redux/index.js
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import index from './reducers/index';


const store = createStore(index, composeWithDevTools());

export default store;
