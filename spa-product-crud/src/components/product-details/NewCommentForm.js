import React, {Component} from "react";
import {postComment} from "../../actions/commentsActions";
import moment from "moment";
import store from "../../store";


class NewCommentForm extends Component {
    submitNewComment(e) {
        e.preventDefault();

        let comment = {
            content: this.refs.commentContent.value,
            email: this.refs.email.value,
            date: moment().format(),
            product: this.props.product
        };

        store.dispatch(postComment(comment));
        this.refs.commentForm.reset();
    }

    render() {
        return (<form className="form-horizontal" ref="commentForm" onSubmit={this.submitNewComment.bind(this)}>
            <div className="form-group">
                <textarea ref="commentContent" className="form-control" cols="30" rows="5"/>
            </div>
            <div className="form-group">
                <label htmlFor="Email" className="col-sm-1 control-label">Email:</label>
                <div className="col-sm-3">
                    <input ref="email" type="text" className="form-control" id="Email"/>
                </div>
                <div className="col-sm-8">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>)
    }
}

export default NewCommentForm;