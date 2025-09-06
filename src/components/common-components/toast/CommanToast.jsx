import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { connect } from "react-redux";
import "./index.css";
import { clearToast } from "@/store/slice/toastSlice";

const CommanToast = ({ varient, message, isMessage, close }) => {
  return (
    <ToastContainer
      position="top-end"
      className="position-fixed p-3"
      style={{ zIndex: 9999 }}
    >
      <Toast
        onClose={close}
        show={isMessage}
        delay={3000}
        autohide
        bg={varient}
      >
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

const mapStateToProps = (state) => ({
  varient: state.toast.varient || "danger",
  message: state.toast.message,
  isMessage: state.toast.isMessage,
});

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(clearToast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommanToast);
