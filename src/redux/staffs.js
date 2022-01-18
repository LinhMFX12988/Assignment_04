import { actions } from 'react-redux-form';
import * as ActionTypes from './ActionTypes';

export const Staffs = (state = {
        isLoading: true,
        errmess: null,
        staffs: []
    }, action) => {
    switch(action.type) {

        case ActionTypes.RENDER_STAFF:
            return {...state, isLoading: false, errmess: null, staffs: action.payload}
            
        case ActionTypes.STAFF_LOADING:
            return {...state, isLoading: true, errmess: null, staffs: []}

        case ActionTypes.STAFF_FAILED:
            return {...state, isLoading: false, errmess: actions.payload, staffs: []}

        case ActionTypes.ADD_STAFF:
            console.log('state:', action.payload);
            var staff = action.payload; 
            staff.id = state.length;
            staff.image = '/assets/images/alberto.jpg';
            staff.department = DEPARTMENTS.filter(x => x.id === staff.department)[0]
            return state.concat(staff);
            
        default:
            return state;
    }
}