let initialState = {
    pending: false,
    fulfilled: false,
    error: null
};

export default function (state = initialState, action, actionTypes) {
    let currentActionType = action.type
        .replace('_PENDING', '')
        .replace('_FULFILLED', '')
        .replace('_REJECTED', '');

    if (actionTypes.indexOf(currentActionType) === -1) return state;

    if (action.type.endsWith('_PENDING')) {
        return {...state, pending: true, fulfilled: false, error: null}
    } else if (action.type.endsWith('_FULFILLED')) {
        return {...state, fulfilled: true, pending: false}
    } else if (action.type.endsWith('_REJECTED')) {
        return {...state, error: action.payload, pending: false, fulfilled: false}
    }
}

/*class AbstractReducer {

 static reduce(state, action) {
 if (action.type.endsWith('_PENDING')) {
 return {...state, pending: true, fulfilled: false, error: null}
 } else if (action.type.endsWith('_FULFILLED')) {
 return {...state, fulfilled: true, pending: false}
 } else if (action.type.endsWith('_REJECTED')) {
 return {...state, error: action.payload, pending: false, fulfilled: false}
 }

 return state;
 }

 }

 export default new AbstractReducer();*/
/* switch (action.type) {
 case `${actionType}_PENDING`: {
 return {...state, pending: true, fulfilled: false, error: null}
 }
 case `${actionType}_FULFILLED`: {
 return {...state, fulfilled: true, pending: false}
 }
 case `${actionType}_REJECTED`: {
 return {...state, error: action.payload, pending: false}
 }
 default: {
 return state;
 }
 }*/


