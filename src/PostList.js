import React, { useEffect } from "react";
import { fetchPost } from "./actions";
import User from "./UserList";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.fetchPost();
  }, [props]);

  const renderList = () => {
    return props.post.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <User userId={post.id} />
          </div>
        </div>
      );
    });
  };
  return <div className="ui relaxed divided list">{renderList()}</div>;
}

const mapStateToProps = state => {
  return {
    post: state.post.data
  };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(App);
