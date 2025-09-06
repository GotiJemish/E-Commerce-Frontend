"use client";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import CommanInput from "@/components/common-components/product-card/ProductCard";
import ValidationFeedback from "@/components/common-components/validationFeedback/ValidationFeedback";
import { ModelCloseIcon } from "@/icons";
import { addContainerSchema } from "@/schema/validationSchemas";
// import { Form, Formik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

const ContainerModel = ({ open, onHide, editItem }) => {
  const initialState = {
    size: editItem?.size ? editItem?.size : "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {};

  return (
    <Modal
      show={open}
      fullscreen={"md-down"}
      onHide={onHide}
      centered
      className="comman-model"
    >
      <Modal.Header className="pb-3">
        <Modal.Title>New Container</Modal.Title>
      </Modal.Header>

      {/* <Formik
        validationSchema={addContainerSchema}
        initialValues={initialState}
        onSubmit={handleSubmit}
      > */}
      {/* {({
          handleChange,
          values,
          touched,
          errors,
          isSubmitting,
          handleSubmit,
        }) => ( */}
      <>
        {/* {console.log("errors", errors)}
            {console.log("values", values)} */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="d-flex flex-column gap-3 form-cover">
              <CommanInput
                label={"Container Size"}
                type={"text"}
                message={"error in size"}
                placeholder={"Enter Container Size"}
                fade_content="Feet"
                name="size"
                value={values?.size}
                onChange={handleChange}
              />
            </div>
            {touched.size && errors.size ? (
              <ValidationFeedback title={errors.size} />
            ) : null}
            <Modal.Footer className="p-0 pt-2">
              <div className="buttons-cover">
                <CommanButton
                  type="submit"
                  varient="primary"
                  title={"Save"}
                  className={"modal-btn"}
                  disabled={isSubmitting}
                />
                <CommanButton
                  type="button"
                  varient="outline-primary"
                  title={"Cancel"}
                  className={"modal-btn"}
                  onClick={onHide}
                />
              </div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </>
      {/* )} */}
      {/* </Formik> */}
      {/* <CommanInput /> */}

      <button className="close-btn" onClick={onHide}>
        <ModelCloseIcon />
      </button>
    </Modal>
  );
};

export default ContainerModel;
