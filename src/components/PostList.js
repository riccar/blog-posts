import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List 1</div>;
  }
}

/**
 * Wire up the component to the redux store via the connect function
 * The first parameter is the mapStateToProps function and the second
 * is the action creator the component needs to call
 * Finally the internal function receives this component as a parameter 
 */

export default connect(
  null,
  {fetchPosts}
)(PostList);