import { actions } from 'react-redux-form';
import * as ActionTypes from './ActionTypes';
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";


export const Staffs = (state = {
        isLoading: true,
        errmess: null,
        staffs: STAFFS
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_STAFF:
            console.log('state:', state.staffs);
            var staff = action.payload; 
            staff.id = state.length;
            staff.image = '/assets/images/alberto.jpg';
            staff.department = DEPARTMENTS.filter(x => x.id === staff.department)[0]
            // return state.concat(staff);
            return {...state, isLoading: false, errmess: null, staff: state.staffs.concat(staff) }
          
        case ActionTypes.STAFF_LOADING:
            return {...state, isLoading: true, errmess: null, staffs: []}

        case ActionTypes.STAFF_FAILED:
            return {...state, isLoading: false, errmess: actions.payload, staffs: []}
           
        default:
            return state;
    }
}