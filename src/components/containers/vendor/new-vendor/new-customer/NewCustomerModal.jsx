import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import CommanDatePicker from "@/components/common-components/common-date-picker/CommanDatePicker";
import CommanRadio from "@/components/common-components/common-radio/CommanRadio";
import ContainerSubTitle from "@/components/common-components/container-sub-title/ContainerSubTitle";
import CustomCheckbox from "@/components/common-components/custom-checkbox/CustomCheckbox";
import Input from "@/components/common-components/input/Input";
import CommanSelect_01_Client from "@/components/common-components/new-comman-select/Select_01_client";
import { PITermsOptions } from "@/constants/comman/comman";
import { dummyDropDownOptions } from "@/constants/container/comman";
import { addressType, customerType } from "@/constants/container/quotation";
import"./index.css"
import {
  CalenderIcon,
  CustomarIcon,
  EmailIcon,
  ModelCloseIcon,
  PhoneIcon,
  UserIcon,
} from "@/icons";
// import { Formik } from "formik";
import React from "react";
import { Form, Modal } from "react-bootstrap";

const NewCustomerModal = ({ show, onHide }) => {
  // show = true;
  return (
    <Modal className="comman-model side-model" show={show} onHide={onHide}>
      <Modal.Header className="pb-3">
        <Modal.Title>New Customer</Modal.Title>
      </Modal.Header>
      {/* <Formik
      validationSchema={addProductSchema}
      onSubmit={handleSubmit}
      initialValues={initialState}
      > */}
        {/* {({
          handleChange,
          values,
          touched,
          errors,
          isSubmitting,
          handleSubmit,
        }) => ( */}
           <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="d-flex flex-column form-cover">
              <div className="py-28 pt-0 form-section">
                <ContainerSubTitle
                  title={"Basic Details"}
                  className={"mt-3 mb-4 "}
                />
                <Form.Group className=" w-100  ">
                  <Form.Label className="text-secondary">
                    Company Name
                  </Form.Label>
                  <Input
                    type={"text"}
                    value={"ABC Fabrics"}
                    width={"100%"}
                    onChange={() => {}}
                    icon={<CustomarIcon />}
                  />
                </Form.Group>
                <div className="d-flex flex-wrap mt-3 gap-y-3">
                  <Form.Group className=" w-50  ">
                    <Form.Label className="text-secondary ">
                      Contact Person
                    </Form.Label>
                    <Input
                      type={"text"}
                      value={"Jay Patel"}
                      // width={"100%"}
                      onChange={() => {}}
                      icon={<UserIcon size={16} />}
                    />
                  </Form.Group>
                  <Form.Group className=" w-50 ">
                    <Form.Label className="text-secondary ms-10">
                      Date Of Birth
                    </Form.Label>
                    <CommanDatePicker
                      className="ms-auto"
                      options={dummyDropDownOptions}
                      placeholder={"Enter DoB"}
                      maxWidth={325}
                      icon={<CalenderIcon />}
                      // value={new Date()}
                      // onChange={() => {}}
                    />
                  </Form.Group>
                  <Form.Group className=" w-50 ">
                    <Form.Label className="text-secondary">
                      Mobile Number
                    </Form.Label>
                    <Input
                      type={"text"}
                      placeholder={"Enter Mobile No."}
                      // value={""}
                      // width={"100%"}
                      // onChange={() => {}}
                      icon={<PhoneIcon />}
                    />
                  </Form.Group>
                  <Form.Group className=" w-50 ">
                    <Form.Label className="text-secondary ms-10">
                      Email Address
                    </Form.Label>
                    <Input
                      type={"email"}
                      placeholder={"Enter Email"}
                      // value={""}
                      // width={"100%"}
                      // onChange={() => {}}
                      coverClass="ms-auto"
                      icon={<EmailIcon />}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="py-28 form-section">
                <ContainerSubTitle
                  title={"Reference Details"}
                  className={"mb-4 "}
                />

                <Form.Group className="d-flex align-items-center  gap-4  w-100 secondary-form-group mb-4">
                  <Form.Label className="text-secondary">
                    Reference Type
                  </Form.Label>

                  <CommanRadio
                    className={"gap-4"}
                    valuesList={customerType}
                    name="raferance"
                    value={"customer"}
                    onChange={() => {}}
                  />
                </Form.Group>

                <Form.Group className=" w-50  ">
                  <Form.Label className="text-secondary">
                    Reference By
                  </Form.Label>
                  <Input
                    type={"text"}
                    placeholder={"Enter Reference By"}
                    // value={"ABC Fabrics"}
                    // width={"100%"}
                    onChange={() => {}}
                  />
                </Form.Group>
              </div>
              <div className="py-28 form-section">
                <ContainerSubTitle
                  title={"Address Details"}
                  className={"mb-4 "}
                />

                <Form.Group className="d-flex align-items-center  gap-4  w-100 secondary-form-group mb-4">
                  <Form.Label className="text-secondary">
                    Address Type
                  </Form.Label>

                  <CommanRadio
                    className={"gap-4"}
                    valuesList={addressType}
                    name="address"
                    value={"office"}
                    onChange={() => {}}
                  />
                </Form.Group>

                <div className="d-flex flex-wrap mt-3 gap-y-3">
                  <Form.Group className=" w-50  ">
                    <Form.Label className="text-secondary ">Street</Form.Label>
                    <Input
                      type={"text"}
                      // value={"Jay Patel"}
                      placeholder={"Enter Street"}
                      // onChange={() => {}}
                    />
                  </Form.Group>
                  <Form.Group className=" w-50 ">
                    <Form.Label className="text-secondary ms-10">
                      Area
                    </Form.Label>
                    <Input
                      type={"text"}
                      // value={"Jay Patel"}
                      placeholder={"Enter Area"}
                      coverClass="ms-auto"
                      // onChange={() => {}}
                    />
                  </Form.Group>
                  <Form.Group className=" w-50 ">
                    <Form.Label className="text-secondary">City</Form.Label>
                    <CommanSelect_01_Client
                      placeholder={"Select City"}
                      options={PITermsOptions}
                      width={325}
                      menuMinWidth={270}
                    />
                  </Form.Group>
                  <Form.Group className=" w-50 ">
                    <Form.Label className="text-secondary ms-10">
                      Pin Code
                    </Form.Label>
                    <Input
                      type={"text"}
                      placeholder={"Enter Pin Code"}
                      // value={""}
                      // width={"100%"}
                      // onChange={() => {}}
                      coverClass="ms-auto"
                    />
                  </Form.Group>

                  <Form.Group className=" w-50 ">
                    <Form.Label className="text-secondary">State</Form.Label>
                    <CommanSelect_01_Client
                      placeholder={"Select State"}
                      options={PITermsOptions}
                      width={325}
                      menuMinWidth={270}
                    />
                  </Form.Group>
                  <Form.Group className=" w-50 ">
                    <Form.Label className="text-secondary ms-10">
                      Country
                    </Form.Label>

                    <CommanSelect_01_Client
                      placeholder={"Select Country fh"}
                      options={PITermsOptions}
                      width={325}
                      menuMinWidth={270}
                      className={"ms-auto"}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="py-28 pb-3">
                <ContainerSubTitle
                  title={"GSTIN Details"}
                  className={"mb-4 "}
                />

                <div className="d-flex flex-wrap mt-3 gap-y-3">
                  <Form.Group className=" w-50  ">
                    <Form.Label className="text-secondary ">PAN No.</Form.Label>
                    <Input
                      type={"text"}
                      // value={"Jay Patel"}
                      placeholder={"Enter PAN No."}
                      // onChange={() => {}}
                    />
                  </Form.Group>
                  <Form.Group className=" w-50 ">
                    <Form.Label className="text-secondary ms-10">
                      GSTIN No.
                    </Form.Label>
                    <Input
                      type={"text"}
                      coverClass="ms-auto"
                      // value={"Jay Patel"}
                      placeholder={"Enter GSTIN No."}
                      // onChange={() => {}}
                    />
                  </Form.Group>
                  <CustomCheckbox className="w-100 gst-checkbox" label="IEC no. same as PAN no."/>
                  <Form.Group className=" w-50  ">
                    <Form.Label className="text-secondary ">IEC No.</Form.Label>
                    <Input
                      type={"text"}
                      // value={"Jay Patel"}
                      placeholder={"Enter IEC No."}
                      // onChange={() => {}}
                    />
                  </Form.Group>
                  <Form.Group className=" w-50 ">
                    <Form.Label className="text-secondary ms-10">
                      EPCG License No.
                    </Form.Label>
                    <Input
                      type={"text"}
                      // value={"Jay Patel"}
                      placeholder={"Enter EPCG License No."}
                      coverClass="ms-auto"
                      // onChange={() => {}}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            <Modal.Footer className="p-0 pt-2">
              <div className="buttons-cover">
                <CommanButton
                  type="submit"
                  varient="primary"
                  title={"Save"}
                  className={"modal-btn"}
                  // disabled={isSubmitting}
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
        {/* )} */}
      {/* </Formik> */}
      <button className="close-btn" onClick={onHide}>
        <ModelCloseIcon />
      </button>
    </Modal>
  );
};

export default NewCustomerModal;
