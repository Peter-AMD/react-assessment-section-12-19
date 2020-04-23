import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../../../redux/actions';
class ViewPost extends Component {
  componentDidMount() {
    const { id, postId } = this.props.match.params;
    this.props.fetchComments({
      userId: id,
      postId
    });
  }
  render() {
    return (
      <Fragment>
        <button onClick={this.props.history.goBack} className="ui labeled icon button">
          <i className="left chevron icon"></i>
          Back
        </button>
        <div className="ui segment">
          <p>name: {this.props.comments.name}</p>
          <p>comment:  {this.props.comments.body}</p>
        </div>
      </Fragment>
     
    )
  }
}

const mapStateToProps = state => {
  const { comments } = state;
  return {
    comments
  }
};
export default connect(mapStateToProps, { fetchComments })(ViewPost);