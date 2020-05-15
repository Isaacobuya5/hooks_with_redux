import { actionTypes } from "../actions/actionTypes";

export const filtersReducer = (state = 'all', action) => {
    switch(action.type) {
        case actionTypes.FILTER_TODOS:
            return action.filter;
        default:
            return state;
    }
}