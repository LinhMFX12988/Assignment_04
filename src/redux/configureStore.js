import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Staffs } from '../components/STAFFS/staffsReducer';
import { Departments } from '../components/DEPARTMENTS/departmentsReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departments: Departments
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}