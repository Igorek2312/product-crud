import Constants from "../refrence/Constants";
import abstractReducer from './abstractReducer'

let initialState = {
    pending: false,
    fulfilled: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case `${Constants.FETCH_COMMENTS_LIST}_PENDING`: {
            return {...state, pending: true, fulfilled: false, error: null}
        }
        case `${Constants.FETCH_COMMENTS_LIST}_FULFILLED`: {
            return {...state, comments: action.payload.data, fulfilled: true, pending: false}
        }
        case `${Constants.FETCH_COMMENTS_LIST}_REJECTED`: {
            return {...state, error: action.payload, pending: false}
        }

        case `${Constants.POST_COMMENT}_FULFILLED`: {
            let newState = {...state};
            newState.comments._embedded.comments.unshift(action.payload.data);
            return newState
        }
        case `${Constants.POST_COMMENT}_REJECTED`: {
            return {...state, error: action.payload, pending: false, fulfilled: false}
        }

        case `${Constants.DELETE_COMMENT}_FULFILLED`: {
            let newState = {...state};
            let index = newState.comments._embedded.comments.findIndex(
                (comment) => comment._links.self.href === action.payload.config.url
            );
            newState.comments._embedded.comments.splice(index, 1);

            return newState;
        }
        case `${Constants.DELETE_COMMENT}_REJECTED`: {
            return {...state, error: action.payload, pending: false, fulfilled: false}
        }

        case Constants.MAKE_COMMENT_EDITABLE: {
            let newState = {...state};
            let comment = newState.comments._embedded.comments.find(
                (comment) => comment.id === action.payload.commentId
            );
            comment.editable = action.payload.editable;
            return newState;
        }

        case `${Constants.EDIT_COMMENT}_FULFILLED`: {
            let newState = {...state};
            let comment = newState.comments._embedded.comments.find(
                (comment) => comment._links.self.href === action.payload.config.url
            );
            comment.content = action.payload.data.content;
            comment.date = action.payload.data.date;
            return newState;
        }
        case `${Constants.EDIT_COMMENT}_REJECTED`: {
            return {...state, error: action.payload, pending: false, fulfilled: false}
        }
    }
    return state;
}