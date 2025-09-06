"use client";
import CommanBackPath from "@/components/common-components/comman-back-path/CommanBackPath";
import LongToggle from "@/components/common-components/comman-long-toggle/LongToggle";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import ContainerSubTitle from "@/components/common-components/container-sub-title/ContainerSubTitle";
import MainSubTitle from "@/components/common-components/main-sub-title/MainSubTitle";
import {
  DischargeColumns,
  DischargeData,
} from "@/constants/container/configuration/port/Port";
import {
  cardList,
  PortContainerCharges,
} from "@/constants/container/configuration/service-charge/ServiceCharge";
import {
  ProductColumns,
  ProductData,
} from "@/constants/container/configuration/shipping/ShippingData";
import {
  DeleteIcon,
  EditIcon,
  PercentIcon,
  PlusIcon,
  RupeeIcon,
  TableBottomIcon,
  TableTopIcon,
} from "@/icons";
import { usePathname, useRouter } from "next/navigation";

import React, { useState } from "react";
import {
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Nav,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import Toggle from "@/components/common-components/comman-long-toggle/LongToggle";

const ServiceCharges = () => {
  const path = usePathname();
  const redirect = useRouter();
  const [tabContent, setTabContent] = useState("#1");
  const [dependContainer, setDependContainer] = useState(false);
  const [dependPort, setDependPort] = useState(false);
  const [activePort, setActivePort] = useState("hazira");

  const handleContainerToggle = () => {
    setDependContainer(!dependContainer);
  };
  const handlePortToggle = () => {
    setDependPort(!dependPort);
  };
  const renderPortContent = () => {
    switch (activePort) {
      case "hazira":
        return (
          <Table
            className="input-table "
            bordered
            style={{
              borderCollapse: "separate",
              borderSpacing: "30px 10px",
              maxWidth: "560px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr className="">
                <th className="p-0">
                  <span className="table-heading">Containers</span>
                </th>
                <th className="text-center p-0">
                  <span className="table-heading ">GST Rate</span>
                </th>
                <th className="text-center p-0">
                  <span className="table-heading">Amount</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-0">
                  <span className="container-box">45 Feet Container</span>
                </td>
                <td className="p-0" style={{ minWidth: "100px" }}>
                  <InputGroup className="comman-input-group">
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
                </td>

                <td className="p-0" style={{ minWidth: "120px" }}>
                  <InputGroup className="comman-input-group">
                    <Form.Control
                      placeholder="Amount"
                      aria-label="Amount"
                      aria-describedby="basic-addon"
                      onChange={() => {}}
                      value={"50,000"}
                    />
                    <InputGroup.Text id="basic-addon">
                      <i>
                        <RupeeIcon />
                      </i>
                    </InputGroup.Text>
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td className="p-0">
                  <span className="container-box">40 Feet Container</span>
                </td>
                <td className="p-0">
                  <InputGroup className="comman-input-group">
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
                </td>

                <td className="p-0">
                  <InputGroup className="comman-input-group">
                    <Form.Control
                      placeholder="Amount"
                      aria-label="Amount"
                      aria-describedby="basic-addon"
                      onChange={() => {}}
                      value={"40,000"}
                    />
                    <InputGroup.Text id="basic-addon">
                      <i>
                        <RupeeIcon />
                      </i>
                    </InputGroup.Text>
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td className="p-0">
                  <span className="container-box">20 Feet Container</span>
                </td>
                <td className="p-0">
                  <InputGroup className="comman-input-group">
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
                </td>

                <td className="p-0">
                  <InputGroup className="comman-input-group">
                    <Form.Control
                      placeholder="Amount"
                      aria-label="Amount"
                      aria-describedby="basic-addon"
                      onChange={() => {}}
                      value={"35,000"}
                    />
                    <InputGroup.Text id="basic-addon">
                      <i>
                        <RupeeIcon />
                      </i>
                    </InputGroup.Text>
                  </InputGroup>
                </td>
              </tr>
            </tbody>
          </Table>
        );
      case "nhavasheva":
        return <></>;
      case "sachin":
        return <></>;
      case "tumb":
        return <></>;
      default:
        return null;
    }
  };
  return (
    <>
      {/* <div className="d-flex align-items-start justify-content-between "> */}
      <CommanBackPath
        title={"Service Charges"}
        path={path}
        onClick={() => redirect.back()}
        className="mb-4"
      />
      {/* <CommanButton
          icon={<PlusIcon color={"#FFFFFF"} width={14} height={14} />}
          title={"New Product"}
          className=""
        /> */}
      {/* </div> */}

      <div className="container-cover ">
        <div className="d-flex justify-content-between h-100">
          <Col xs={5}>
            <div className="cards-cover">
              <Card>
                <ListGroup defaultActiveKey="#1">
                  {cardList?.map((item, i) => (
                    <ListGroup.Item
                      action
                      href={item?.link}
                      key={i}
                      className="cursor-pointer"
                      onClick={() => setTabContent(item?.link)}
                    >
                      {item?.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </div>
          </Col>
          <Col xs={7} className="position-relative h-100">
            <div className="selected-content" style={{ maxWidth: "560px" }}>
              <Form className={`mb-0 `}>
                <Toggle
                  label={"Depend of Container"}
                  isChecked={dependContainer}
                   className={"long-toggle"}
                  onChange={handleContainerToggle}
                />
              </Form>

              {tabContent === "#1" && (
                <>
                  <Form className={`mt-3 mb-4`}>
                    <Toggle
                      label={"Depend of Port"}
                      className={"long-toggle"}
                      isChecked={dependPort}
                      onChange={handlePortToggle}
                    />
                  </Form>

                  <div className="pt-1">
                    {dependContainer && dependPort ? (
                      <>
                        <ContainerSubTitle
                          title={"Port Container Charges"}
                          className={"mb-4"}
                        />

                        <Tabs
                          activeKey={activePort}
                          onSelect={(k) => setActivePort(k)}
                          className="mb-4 horizontal-tab"
                          fill
                        >
                          {PortContainerCharges?.map((item, i) => (
                            <Tab
                              eventKey={item?.link}
                              title={item?.title}
                              key={i}
                            >
                              {renderPortContent()}
                            </Tab>
                          ))}
                        </Tabs>
                      </>
                    ) : dependContainer && !dependPort ? (
                      <Table
                        className="input-table"
                        style={{
                          borderCollapse: "separate",
                          borderSpacing: "30px 10px",
                        }}
                      >
                        <thead className="">
                          <tr className="">
                            <th className="p-0">
                              <span className="table-heading">Containers</span>
                            </th>
                            <th className="text-center p-0">
                              <span className="table-heading ">GST Rate</span>
                            </th>
                            <th className="text-center p-0">
                              <span className="table-heading">Amount</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-0">
                              <span className="container-box">
                                45 Feet Container
                              </span>
                            </td>
                            <td className="p-0" style={{ minWidth: "100px" }}>
                              <InputGroup className="comman-input-group">
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
                            </td>

                            <td className="p-0" style={{ minWidth: "120px" }}>
                              <InputGroup className="comman-input-group">
                                <Form.Control
                                  placeholder="Amount"
                                  aria-label="Amount"
                                  aria-describedby="basic-addon"
                                  onChange={() => {}}
                                  value={"50,000"}
                                />
                                <InputGroup.Text id="basic-addon">
                                  <i>
                                    <RupeeIcon />
                                  </i>
                                </InputGroup.Text>
                              </InputGroup>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-0">
                              <span className="container-box">
                                40 Feet Container
                              </span>
                            </td>
                            <td className="p-0">
                              <InputGroup className="comman-input-group">
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
                            </td>

                            <td className="p-0">
                              <InputGroup className="comman-input-group">
                                <Form.Control
                                  placeholder="Amount"
                                  aria-label="Amount"
                                  aria-describedby="basic-addon"
                                  onChange={() => {}}
                                  value={"40,000"}
                                />
                                <InputGroup.Text id="basic-addon">
                                  <i>
                                    <RupeeIcon />
                                  </i>
                                </InputGroup.Text>
                              </InputGroup>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-0">
                              <span className="container-box">
                                20 Feet Container
                              </span>
                            </td>
                            <td className="p-0">
                              <InputGroup className="comman-input-group">
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
                            </td>

                            <td className="p-0">
                              <InputGroup className="comman-input-group">
                                <Form.Control
                                  placeholder="Amount"
                                  aria-label="Amount"
                                  aria-describedby="basic-addon"
                                  onChange={() => {}}
                                  value={"35,000"}
                                />
                                <InputGroup.Text id="basic-addon">
                                  <i>
                                    <RupeeIcon />
                                  </i>
                                </InputGroup.Text>
                              </InputGroup>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    ) : (
                      <Table
                        className="input-table"
                        style={{
                          borderCollapse: "separate",
                          borderSpacing: "30px 10px",
                        }}
                      >
                        <thead className="">
                          <tr className="">
                            <th className="p-0">
                              <span className="table-heading">Charges</span>
                            </th>
                            <th className="text-center p-0">
                              <span className="table-heading ">GST Rate</span>
                            </th>
                            <th className="text-center p-0">
                              <span className="table-heading">Amount</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-0">
                              <span className="container-box">
                                Shipping Line Charge
                              </span>
                            </td>
                            <td className="p-0" style={{ minWidth: "100px" }}>
                              <InputGroup className="comman-input-group">
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
                            </td>

                            <td className="p-0" style={{ minWidth: "120px" }}>
                              <InputGroup className="comman-input-group">
                                <Form.Control
                                  placeholder="Amount"
                                  aria-label="Amount"
                                  aria-describedby="basic-addon"
                                  onChange={() => {}}
                                  value={"17,700"}
                                />
                                <InputGroup.Text id="basic-addon">
                                  <i>
                                    <RupeeIcon />
                                  </i>
                                </InputGroup.Text>
                              </InputGroup>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    )}
                  </div>
                </>
              )}
              {tabContent === "#2" && (
                <div className="pt-1">
                  <ContainerSubTitle
                    title={"Port Container Charges"}
                    className={"my-4 "}
                  />

                  <Tabs
                    activeKey={activePort}
                    onSelect={(k) => setActivePort(k)}
                    className="mb-4 horizontal-tab"
                    fill
                  >
                    {PortContainerCharges?.map((item, i) => (
                      <Tab eventKey={item?.link} title={item?.title} key={i}>
                        {renderPortContent()}
                      </Tab>
                    ))}
                  </Tabs>
                </div>
              )}
              {tabContent === "#3" && (
                <div className="pt-1">
                  <ContainerSubTitle
                    title={"Port Container Charges"}
                    className={"my-4 "}
                  />

                  <Tabs
                    activeKey={activePort}
                    onSelect={(k) => setActivePort(k)}
                    className="mb-4 horizontal-tab"
                    fill
                  >
                    {PortContainerCharges?.map((item, i) => (
                      <Tab eventKey={item?.link} title={item?.title} key={i}>
                        {renderPortContent()}
                      </Tab>
                    ))}
                  </Tabs>
                </div>
              )}
              {tabContent === "#4" && (
                <div className="pt-1 mt-4">
                  <Table
                    className="input-table "
                    bordered
                    style={{
                      borderCollapse: "separate",
                      borderSpacing: "30px 10px",
                      maxWidth: "560px",
                      overflow: "hidden",
                    }}
                  >
                    <thead>
                      <tr className="">
                        <th className="p-0">
                          <span className="table-heading">Containers</span>
                        </th>
                        <th className="text-center p-0">
                          <span className="table-heading ">GST Rate</span>
                        </th>
                        <th className="text-center p-0">
                          <span className="table-heading">Amount</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-0">
                          <span className="container-box">
                            45 Feet Container
                          </span>
                        </td>
                        <td className="p-0" style={{ minWidth: "100px" }}>
                          <InputGroup className="comman-input-group">
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
                        </td>

                        <td className="p-0" style={{ minWidth: "120px" }}>
                          <InputGroup className="comman-input-group">
                            <Form.Control
                              placeholder="Amount"
                              aria-label="Amount"
                              aria-describedby="basic-addon"
                              onChange={() => {}}
                              value={"1,750"}
                            />
                            <InputGroup.Text id="basic-addon">
                              <i>
                                <RupeeIcon />
                              </i>
                            </InputGroup.Text>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0">
                          <span className="container-box">
                            40 Feet Container
                          </span>
                        </td>
                        <td className="p-0">
                          <InputGroup className="comman-input-group">
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
                        </td>

                        <td className="p-0">
                          <InputGroup className="comman-input-group">
                            <Form.Control
                              placeholder="Amount"
                              aria-label="Amount"
                              aria-describedby="basic-addon"
                              onChange={() => {}}
                              value={"2,000"}
                            />
                            <InputGroup.Text id="basic-addon">
                              <i>
                                <RupeeIcon />
                              </i>
                            </InputGroup.Text>
                          </InputGroup>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0">
                          <span className="container-box">
                            20 Feet Container
                          </span>
                        </td>
                        <td className="p-0">
                          <InputGroup className="comman-input-group">
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
                        </td>

                        <td className="p-0">
                          <InputGroup className="comman-input-group">
                            <Form.Control
                              placeholder="Amount"
                              aria-label="Amount"
                              aria-describedby="basic-addon"
                              onChange={() => {}}
                              value={"600"}
                            />
                            <InputGroup.Text id="basic-addon">
                              <i>
                                <RupeeIcon />
                              </i>
                            </InputGroup.Text>
                          </InputGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
              {tabContent === "#5" && (
                <div className="pt-1 mt-4">
                  <Table
                    className="input-table "
                    bordered
                    style={{
                      borderCollapse: "separate",
                      borderSpacing: "30px 10px",
                      maxWidth: "560px",
                      overflow: "hidden",
                    }}
                  >
                    <thead>
                      <tr className="">
                        <th className="p-0">
                          <span className="table-heading">Charges</span>
                        </th>
                        <th className="text-center p-0">
                          <span className="table-heading ">GST Rate</span>
                        </th>
                        <th className="text-center p-0">
                          <span className="table-heading">Amount</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-0">
                          <span className="container-box">Agency</span>
                        </td>
                        <td className="p-0" style={{ minWidth: "100px" }}>
                          <InputGroup className="comman-input-group">
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
                        </td>

                        <td className="p-0" style={{ minWidth: "120px" }}>
                          <InputGroup className="comman-input-group">
                            <Form.Control
                              placeholder="Amount"
                              aria-label="Amount"
                              aria-describedby="basic-addon"
                              onChange={() => {}}
                              value={"17,700"}
                            />
                            <InputGroup.Text id="basic-addon">
                              <i>
                                <RupeeIcon />
                              </i>
                            </InputGroup.Text>
                          </InputGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
              {tabContent === "#6" && (
                <div className="pt-1 mt-4">
                  <Table
                    className="input-table "
                    bordered
                    style={{
                      borderCollapse: "separate",
                      borderSpacing: "30px 10px",
                      maxWidth: "560px",
                      overflow: "hidden",
                    }}
                  >
                    <thead>
                      <tr className="">
                        <th className="p-0">
                          <span className="table-heading">Charges</span>
                        </th>
                        <th className="text-center p-0">
                          <span className="table-heading ">GST Rate</span>
                        </th>
                        <th className="text-center p-0">
                          <span className="table-heading">Amount</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-0">
                          <span className="container-box">Endorsement</span>
                        </td>
                        <td className="p-0" style={{ minWidth: "100px" }}>
                          <InputGroup className="comman-input-group">
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
                        </td>

                        <td className="p-0" style={{ minWidth: "120px" }}>
                          <InputGroup className="comman-input-group">
                            <Form.Control
                              placeholder="Amount"
                              aria-label="Amount"
                              aria-describedby="basic-addon"
                              onChange={() => {}}
                              value={"50,000"}
                            />
                            <InputGroup.Text id="basic-addon">
                              <i>
                                <RupeeIcon />
                              </i>
                            </InputGroup.Text>
                          </InputGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
              {tabContent === "#7" && (
                <div className="pt-1 mt-4">
                  <Table
                    className="input-table "
                    bordered
                    style={{
                      borderCollapse: "separate",
                      borderSpacing: "30px 10px",
                      // maxWidth: "560px",
                    }}
                  >
                    <thead>
                      <tr className="">
                        <th className="p-0">
                          <span className="table-heading">
                            License Registration
                          </span>
                        </th>

                        <th className="text-center p-0">
                          <span className="table-heading">Amount</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-0">
                          <span className="container-box primary">
                            EPCG License Registration
                          </span>
                        </td>

                        <td className="p-0" style={{ width: "120px" }}>
                          <InputGroup className="comman-input-group">
                            <Form.Control
                              placeholder="Amount"
                              aria-label="Amount"
                              aria-describedby="basic-addon"
                              onChange={() => {}}
                              value={"0"}
                            />
                            <InputGroup.Text id="basic-addon">
                              <i>
                                <RupeeIcon />
                              </i>
                            </InputGroup.Text>
                          </InputGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table
                    className="input-table "
                    bordered
                    style={{
                      borderCollapse: "separate",
                      borderSpacing: "30px 10px",
                      // maxWidth: "560px",
                    }}
                  >
                    <thead>
                      <tr className="">
                        <th className="p-0">
                          <span className="table-heading">License Issue</span>
                        </th>

                        <th className="text-center p-0">
                          <span className="table-heading">Amount</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-0">
                          <span className="container-box primary">
                            EPCG License Issue
                          </span>
                        </td>

                        <td className="p-0" style={{ width: "120px" }}>
                          <InputGroup className="comman-input-group">
                            <Form.Control
                              placeholder="Amount"
                              aria-label="Amount"
                              aria-describedby="basic-addon"
                              onChange={() => {}}
                              value={"0"}
                            />
                            <InputGroup.Text id="basic-addon">
                              <i>
                                <RupeeIcon />
                              </i>
                            </InputGroup.Text>
                          </InputGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>{" "}
                  <Table
                    className="input-table "
                    bordered
                    style={{
                      borderCollapse: "separate",
                      borderSpacing: "30px 10px",
                      // maxWidth: "560px",
                    }}
                  >
                    <thead>
                      <tr className="">
                        <th className="p-0">
                          <span className="table-heading">
                            Installation Certificate
                          </span>
                        </th>

                        <th className="text-center p-0">
                          <span className="table-heading">Amount</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-0">
                          <span className="container-box primary">
                            Installation Certificate
                          </span>
                        </td>

                        <td className="p-0" style={{ width: "120px" }}>
                          <InputGroup className="comman-input-group">
                            <Form.Control
                              placeholder="Amount"
                              aria-label="Amount"
                              aria-describedby="basic-addon"
                              onChange={() => {}}
                              value={"0"}
                            />
                            <InputGroup.Text id="basic-addon">
                              <i>
                                <RupeeIcon />
                              </i>
                            </InputGroup.Text>
                          </InputGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
            <div className="d-flex gap-3 position-absolute container-buttons">
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
          </Col>
        </div>
      </div>
    </>
  );
};

export default ServiceCharges;
