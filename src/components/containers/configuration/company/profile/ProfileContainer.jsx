"use client";
import CommanBackPath from "@/components/common-components/comman-back-path/CommanBackPath";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import CommanInput from "@/components/common-components/product-card/ProductCard";
import CommanRadio from "@/components/common-components/common-radio/CommanRadio";
import ContainerSubTitle from "@/components/common-components/container-sub-title/ContainerSubTitle";
import ContainerTitle from "@/components/common-components/container-title/ContainerTitle";
import { DropDown, EmailIcon, PhoneIcon } from "@/icons";
// import { Formik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./index.css";
import CommanDropdown from "@/components/common-components/dropdown/CommanDropdown";
import { dummyDropDownOptions } from "@/constants/container/comman";
import CommanSelect_01_Client from "@/components/common-components/new-comman-select/Select_01_client";

const ProfileContainer = () => {
  const path = usePathname();
  const redirect = useRouter();
  return (
    <>
      <CommanBackPath
        title={"Company Profile"}
        path={path}
        onClick={() => redirect.back()}
        className="mb-4"
      />
      <div className="container-cover company h-100">
        {/* <Formik
            validationSchema={schema}
          onSubmit={() => {}}
            initialValues={{
              firstName: 'Mark',
              lastName: 'Otto',
              username: '',
              city: '',
              state: '',
              zip: '',
              file: null,
              terms: false,
            }}
        > */}
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <>
            <Form noValidate onSubmit={handleSubmit} className={""}>
              <ContainerTitle title="Basic Details" className={"mb-3"} />
              <div className="d-flex flex-column gap-3 form-cover py-1 form-section">
                <div className="d-flex flex-column gap-4 ">
                  <CommanInput
                    label={"Company Logo"}
                    type={"file"}
                    message={"error in Port name"}
                    placeholder={"Upload Your Company Logo"}
                    instruction={
                      "This logo will be displayed in Quotation PDFs and email notifications"
                    }
                    details={[
                      "Preferred Image Dimensions: 240 x 240 pixels @ 72 DPI",
                      "Maximum File Size: 1MB",
                    ]}
                    isValid
                    // className={"mb-2"}
                  />
                  <CommanInput
                    secondary
                    label={"Company Name"}
                    type={"text"}
                    message={"error in short code"}
                    placeholder={"Enter Company Name"}
                    isValid
                  />
                </div>

                <div className="d-flex gap-40 mb-4 flex-wrap">
                  <CommanInput
                    secondary
                    label={"Phone Number"}
                    type={"text"}
                    message={"error in short code"}
                    placeholder={"Enter Phone No."}
                    isValid
                    icon={<PhoneIcon color="#6C718A" />}
                    // className={"w-50"}
                  />
                  <CommanInput
                    secondary
                    label={"Email Address"}
                    type={"text"}
                    message={"error in short code"}
                    placeholder={"Enter Email"}
                    isValid
                    icon={<EmailIcon color="#6C718A" />}
                    // className={"w-50"}
                  />
                </div>
              </div>

              <ContainerTitle
                title="Address Details"
                className={"mb-3 mt-4 pt-1"}
              />
              <div className="d-flex flex-column gap-3 form-cover py-1 form-section">
                <div className="d-flex gap-40 mb-4 flex-wrap">
                  <CommanInput
                    secondary
                    label={"Street"}
                    type={"text"}
                    message={"error in Port name"}
                    placeholder={"Enter Street"}
                    isValid
                  />
                  <CommanInput
                    secondary
                    label={"Area"}
                    type={"text"}
                    message={"error in short code"}
                    placeholder={"Enter Area"}
                    isValid
                  />

                  {/* <CommanDropdown
                      width={"325px"}
                      secondary
                      label={"City"}
                      options={dummyDropDownOptions}
                      placeholder={"Select City"}
                      onChange={() => {}}
                      isValid
                      message={"error in short code"}
                    /> */}

                  <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group">
                    <Form.Label>City</Form.Label>
                    <CommanSelect_01_Client
                      maxWidth={325}
                      options={dummyDropDownOptions}
                      placeholder={"Select City"}
                    />
                  </Form.Group>

                  <CommanInput
                    secondary
                    label={"Pin Code"}
                    type={"text"}
                    message={"error in short code"}
                    placeholder={"Enter Pin Code"}
                    isValid
                  />
                  {/* <CommanDropdown
                      width={"325px"}
                      secondary
                      label={""}
                      options={dummyDropDownOptions}
                      placeholder={"Select State"}
                      onChange={() => {}}
                      isValid
                      message={"error in short code"}
                    /> */}
                  <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group">
                    <Form.Label>State</Form.Label>
                    <CommanSelect_01_Client
                      maxWidth={325}
                      options={dummyDropDownOptions}
                      placeholder={"Select State"}
                    />
                  </Form.Group>
                  {/* <CommanDropdown
                      width={"325px"}
                      secondary
                      label={"Country"}
                      options={dummyDropDownOptions}
                      placeholder={"Select Country"}
                      onChange={() => {}}
                      isValid
                      message={"error in short code"}
                    /> */}
                  <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group">
                    <Form.Label>Country</Form.Label>
                    <CommanSelect_01_Client
                      maxWidth={325}
                      options={dummyDropDownOptions}
                      placeholder={"Select Country"}
                    />
                  </Form.Group>
                </div>
              </div>

              <ContainerTitle
                title="GSTIN Details"
                className={"mb-3 mt-4 pt-1"}
              />
              <div className="d-flex flex-column gap-3 form-cover py-1 form-section">
                <div className="d-flex gap-40 mb-4 flex-wrap">
                  <CommanInput
                    secondary
                    label={"PAN No."}
                    type={"text"}
                    message={"error in Port name"}
                    placeholder={"Enter PAN No."}
                    isValid
                  />
                  <CommanInput
                    secondary
                    label={"GSTIN No."}
                    type={"text"}
                    message={"error in short code"}
                    placeholder={"Enter GSTIN No."}
                    isValid
                  />
                </div>
              </div>
            </Form>
            <div className="d-flex gap-3  container-buttons mt-4 pt-1">
              <CommanButton
                varient="primary"
                title={"Save"}
                className={"modal-btn"}
              />
              <CommanButton
                varient="outline-primary"
                title={"Cancel"}
                className={"modal-btn"}
              />
            </div>
          </>
        )}
        {/* </Formik> */}
      </div>
    </>
  );
};

export default ProfileContainer;
