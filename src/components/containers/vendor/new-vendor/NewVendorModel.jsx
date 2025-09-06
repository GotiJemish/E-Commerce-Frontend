"use client";
import React, { useState } from "react";
import { Form, InputGroup, Modal, Table } from "react-bootstrap";
import "./index.css";
import MainSubTitle from "@/components/common-components/main-sub-title/MainSubTitle";
import {
  AstricIcon,
  CalenderIcon,
  DeleteIcon,
  DollarIcon,
  DropDownIcon,
  EditIcon,
  ModelCloseIcon,
  PdfIcon,
  PercentIcon,
  PlusIcon,
  RoundedPlus,
  SearchIcon,
  UploadIcon,
} from "@/icons";
import CommanInput from "@/components/common-components/product-card/ProductCard";
import SearchSelect, {
  SearchSelectMenuList,
  SearchSelectOption,
} from "@/components/common-components/category-card/CategoryCard";
import ContainerSubTitle from "@/components/common-components/container-sub-title/ContainerSubTitle";
import Input from "@/components/common-components/input/Input";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import CommanSelect_01 from "@/components/common-components/new-comman-select/CommanSelect_01";
import {
  dummyFileData,
  PITermsOptions,
  searchSlectOptions,
} from "@/constants/comman/comman";
import CommanSelect_01_Client from "@/components/common-components/new-comman-select/Select_01_client";
import CommanDatePicker from "@/components/common-components/common-date-picker/CommanDatePicker";
import { AddButton } from "@/components/common-components/buttons/Buttons";
import {
  commanRadio,
  dummyDropDownOptions,
} from "@/constants/container/comman";
import TableInput from "@/components/common-components/table-input/TableInput";
import Select, { components } from "react-select";
import NewCustomerModal from "./new-customer/NewCustomerModal";
import {
  dutyDropDownOptions,
  PortList,
  PortOfDescharge,
  serviceData,
  shippingProducts,
} from "@/constants/container/quotation";
import CommanRadio from "@/components/common-components/common-radio/CommanRadio";

const NewVendorModel = ({ open, onHide }) => {
  if (!open) return null;
  const [selectedOption, setSelectedOption] = useState(null);
  const [newCustomer, setNewCustomer] = useState(false);
  const [fileDropDownOpen, setFileDropDownOpen] = useState(false);
  const handleChangeSearchSelect = (option) => {
    setSelectedOption(option);
  };
  const CustomOption = (props) => (
    <SearchSelectOption
      {...props}
      setNewCustomer={setNewCustomer}
      newCustomer={newCustomer}
    />
  );
  const toggleFileDropdown = () => {
    setFileDropDownOpen((prev) => !prev);
  };

  return (
    <>
      <div className="custom-modal-overlay">
        <div className="custom-modal new-quotation-model">
          <Modal.Header>
            <MainSubTitle title={"New Quotation Create"} className="m-0" />
            <button className="close-btn" onClick={onHide}>
              <ModelCloseIcon width={24} height={24} />
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex align-items-center justify-content-between gap-4 main highlighted">
              <Form.Group
                controlId="customer-select"
                className={`position-relative searchable-select d-flex align-items-center gap-3 justify-content-between`}
              >
                <Form.Label>Customer Name*</Form.Label>
                <div className="d-flex align-items-center">
                  <Select
                    options={searchSlectOptions}
                    value={selectedOption}
                    onChange={handleChangeSearchSelect}
                    placeholder="Select or add a customer"
                    components={{
                      Option: CustomOption,
                      DropdownIndicator: DropDownIcon,
                      MenuList: SearchSelectMenuList,
                    }}
                    isSearchable
                    className="flex-grow-1 search-select"
                    classNamePrefix="search"
                    // menuIsOpen={true}
                  />

                  <button type="button" className="search-btn">
                    <SearchIcon width={16} height={16} color="#FFFFFF" />
                  </button>
                </div>
              </Form.Group>

              <Form.Group className="d-flex align-items-center gap-3 secondary-form-group ">
                <Form.Label>Exchange Rate</Form.Label>
                <Input
                  type={"text"}
                  value={"88.5"}
                  width={"105px"}
                  icon={<DollarIcon />}
                  onChange={() => {}}
                  className="bg-white"
                />
              </Form.Group>
            </div>
            <div className="d-flex">
              <div>
                <Form className="quotation-form  w-100 px-4 my-4">
                  <div className="">
                    <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                      <Form.Label>Quotation ID</Form.Label>
                      <Input
                        type={"text"}
                        value={"HE2526-0001"}
                        width={"325px"}
                        disabled
                        className={"mb-3"}
                        onChange={() => {}}
                      />
                    </Form.Group>

                    <div className="d-flex gap-3">
                      <div className="w-100">
                        <div className="d-flex gap-40 w-100 py-28 pt-0 flex-wrap form-section">
                          <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                            <Form.Label>Quotation Date</Form.Label>
                            <CommanDatePicker
                              options={dummyDropDownOptions}
                              placeholder={"Select Date"}
                              maxWidth={325}
                              icon={<CalenderIcon />}
                              value={new Date()}
                              onChange={() => {}}
                            />
                          </Form.Group>

                          <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                            <Form.Label>Expiry Date</Form.Label>
                            <CommanDatePicker
                              options={dummyDropDownOptions}
                              placeholder={"Select Date"}
                              maxWidth={325}
                              icon={<CalenderIcon />}
                              value={new Date()}
                              onChange={() => {}}
                            />
                          </Form.Group>
                        </div>

                        <div className="d-flex gap-40 w-100 py-28 flex-wrap form-section">
                          <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group">
                            <Form.Label>Dealer</Form.Label>
                            <CommanSelect_01_Client
                              options={dummyDropDownOptions}
                              placeholder={"Select Dealer"}
                              maxWidth={325}
                            />
                          </Form.Group>

                          <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                            <Form.Label>Sales Person</Form.Label>
                            <CommanSelect_01_Client
                              options={dummyDropDownOptions}
                              placeholder={"Select Sales Person"}
                              maxWidth={325}
                            />
                          </Form.Group>
                        </div>

                        <div className="d-flex gap-40 w-100 py-28 flex-wrap form-section">
                          <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                            <Form.Label>Service</Form.Label>
                            <CommanSelect_01_Client
                              options={serviceData}
                              placeholder={"Select Service"}
                              maxWidth={325}
                            />
                          </Form.Group>
                          <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                            <Form.Label>Shipping Product</Form.Label>
                            <CommanSelect_01_Client
                              options={shippingProducts}
                              placeholder={"Select Shipping Product"}
                              maxWidth={325}
                            />
                          </Form.Group>
                          <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                            <Form.Label>Port Of Loading</Form.Label>
                            <CommanSelect_01_Client
                              options={PortList}
                              placeholder={"Select Port"}
                              maxWidth={325}
                            />
                          </Form.Group>
                          <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                            <Form.Label>Port Of Discharge</Form.Label>
                            <CommanSelect_01_Client
                              options={PortList}
                              placeholder={"Select Port"}
                              maxWidth={325}
                            />
                          </Form.Group>
                        </div>

                        <div className="d-flex gap-40 w-100 py-1  form-section">
                          <div className="w-100">
                            <ContainerSubTitle
                              title={"Container Charges"}
                              className={"my-4 "}
                            />
                            <div className=" table-input-cover">
                              <span className="label">
                                Number of Containers
                              </span>

                              <div className="table-input-data">
                                <Input
                                  type={"text"}
                                  value={"45 Feet Container"}
                                  width={"230px"}
                                  disabled
                                  onChange={() => {}}
                                />
                                <Input
                                  type={"number"}
                                  value={"00"}
                                  width={"78px"}
                                  onChange={() => {}}
                                />
                                <Input
                                  type={"text"}
                                  value={"40 Feet Container"}
                                  width={"230px"}
                                  disabled
                                  onChange={() => {}}
                                />
                                <Input
                                  type={"number"}
                                  value={"00"}
                                  width={"78px"}
                                  onChange={() => {}}
                                />
                                <Input
                                  type={"text"}
                                  value={"20 Feet Container"}
                                  width={"230px"}
                                  disabled
                                  onChange={() => {}}
                                />
                                <Input
                                  type={"number"}
                                  value={"00"}
                                  width={"78px"}
                                  onChange={() => {}}
                                  className="mb-3"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-100">
                            <ContainerSubTitle
                              title={"Freight Charges"}
                              className={"my-4 "}
                            />
                            <div className="table-input-cover">
                              <span className="label">Containers</span>

                              <div className="table-input-data">
                                <Input
                                  type={"text"}
                                  value={"45 Feet Container"}
                                  width={"165px"}
                                  onChange={() => {}}
                                  disabled
                                />
                                <Input
                                  type={"text"}
                                  value={"00"}
                                  width={"145px"}
                                  onChange={() => {}}
                                  icon={<DollarIcon />}
                                />
                                <Input
                                  type={"text"}
                                  disabled
                                  value={"40 Feet Container"}
                                  width={"165px"}
                                  onChange={() => {}}
                                />
                                <Input
                                  type={"text"}
                                  value={"00"}
                                  width={"145px"}
                                  onChange={() => {}}
                                  icon={<DollarIcon />}
                                />
                                <Input
                                  disabled
                                  type={"text"}
                                  value={"20 Feet Container"}
                                  width={"165px"}
                                  onChange={() => {}}
                                />
                                <Input
                                  type={"text"}
                                  value={"00"}
                                  width={"145px"}
                                  onChange={() => {}}
                                  icon={<DollarIcon />}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="  form-section">
                          {/* <div className="w-700"> */}
                          <ContainerSubTitle
                            title={"PI values"}
                            className={"my-4 "}
                          />
                          <div className="d-flex gap-12 flex-column">
                            <div className="multi-input-cover">
                              <div className="d-flex align-items-center gap-2">
                                <label className="multi-label me-1">
                                  PI value 1
                                </label>
                                <div className="multi-inputs d-flex gap-3 align-items-center">
                                  <Input
                                    type={"text"}
                                    value={"0.00"}
                                    width={"140px"}
                                    onChange={() => {}}
                                    icon={<DollarIcon />}
                                  />
                                  <Input
                                    type={"text"}
                                    placeholder={"Enter PI No."}
                                    width={"140px"}
                                    value={""}
                                    onChange={() => {}}
                                  />
                                  <CommanSelect_01_Client
                                    placeholder={"Select Terms"}
                                    options={PITermsOptions}
                                    width={170}
                                    menuMinWidth={270}
                                  />
                                  <CommanButton
                                    icon={
                                      <PlusIcon
                                        width={16}
                                        height={16}
                                        color={"#FFFFFF"}
                                      />
                                    }
                                  />
                                </div>
                              </div>

                              <Form.Group className="d-flex align-items-center  gap-2 secondary-form-group ">
                                <label className="multi-label me-1">
                                  Cargo Insurance
                                </label>

                                <CommanRadio
                                  className={"gap-3"}
                                  valuesList={commanRadio}
                                  name="insurance-1"
                                  value={true}
                                  onChange={() => {}}
                                />
                              </Form.Group>
                            </div>

                            <div className="multi-input-cover">
                              <div className="d-flex align-items-center gap-2">
                                <label className="multi-label me-1">
                                  PI value 2{" "}
                                </label>
                                <div className="multi-inputs d-flex gap-3 align-items-center">
                                  <Input
                                    type={"text"}
                                    value={"0.00"}
                                    width={"140px"}
                                    onChange={() => {}}
                                    icon={<DollarIcon />}
                                  />
                                  <Input
                                    type={"text"}
                                    placeholder={"Enter PI No."}
                                    width={"140px"}
                                    value={""}
                                    onChange={() => {}}
                                  />
                                  <CommanSelect_01_Client
                                    placeholder={"Select Terms"}
                                    options={PITermsOptions}
                                    width={170}
                                    menuMinWidth={270}
                                  />
                                  <button
                                    className="table-btn delete-btn"
                                    onClick={() => handleDeleteModel(i)}
                                  >
                                    <DeleteIcon color={"#D11D1E"} />
                                  </button>
                                </div>
                              </div>
                              <Form.Group className="d-flex align-items-center  gap-2 secondary-form-group ">
                                <label className="multi-label me-1">
                                  Cargo Insurance
                                </label>

                                <CommanRadio
                                  className={"gap-3"}
                                  valuesList={commanRadio}
                                  name="insurance-2"
                                  value={true}
                                  onChange={() => {}}
                                />
                              </Form.Group>
                            </div>

                            <div className="multi-input-cover">
                              <div className="d-flex align-items-center gap-2">
                                <label className="multi-label me-1">
                                  PI value 2{" "}
                                </label>
                                <div className="multi-inputs d-flex gap-3 align-items-center">
                                  <Input
                                    type={"text"}
                                    value={"0.00"}
                                    width={"140px"}
                                    onChange={() => {}}
                                    icon={<DollarIcon />}
                                  />
                                  <Input
                                    type={"text"}
                                    placeholder={"Enter PI No."}
                                    width={"140px"}
                                    value={""}
                                    onChange={() => {}}
                                  />
                                  <CommanSelect_01_Client
                                    placeholder={"Select Terms"}
                                    options={PITermsOptions}
                                    width={170}
                                    menuMinWidth={270}
                                  />

                                  <button
                                    className="table-btn delete-btn"
                                    onClick={() => handleDeleteModel(i)}
                                  >
                                    <DeleteIcon color={"#D11D1E"} />
                                  </button>
                                </div>
                              </div>
                              <Form.Group className="d-flex align-items-center  gap-2 secondary-form-group ">
                                <label className="multi-label me-1">
                                  Cargo Insurance
                                </label>

                                <CommanRadio
                                  className={"gap-3"}
                                  valuesList={commanRadio}
                                  name="insurance-3"
                                  value={true}
                                  onChange={() => {}}
                                />
                              </Form.Group>
                            </div>
                          </div>

                          {/* </div> */}
                        </div>

                        <div className="d-flex gap-40 w-100 py-28 flex-wrap form-section">
                          <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                            <Form.Label>Under Duty</Form.Label>
                            <CommanSelect_01_Client
                              options={dutyDropDownOptions}
                              placeholder={"Select Under Duty"}
                              maxWidth={325}
                            />
                          </Form.Group>
                          <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                            <Form.Label>Endorsement</Form.Label>
                            <Input
                              type={"number"}
                              value={"02"}
                              sortable
                              onChange={() => {}}
                            />
                          </Form.Group>
                        </div>

                        <div className="form-section">
                          <ContainerSubTitle
                            title={"EPCG Charges"}
                            className={"my-4 "}
                          />
                          <div className="d-flex gap-40 w-100 py-28 flex-wrap">
                            <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                              <Form.Label>License Registration</Form.Label>
                              <Input
                                type={"number"}
                                value={"02"}
                                width={"325px"}
                                sortable
                                className={""}
                                onChange={() => {}}
                              />
                            </Form.Group>
                            <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                              <Form.Label>License Issue</Form.Label>
                              <Input
                                type={"number"}
                                value={"02"}
                                width={"325px"}
                                sortable
                                className={""}
                                onChange={() => {}}
                              />
                            </Form.Group>
                            <Form.Group className="d-flex align-items-center gap-3 justify-content-between w-100 secondary-form-group ">
                              <Form.Label>Installation</Form.Label>
                              <Input
                                type={"number"}
                                value={"02"}
                                width={"325px"}
                                sortable
                                className={""}
                                onChange={() => {}}
                              />
                            </Form.Group>
                          </div>
                        </div>

                        {/* here comes second */}

                        <div className=" py-28   ">
                          <h3 className="fw-semibold sub-title mb-3">
                            Service Item Charges
                          </h3>
                          <div className="input-tbl-cover">
                            <Table className="input-tbl">
                              <thead>
                                <tr className="">
                                  <th className="p-3">
                                    <span className="table-heading">Item</span>
                                  </th>
                                  <th className="p-3 text-end">
                                    <span className="table-heading">
                                      Quantity
                                    </span>
                                  </th>
                                  <th className="p-3 text-end">
                                    <span className="table-heading">Rate</span>
                                  </th>
                                  <th className="p-3 text-end">
                                    <span className="table-heading">
                                      Creditable GST
                                    </span>
                                  </th>
                                  <th className="p-3 text-end">
                                    <span className="table-heading">
                                      Amount
                                    </span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="position-relative">
                                  <td>
                                    <TableInput
                                      type={"text"}
                                      placeholder={"Enter Item"}
                                      width={"440px"}
                                      value={""}
                                      onChange={() => {}}
                                    />
                                  </td>
                                  <td>
                                    <TableInput
                                      className={"text-end ms-auto"}
                                      type={"number"}
                                      placeholder={"Enter Item"}
                                      width={"72px"}
                                      value={"00"}
                                      onChange={() => {}}
                                    />
                                  </td>
                                  <td>
                                    <TableInput
                                      className={"text-end ms-auto"}
                                      type={"number"}
                                      placeholder={"Enter Item"}
                                      width={"104px"}
                                      value={"0.00"}
                                      onChange={() => {}}
                                    />
                                  </td>
                                  <td>
                                    <TableInput
                                      className={"text-end ms-auto"}
                                      type={"number"}
                                      placeholder={"Enter Item"}
                                      width={"104px"}
                                      value={"0.00"}
                                      onChange={() => {}}
                                    />
                                  </td>
                                  <td className="text-end">
                                    <span className="p-3">₹0.00</span>
                                  </td>
                                  <td className="cover border-none position-absolute outside-table">
                                    <button className="table-btn edit-btn">
                                      <EditIcon color={"#6C718A"} />
                                    </button>
                                    <button className="table-btn delete-btn  ">
                                      <DeleteIcon color={"#D11D1E"} />
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                              <tfoot>
                                <tr>
                                  <td className="py-2 border-none">
                                    <AddButton
                                      title="Add New Items"
                                      icon={<RoundedPlus />}
                                      onClick={() => {}}
                                      className="my-1"
                                    />
                                  </td>
                                  <td
                                    colSpan={2}
                                    className="border-bottom text-end fw-semibold py-2"
                                  >
                                    <span className="data">Total Amount</span>
                                  </td>
                                  <td className="border-bottom text-end fw-normal py-2">
                                    <span className="data">₹0.00</span>
                                  </td>
                                  <td className="border-bottom text-end fw-semibold py-2">
                                    <span className="pe-2 data">₹0.00</span>
                                  </td>
                                </tr>
                              </tfoot>
                            </Table>
                          </div>
                        </div>
                      </div>

                      <span className="day-count ">29 Days</span>
                    </div>
                  </div>
                </Form>
                <div className="d-flex w-100 gap-4 p-4">
                  <div className="py-1 width-500 terms-and-conditions">
                    <h3 className="fw-semibold sub-title mb-2 pb-1">
                      Terms & Conditions
                    </h3>

                    <textarea
                      className="form-control "
                      // value={value}
                      onChange={() => {}}
                      placeholder={
                        "Enter the terms and conditions of your business to be displayed in your transaction"
                      }
                      style={{ maxWidth: "500px", minHeight: "104px" }}
                    />
                  </div>
                  <hr className="hr-vertical" />
                  <div className="py-1 ">
                    <h3 className="fw-semibold sub-title mb-2 pb-1">
                      Attach File(s)
                    </h3>

                    <div className="input-file-2">
                      <div className="d-flex gap-2 position-relative">
                        <label
                          htmlFor="fileUpload"
                          className="upload-file-2-label"
                        >
                          <UploadIcon color={"#6C718A"} />
                          <span>Upload File</span>
                          <input
                            id="fileUpload"
                            type="file"
                            className="input-file-2-input"
                            multiple
                            accept="*"
                          />
                        </label>

                        <CommanButton
                          icon={
                            <AstricIcon
                              width={16}
                              height={16}
                              color={"#FFFFFF"}
                            />
                          }
                          title={2}
                          onClick={toggleFileDropdown}
                        />
                        {fileDropDownOpen && (
                          <ul className="position-absolute list-unstyled list-of-files">
                            {dummyFileData?.map((item, i) => (
                              <React.Fragment key={i}>
                                <li className="d-flex align-items-center justify-content-between gap-2 ">
                                  <div className="d-flex align-items-center gap-2">
                                    <i className="icon">{item?.icon}</i>
                                    <div className="text-content d-flex flex-column">
                                      <p className="name">{item?.name}</p>
                                      <p className="size">
                                        File Size: {item?.file_size}
                                      </p>
                                    </div>
                                  </div>
                                  <button className="table-btn delete-btn  ">
                                    <DeleteIcon color={"#D11D1E"} />
                                  </button>
                                </li>
                                <hr className="hr-primary" />
                              </React.Fragment>
                            ))}
                          </ul>
                        )}
                      </div>

                      <p className="upload-hint">
                        You can upload a maximum of 10 files, 10MB each
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="side-content">
                {/* for custom duty calculations start */}
                {/* <div>
                  <ContainerSubTitle
                    title={"Custom Duty Calculation"}
                    className={"mb-4 "}
                  />
                  <div className="main-card d-flex flex-column gap-3">
                    <div className="d-flex flex-column gap-20">
                      <div className="sub-section">
                        <span className="label">Total PI Value</span>
                        <span className="amount">$39,000.00</span>
                      </div>
                      <div className="sub-section">
                        <span className="label">Total Freight</span>
                        <span className="amount">$2,000.00</span>
                      </div>
                    </div>

                    <hr className="hr-border-100" />

                    <div className="d-flex flex-column gap-20">
                      <div className="sub-section">
                        <span className="bold-label fw-medium">
                          Total CNF Value
                        </span>
                        <span className="amount">$41,000.00</span>
                      </div>
                      <div className="sub-section">
                        <span className="label">Ex Rate</span>
                        <span className="amount">₹88.5</span>
                      </div>
                    </div>

                    <hr className="hr-border-100" />
                    <div className="d-flex flex-column ">
                      <div className="sub-section my-10 mt-0">
                        <span className="bold-label fw-medium">
                          Total CNF Value In INR
                        </span>
                        <span className="amount">₹36,28,500.00</span>
                      </div>
                      <div className="sub-section">
                        <span className="label">Insurance</span>

                        <InputGroup
                          className="comman-input-group"
                          style={{ maxWidth: "112px" }}
                        >
                          <Form.Control
                            placeholder="GST Rate"
                            aria-label="GST Rate"
                            aria-describedby="basic-addon"
                            onChange={() => {}}
                            value={"0.4543"}
                          />
                          <InputGroup.Text id="basic-addon">
                            <i>
                              <PercentIcon />
                            </i>
                          </InputGroup.Text>
                        </InputGroup>

                        <span className="amount">1648.4276</span>
                      </div>
                    </div>
                    <hr className="hr-border-100" />

                    <div className="d-flex flex-column ">
                      <div className="sub-section my-10 mt-0">
                        <span className="bold-label fw-medium">
                          Total CIF Value
                        </span>
                        <span className="amount fw-semibold">
                          ₹36,30,148.4276
                        </span>
                      </div>
                      <div className="sub-section">
                        <span className="label">HIGHSEAS</span>

                        <InputGroup
                          className="comman-input-group"
                          style={{ maxWidth: "98px" }}
                        >
                          <Form.Control
                            placeholder="GST Rate"
                            aria-label="GST Rate"
                            aria-describedby="basic-addon"
                            onChange={() => {}}
                            value={"0"}
                          />
                          <InputGroup.Text id="basic-addon">
                            <i>
                              <PercentIcon />
                            </i>
                          </InputGroup.Text>
                        </InputGroup>

                        <span className="amount">0.00</span>
                      </div>
                    </div>
                    <hr className="hr-border-100" />
                    <div className="d-flex flex-column">
                      <div className="sub-section my-10 mt-0">
                        <span className="bold-label fw-medium">Total INR</span>
                        <span className="amount fw-semibold">
                          ₹36,30,148.4276
                        </span>
                      </div>
                      <div className="sub-section">
                        <span className="label">BCD (A)</span>

                        <InputGroup
                          className="comman-input-group"
                          style={{ maxWidth: "98px" }}
                        >
                          <Form.Control
                            placeholder="GST Rate"
                            aria-label="GST Rate"
                            aria-describedby="basic-addon"
                            onChange={() => {}}
                            value={"7.50"}
                          />
                          <InputGroup.Text id="basic-addon">
                            <i>
                              <PercentIcon />
                            </i>
                          </InputGroup.Text>
                        </InputGroup>

                        <span className="amount">2,72,261.13207</span>
                      </div>
                      <div className="sub-section mt-1">
                        <span className="label">SWS (B)</span>

                        <InputGroup
                          className="comman-input-group"
                          style={{ maxWidth: "98px" }}
                        >
                          <Form.Control
                            placeholder="GST Rate"
                            aria-label="GST Rate"
                            aria-describedby="basic-addon"
                            onChange={() => {}}
                            value={"10"}
                          />
                          <InputGroup.Text id="basic-addon">
                            <i>
                              <PercentIcon />
                            </i>
                          </InputGroup.Text>
                        </InputGroup>

                        <span className="amount">27,226.113207</span>
                      </div>
                    </div>
                    <hr className="hr-border-100" />

                    <div className="d-flex flex-column">
                      <div className="sub-section my-10 mt-0">
                        <span className="bold-label fw-semibold">
                          Total Duty (A + B)
                        </span>
                        <span className="amount  fw-semibold">
                          ₹2,99,487.25
                        </span>
                      </div>
                      <div className="sub-section my-10 mt-0">
                        <span className="bold-label">Ass Value Of IGST</span>

                        <span className="amount">₹39,29,635.67</span>
                      </div>
                      <div className="sub-section ">
                        <span className="label">Duty - IGST</span>

                        <InputGroup
                          className="comman-input-group"
                          style={{ maxWidth: "98px" }}
                        >
                          <Form.Control
                            placeholder="GST Rate"
                            aria-label="GST Rate"
                            aria-describedby="basic-addon"
                            onChange={() => {}}
                            value={"18"}
                          />
                          <InputGroup.Text id="basic-addon">
                            <i>
                              <PercentIcon />
                            </i>
                          </InputGroup.Text>
                        </InputGroup>

                        <span className="amount">7,07,334.41</span>
                      </div>
                    </div>
                    <hr className="hr-border-100" />

                    <div className="d-flex flex-column">
                      <div className="sub-section">
                        <span className="bold-label fw-semibold">
                          Total Custom Duty
                        </span>
                        <span className="amount  fw-semibold">
                          ₹10,06,821.67
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="second-card mt-3 d-flex flex-column gap-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text fw-semibold">Total Duty</span>
                      <span className="text fw-semibold">₹2,99,487.25</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text fw-semibold">Duty - IGST</span>
                      <span className="text fw-semibold">₹7,07,334.41</span>
                    </div>
                  </div>
                </div>

                <div>
                  <ContainerSubTitle
                    title={"Stamp Duty Calculation"}
                    className={"mb-4 "}
                  />
                  <div className="main-card d-flex flex-column gap-0">
                    <div className="d-flex flex-column gap-20 my-10 mt-0">
                      <div className="sub-section">
                        <span className="bold-label">Total INR</span>
                        <span className="amount">₹36,30,148.4276</span>
                      </div>
                      <div className="sub-section">
                        <span className="bold-label">Total Custom Duty</span>
                        <span className="amount">₹10,06,821.67</span>
                      </div>
                      <div className="sub-section">
                        <span className="label">Ass Value For Stamp Duty</span>
                        <span className="amount">₹46,36,970.08</span>
                      </div>
                    </div>
                    <div className="sub-section">
                      <span className="bold-label fw-semibold">Total Stamp Duty</span>
                      <InputGroup
                        className="comman-input-group"
                        style={{ maxWidth: "98px" }}
                      >
                        <Form.Control
                          placeholder="GST Rate"
                          aria-label="GST Rate"
                          aria-describedby="basic-addon"
                          onChange={() => {}}
                          value={"10"}
                        />
                        <InputGroup.Text id="basic-addon">
                          <i>
                            <PercentIcon />
                          </i>
                        </InputGroup.Text>
                      </InputGroup>
                      <span className="amount fw-semibold">4,636.97</span>
                    </div>
                  </div>
                  <div className="second-card mt-3 d-flex flex-column gap-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text fw-semibold">Total Stamp Duty</span>
                      <span className="text fw-semibold">4,636.97</span>
                    </div>
                  </div>
                </div> */}
                {/* for custom duty calculations end */}

                {/* for empty custom duty calculations start */}
                {/* <div>
                  <ContainerSubTitle
                    title={"Custom Duty Calculation"}
                    className={"mb-4 "}
                  />
                  <div className="main-card d-flex flex-column align-items-center empty-card">
                    <h2 className="symbol">₹</h2>
                    <h3 className="title">
                      Enter PI Value for Duty Calculation
                    </h3>
                    <p className="description">
                      Please provide the Purchase Invoice (PI) value to get an
                      accurate calculation of the custom duty
                    </p>
                  </div>
                </div> */}
                {/* for empty custom duty calculations end */}

                {/* for Insurance Calculation start */}

                <div>
                  <ContainerSubTitle
                    title={"Insurance Calculation"}
                    className={"mb-4 "}
                  />
                  <div className="main-card d-flex flex-column">
                    <div className="d-flex flex-column gap-20">
                      <div className="sub-section">
                        <span className="label">Total PI Value</span>
                        <span className="amount">$39,000.00</span>
                      </div>
                      <div className="sub-section">
                        <span className="label">Freight Charge</span>
                        <span className="amount">$2,000.00</span>
                      </div>
                    </div>
                    <div className="sub-section my-10">
                      <span className="label">Insurance</span>

                      <InputGroup
                        className="comman-input-group"
                        style={{ maxWidth: "98px" }}
                      >
                        <Form.Control
                          placeholder="GST Rate"
                          aria-label="GST Rate"
                          aria-describedby="basic-addon"
                          onChange={() => {}}
                          value={"0"}
                        />
                        <InputGroup.Text id="basic-addon">
                          <i>
                            <PercentIcon />
                          </i>
                        </InputGroup.Text>
                      </InputGroup>

                      <span className="amount">0.00</span>
                    </div>
                    <div className="d-flex flex-column gap-20">
                      <div className="sub-section">
                        <span className="label">Net Value</span>
                        <span className="amount">$41,000.00</span>
                      </div>
                      <div className="sub-section">
                        <span className="label">Ex Rate</span>
                        <span className="amount">₹88.5</span>
                      </div>
                    </div>
                    <hr className="hr-border-100 my-3" />

                    <div className="d-flex flex-column ">
                      <div className="sub-section my-10 mt-0">
                        <span className="bold-label">Net Insurance Value</span>
                        <span className="amount">₹36,28,500.00</span>
                      </div>
                      <div className="sub-section">
                        <span className="label">10%</span>
                        <span className="amount">₹3,62,850.00</span>
                      </div>
                    </div>
                    <hr className="hr-border-100 my-3" />

                    <div className="d-flex flex-column ">
                      <div className="sub-section ">
                        <span className="bold-label fw-medium">Sub Total</span>
                        <span className="amount fw-semibold">
                          ₹39,91,350.00
                        </span>
                      </div>
                      <div className="sub-section my-10 mb-1">
                        <span className="label">Premium</span>

                        <InputGroup
                          className="comman-input-group"
                          style={{ maxWidth: "98px" }}
                        >
                          <Form.Control
                            placeholder="GST Rate"
                            aria-label="GST Rate"
                            aria-describedby="basic-addon"
                            onChange={() => {}}
                            value={"0.04"}
                          />
                          <InputGroup.Text id="basic-addon">
                            <i>
                              <PercentIcon />
                            </i>
                          </InputGroup.Text>
                        </InputGroup>

                        <span className="amount">₹1,396.9725</span>
                      </div>

                      <div className="sub-section">
                        <span className="label">GST</span>

                        <InputGroup
                          className="comman-input-group"
                          style={{ maxWidth: "98px" }}
                        >
                          <Form.Control
                            placeholder="GST Rate"
                            aria-label="GST Rate"
                            aria-describedby="basic-addon"
                            onChange={() => {}}
                            value={"18"}
                          />
                          <InputGroup.Text id="basic-addon">
                            <i>
                              <PercentIcon />
                            </i>
                          </InputGroup.Text>
                        </InputGroup>

                        <span className="amount">₹251.45505</span>
                      </div>
                    </div>
                    <hr className="hr-border-100 my-3" />
                    <div className="d-flex flex-column">
                      <div className="sub-section">
                        <span className="bold-label fw-medium">
                          Net Premium
                        </span>
                        <span className="amount">₹1,648.42755</span>
                      </div>
                      <div className="sub-section my-10 mb-0">
                        <span className="label">Round Figure Premium</span>

                        <Input
                          type={"number"}
                          value={5500}
                          width={"98px"}
                          className={"fw-semibold text-end"}
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="second-card mt-3 d-flex flex-column gap-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="text fw-semibold">
                        Total Insurance Value
                      </span>
                      <span className="text fw-semibold">₹36,34,000.00</span>
                    </div>
                  </div>
                </div>

                {/* for Insurance Calculation end */}
              </div>
            </div>
          </Modal.Body>
          <div className="d-flex gap-3 container-buttons mt-4 pt-3 mx-4">
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
        </div>
      </div>

      <NewCustomerModal
        show={newCustomer}
        onHide={() => setNewCustomer(false)}
      />
    </>
  );
};

export default NewVendorModel;
