import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AddPost from './addPost/AddPost';
import { fetchPosts, deletePost } from '../../redux/actions';

class Posts extends Component {
  isUpdate = false;

  componentDidUpdate() {
    this.isUpdate = true;
    setTimeout(() => {
      this.isUpdate = false;
    }, 2000);
  }
  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.id);
  }
  renderUpdateMessage = () => {
    if(this.isUpdate) return <div class="ui ignored warning message">List has been updated! </div>
  }
  renderPosts = () => {
    if (!this.props.posts.length) return <div className="ui active centered inline loader"></div>;
    return this.props.posts.map(post => {
      const { title, body, id } = post;
      return (
        <div key={id} className="item">
          <div className="content">
            <p className="header">{title}</p>
            <div className="description">
              <p>{body}</p>
            </div>
          </div>
          <div className="ui buttons">
            <button className="ui button"><Link to={`/post/comments/${this.props.match.params.id}/${id}`}>View</Link></button>
            <div className="or"></div>
            <button onClick={() => this.props.deletePost(id)} className="ui negative button">Delete</button>
          </div>
        </div >
      )
    });
  }
  render() {
    console.log(this.props.posts)
    return (
      <Fragment>
        <AddPost userId={this.props.match.params.id} />
        {this.renderUpdateMessage()}
        <div className="ui divided items">{this.renderPosts()}</div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  const { posts } = state;
  return { posts };
}
export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);