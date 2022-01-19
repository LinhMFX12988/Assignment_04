import { DEPARTMENTS } from "../../shared/staffs";
import * as ActionTypes from '../../redux/ActionTypes';

export const Departments = (state = DEPARTMENTS, action) => {
  switch (action.type2) {
    case ActionTypes.UPDATE_DEPARTMENT:
      var staff = action.payload;
      return state.map(el => (el.id === staff.department.id ? {...el, numberOfStaff: (el.numberOfStaff + 1)} : el));
    default:
      return state;
  }
};
