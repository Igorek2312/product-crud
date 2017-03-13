import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchCommentsList} from "../../actions/commentsActions";
import CommentListItem from "./CommentListItem";

function mapStateToProps(state) {
    return {
        productState: state.productDetailsReducer,
        commentsState: state.commentsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

class Comments extends Component {

    componentWillReceiveProps(props) {
        let productState = props.productState;
        let commentsState = props.commentsState;
        if (productState.fulfilled && !commentsState.pending && !commentsState.fulfilled) {
            let commentsUrl = productState.product._links['sorted-comments'].href;
            this.props.dispatch(fetchCommentsList(commentsUrl));
        }
    }

    render() {
        let commentsState = this.props.commentsState;
        if (commentsState.fulfilled) {
            let commentsItems = commentsState.comments._embedded.comments.map(
                (comment) => <CommentListItem key={comment.id} comment={comment}/>
            );

            return <div>
                Comments:
                {commentsItems}
            </div>

        } else if (commentsState.pending) {
            return <div>
                Loading...
            </div>
        }

        return <div>
            Error
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
