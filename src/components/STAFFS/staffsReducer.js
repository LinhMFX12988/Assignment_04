import { DEPARTMENTS, STAFFS } from "../../shared/staffs";
import * as ActionTypes from '../../redux/ActionTypes';

export const Staffs = (state = {
        isLoading: true,
        errMess: null,
        staffs: STAFFS
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_STAFF:
            var staff = action.payload;
            staff.id = state.staffs.length;
            staff.image = '/assets/images/alberto.jpg';
            staff.department = DEPARTMENTS.filter(x => x.id === staff.department)[0]
            return {...state, isLoading: false, errMess: null, staffs: state.staffs.concat(staff)};

        case ActionTypes.STAFF_LOADING:
            return {...state, isLoading: true, errMess: null, staff: []};

         case ActionTypes.STAFF_FAILED:
            return {...state, isLoading: false, errMess: action.payload, staff: []};
    
        default:    
            return state;
    }
}