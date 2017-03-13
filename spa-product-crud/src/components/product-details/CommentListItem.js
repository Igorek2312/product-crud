import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import store from '../../store'
import {deleteComment} from  '../../actions/commentsActions'
import {makeCommentEditable, editComment} from '../../actions/commentsActions'

function mapToStateToProps(state) {
    return {
        commentState: state.commentsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}


class CommentListItem extends Component {

    deleteComment() {
        let selfUrl = this.props.comment._links.self.href;
        store.dispatch(deleteComment(selfUrl));
    }

    makeEditable() {
        let comment = this.props.comment;
        this.props.dispatch(makeCommentEditable(comment.id, true));
    }

    editComment() {
        let comment = this.props.comment;
        let edited = {
            date: moment().format(),
            content: this.refs.newContent.value
        };
        this.props.dispatch(editComment(comment._links.self.href, edited));
        this.props.dispatch(makeCommentEditable(comment.id, false));
    }

    cancelEditing() {
        let comment = this.props.comment;
        this.props.dispatch(makeCommentEditable(comment.id, false));
    }

    renderComment() {
        let comment = this.props.comment;
        let dateCommenting = moment(comment.date).format("DD/MM/YYYY hh:mm");
        return <div className="panel panel-default">
            <div className="panel-body">
                <span className="text-muted small">Commented by </span>
                <span className="text-primary small">{comment.email}</span>
                <span className="text-muted small"> on {dateCommenting}</span> <br/>
                {comment.content} <br/>
                <i onClick={this.deleteComment.bind(this)} className="fa fa-times clickable"></i>
                <i onClick={this.makeEditable.bind(this)} className="fa fa-pencil-square-o clickable"></i>
            </div>
        </div>;
    }

    renderEditCommentForm() {
        let comment = this.props.comment;
        return <div>
            <div className="form-group">
                <textarea ref="newContent" cols="30" rows="3" defaultValue={comment.content} className="form-control"/>
            </div>

            <div className="btn-toolbar">
                <button onClick={this.editComment.bind(this)} className="btn btn-primary">Submit</button>
                <button onClick={this.cancelEditing.bind(this)} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    }

    render() {
        let comment = this.props.comment;
        return <div>
            {comment.editable ? this.renderEditCommentForm() : this.renderComment()}
        </div>
    }
}

export default connect(mapToStateToProps, mapDispatchToProps)(CommentListItem);