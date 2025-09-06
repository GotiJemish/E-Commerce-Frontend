"use client";
import CommanBackPath from "@/components/common-components/comman-back-path/CommanBackPath";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import CommanInput from "@/components/common-components/product-card/ProductCard";
import ContainerTitle from "@/components/common-components/container-title/ContainerTitle";
// import { Formik } from 'formik';
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Form } from "react-bootstrap";

const TermsContainer = () => {
  const path = usePathname();
  const redirect = useRouter();
  return (
    <>
      <CommanBackPath
        title={"Terms and Conditions"}
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
              <ContainerTitle title="Terms For Quotation" className={"mb-3"} />
              <div className="form-cover py-1 form-section">
                <CommanInput
                  type={"text-area"}
                  message={"error in short code"}
                  placeholder={
                    "Enter the terms and conditions of your business to be displayed in your transaction"
                  }
                  isValid
                  className={"mb-4 text-area"}
                />
              </div>
              <ContainerTitle
                title="Terms For Invoice"
                className={"mb-3 mt-4 pt-1"}
              />
              <div className="form-cover py-1 form-section">
                <CommanInput
                  type={"text-area"}
                  message={"error in short code"}
                  placeholder={
                    "Enter the terms and conditions of your business to be displayed in your transaction"
                  }
                  isValid
                  className={"mb-4 text-area"}
                />
              </div>
            </Form>
            <div className="d-flex gap-3 mt-4 pt-1 container-buttons ">
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

export default TermsContainer;
