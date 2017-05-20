import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from '../actions'; //shortcut: we imported all the action creators from our action file and we save them into the variable actions

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault(); //So we dont try to actually submit anything to our server
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }
  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} />
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
