import React, { useEffect, memo } from "react";
import { userFetch } from "./actions";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.userFetch(props.userId);
  }, [props]);

  if (!props.users) {
    return;
  }

  return <div>{props.users.name}</div>;
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.user.data.find(user => user.id === ownProps.userId)
  };
};

export default connect(
  mapStateToProps,
  { userFetch }
)(memo(App));
