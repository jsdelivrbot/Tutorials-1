import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; we no longer need this because we use a new syntax on connect
import { fetchPosts } from '../actions/index';
//This Link is a component, it can show up as HTML. Its pretty much an anchor tag.
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={'posts/' + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Posts
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( { fetchPosts }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);
//We no longer have to use mapDispatchToProps/bindActionCreators, this can be a shortcut to cutdown on Boilerplate.
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

//In this app we will let all our containers be in our components folder for tutorial sake.
//Most of the components will be containers in this tutorial.
