import Constants from "../refrence/Constants";
import abstractReducer from './abstractReducer'

export default function reducer(state, action) {
    state =abstractReducer(state, action, [Constants.FETCH_PRODUCT_DETAILS]);

    if (action.type === `${Constants.FETCH_PRODUCT_DETAILS}_FULFILLED`) {
        state.product = action.payload.data;
    }

   /* switch (action.type) {
        case `${Constants.FETCH_PRODUCT_DETAILS}_PENDING`: {
            return {...state, pending: true, fulfilled: false, error: null}
        }
        case `${Constants.FETCH_PRODUCT_DETAILS}_FULFILLED`: {
            return {...state, product: action.payload.data, fulfilled: true, pending: false}
        }
        case `${Constants.FETCH_PRODUCT_DETAILS}_REJECTED`: {
            return {...state, error: action.payload, pending: false}
        }
    }*/

    return state;
}