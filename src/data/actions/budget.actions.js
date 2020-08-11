import {
    BUDGET_GET_REQUEST,
    BUDGET_GET_SUCCESS,
    BUDGET_GET_FAILURE
} from "../constants";

export const fetchBudget = id => {
    return async dispatch => {
        dispatch({
            type: BUDGET_GET_REQUEST
        })

        try {
            const response = await fetchBudget(id);
            const data = response.json();
            dispatch({
                type: BUDGET_GET_SUCCESS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: BUDGET_GET_FAILURE
            })
        }
    }
}
