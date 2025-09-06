import React from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

// You can replace Spinner with your own custom loader
const withLoader = (WrappedComponent) => {
  const LoaderHOC = ({ loading, ...props }) => {
    if (loading) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => ({
    loading: state.auth.loading,
  });

  return connect(mapStateToProps)(LoaderHOC);
};

export default withLoader;
