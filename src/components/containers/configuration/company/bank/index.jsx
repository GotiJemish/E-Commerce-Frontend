"use client";
import CommanBackPath from "@/components/common-components/comman-back-path/CommanBackPath";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import CommanInput from "@/components/common-components/product-card/ProductCard";
// import { Formik } from 'formik';
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Form } from "react-bootstrap";

const BankConfiguration = () => {
  const path = usePathname();
  const redirect = useRouter();
  return (
    <>
      <CommanBackPath
        title={"bank details"}
        path={path}
        onClick={() => redirect.back()}
        className="mb-4"
      />
      <div className="container-cover company">
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
              <div className="d-flex flex-column gap-4 ">
                <CommanInput
                  secondary
                  label={"Account Name"}
                  type={"text"}
                  message={"error in short code"}
                  placeholder={"Enter Account Name"}
                  isValid
                />
                <CommanInput
                  secondary
                  label={"Bank Name"}
                  type={"text"}
                  message={"error in short code"}
                  placeholder={"Enter Bank Name"}
                  isValid
                />
                <CommanInput
                  secondary
                  label={"Branch Name"}
                  type={"text"}
                  message={"error in short code"}
                  placeholder={"Enter IFSC Code"}
                  isValid
                />
                <CommanInput
                  secondary
                  label={"Account Number"}
                  type={"text"}
                  message={"error in short code"}
                  placeholder={"Enter Account No."}
                  isValid
                />
                <CommanInput
                  secondary
                  label={"IFSC Code"}
                  type={"text"}
                  message={"error in short code"}
                  placeholder={"Enter IFSC Code"}
                  isValid
                />
              </div>
            </Form>
            <div className="d-flex gap-3 position-absolute container-buttons ">
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

export default BankConfiguration;
