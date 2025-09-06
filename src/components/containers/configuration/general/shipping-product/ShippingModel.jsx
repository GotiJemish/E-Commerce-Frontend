import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import CommanInput from "@/components/common-components/product-card/ProductCard";
import CommanRadio from "@/components/common-components/common-radio/CommanRadio";
import ValidationFeedback from "@/components/common-components/validationFeedback/ValidationFeedback";
import { chackboxValues } from "@/constants/container/configuration/shipping/ShippingData";
import { ModelCloseIcon } from "@/icons";
import React from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

const ShippingModel = ({ open, onHide, editItem }) => {
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
        <Modal.Title>New Shipping Product</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex flex-column gap-3 form-cover">
            <CommanInput
              label={"Product Name"}
              type={"text"}
              placeholder={"Enter Product Name"}
              name="name"
              value={values?.name}
              onChange={handleChange}
            />
            {touched.name && errors.name ? (
              <ValidationFeedback title={errors.name} />
            ) : null}

            <CommanInput
              label={"Product Short Code"}
              type={"text"}
              placeholder={"Enter Product Short Code"}
              name="short_code"
              value={values?.short_code}
              onChange={handleChange}
            />
            {touched.short_code && errors.short_code ? (
              <ValidationFeedback title={errors.short_code} />
            ) : null}
            <Form.Group className="position-relative form-checkbox-group">
              <Form.Label>{"CEC Charge Applicable"}</Form.Label>
              <CommanRadio
                valuesList={chackboxValues}
                name="cec_charge_applicable"
                value={values?.cec_charge_applicable}
                onChange={handleChange}
              />
            </Form.Group>
            {touched.cec_charge_applicable && errors.cec_charge_applicable ? (
              <ValidationFeedback title={errors.cec_charge_applicable} />
            ) : null}
          </div>
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

      <button className="close-btn" onClick={onHide}>
        <ModelCloseIcon />
      </button>
    </Modal>
  );
};

export default ShippingModel;
