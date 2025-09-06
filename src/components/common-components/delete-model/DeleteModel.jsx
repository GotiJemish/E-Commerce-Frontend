import React from "react";
import { Modal } from "react-bootstrap";
import CommanButton from "../buttons/common-button/CommanButton";
import { DeleteIcon, ModelCloseIcon } from "@/icons";
import "./index.css";

const DeleteModel = ({ open, onHide, title, description, handleFinalDelete, btnDisable }) => {
  return (
    <Modal
      show={open}
      fullscreen={"md-down"}
      onHide={onHide}
      centered
      className="comman-model delete-model"
    >
      <Modal.Header className="pb-3 d-flex ">
        <span className="avtar">
          <DeleteIcon width={18} height={18} color={"#D11D1E"} />
        </span>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <>
        <Modal.Body className="px-0">
          <p className="description mt-1">{description}</p>
        </Modal.Body>
        <Modal.Footer className="p-0 pt-2">
          <div className="buttons-cover mx-0">
            <CommanButton
              varient="danger"
              title={"Yes, Delete"}
              className={"modal-btn"}
              onClick={handleFinalDelete}
              disabled={btnDisable}
            />
            <CommanButton
              varient="outline-primary"
              title={"Cancel"}
              className={"modal-btn"}
              onClick={onHide}
            />
          </div>
        </Modal.Footer>
      </>
      <button className="close-btn" onClick={onHide}>
        <ModelCloseIcon width={20} height={20} />
      </button>
    </Modal>
  );
};

export default DeleteModel;
