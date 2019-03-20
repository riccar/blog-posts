import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';


class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

/**
 * Wire up the component to the redux store via the connect function
 * The first parameter is the mapStateToProps function and the second
 * is the action creator the component needs to call
 * Finally the internal function receives this component as a parameter 
 */

 const mapStateToProps = state => {
   return { posts: state.posts };
 };

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);