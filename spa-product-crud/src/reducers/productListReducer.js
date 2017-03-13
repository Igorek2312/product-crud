import Constants from "../refrence/Constants";
import abstractReducer from './abstractReducer'


export default function reducer(state, action) {
    state = abstractReducer(state, action, [Constants.FETCH_PRODUCTS_LIST]);

    if (action.type === `${Constants.FETCH_PRODUCTS_LIST}_FULFILLED`) {
        state.products = action.payload.data;
    }

    return state;
}