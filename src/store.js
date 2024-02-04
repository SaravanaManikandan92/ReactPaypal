import { configureStore  } from '@reduxjs/toolkit';
import {paypalReducer} from './paypal/reducer'
export default configureStore({reducer:{paypalReducer}});