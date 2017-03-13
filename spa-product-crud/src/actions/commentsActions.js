import Constants from '../refrence/Constants'
import axios from 'axios'
import ApiEnpoints from '../refrence/ApiEnpoints';

export function fetchCommentsList(url) {
    return {
        type: Constants.FETCH_COMMENTS_LIST,
        payload: axios(url)
    }
}

export function postComment(comment) {
    return {
        type: Constants.POST_COMMENT,
        payload: axios({
            url: ApiEnpoints.COMMENTS,
            method: 'post',
            data: comment
        })
    }
}

export function makeCommentEditable(commentId, editable) {
    return {
        type: Constants.MAKE_COMMENT_EDITABLE,
        payload: {
            commentId, editable
        }
    }
}

export function editComment(url, comment) {
    return {
        type: Constants.EDIT_COMMENT,
        payload: axios({
            url,
            method: 'patch',
            data: comment
        })
    }
}

export function deleteComment(url) {
    return {
        type: Constants.DELETE_COMMENT,
        payload: axios({
            url,
            method: 'delete'
        })
    }
}