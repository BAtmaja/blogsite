import { createStore, combineReducers } from 'redux';
import alert from './Alert/alert';
import auth from './Auth/authentication';
import {paginationReducer} from './Pagination/pagination.reducer';
import Blog from './Blog/blog.reducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    Blog,
    alert,
    auth,
    pagination: paginationReducer
});