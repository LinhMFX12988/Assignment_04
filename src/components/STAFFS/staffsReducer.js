import { STAFFS } from '../../shared/staffs' ;
import { DEPARTMENTS } from "../../shared/staffs";
import * as ActionTypes from '../../redux/ActionTypes';

export const Staffs = (state = STAFFS, action) => {
    switch(action.type1) {
        case ActionTypes.ADD_STAFF:
            var staff = action.payload;
            staff.id = state.length;
            staff.image = '/assets/images/alberto.jpg';
            staff.department = DEPARTMENTS.filter(x => x.id === staff.department)[0]
            return state.concat(staff);
        default:    
            return state;
    }
}