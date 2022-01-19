import * as ActionTypes from './ActionTypes';
import { STAFFS } from "../shared/staffs";

export const addStaff = (name, doB, startDate, department, salaryScale, annualLeave, overTime) => ({
            type: ActionTypes.ADD_STAFF,
            type1: ActionTypes.UPDATE_DEPARTMENT,
            payload: {
                name: name,
                doB: doB,
                startDate: startDate,
                department: department,
                salaryScale: salaryScale,
                annualLeave: annualLeave,
                overTime: overTime
            }
});

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    setTimeout(() => {
        dispatch(addStaff(STAFFS))
    }, 2000)
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFF_LOADING
});

export const staffsErrMess = (errmess) => ({
    type: ActionTypes.STAFF_FAILED,
    payload: errmess
});