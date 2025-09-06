"use client";
import React, { useState } from "react";
import { Tab, Table, Tabs } from "react-bootstrap";
import { CalenderIcon, CustomarIcon, LocationIcon, UserIcon } from "@/icons";
import {
  historyData,
  revisionData,
  viewQuotationTableData,
} from "@/constants/container/quotation";
import Link from "next/link";
const NormalView = () => {
  const formatNumber = (value) => {
    if (value == null || isNaN(value)) return "-";
    const num = Number(value);
    const formatted = num.toLocaleString("en-IN");
    return num < 10 ? "0" + formatted : formatted;
  };
  return (
    <div className="d-flex">
      <div className="p-4 main-content">
        <div className="row g-12">
          <div className="col-12">
            <div className="comman-card w-100">
              <h4 className="primary fw-semibold mb-4">Basic Details</h4>
              <div className="d-flex align-items-center gap-28 pb-1">
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">Quotation ID</p>
                  <Link href="#" className="link-hover fw-bold">
                    #HB-0000001
                  </Link>
                </div>
                <hr className="hr-vertical" style={{ minHeight: "52px" }} />
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">Quotation Date</p>
                  <div className="d-flex align-items-center gap-1">
                    <i className="d-flex align-items-center justify-content-center">
                      <CalenderIcon />
                    </i>
                    <span className="text-primary fw-medium">08-04-2025</span>
                  </div>
                </div>
                <hr className="hr-vertical" style={{ minHeight: "52px" }} />
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">Quotation Expiry Date</p>
                  <div className="d-flex align-items-center gap-1">
                    <i className="d-flex align-items-center justify-content-center">
                      <CalenderIcon />
                    </i>
                    <span className="text-primary fw-medium">08-05-2025</span>
                  </div>
                </div>
                <hr className="hr-vertical" style={{ minHeight: "52px" }} />

                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">Sales Person</p>

                  <span className=" fw-medium text-primary">
                    Haresh Gadhiya
                  </span>
                </div>
                <hr className="hr-vertical" style={{ minHeight: "52px" }} />
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">Dealer Name</p>

                  <span className=" fw-medium text-primary">
                    ABC Private Limited
                  </span>
                </div>
              </div>
              <hr className="hr-border-100 my-4" />

              <h4 className="primary fw-semibold mt-1 mb-4">
                Importer / Consignee Details
              </h4>
              <div className="d-flex align-items-center gap-28 pb-1">
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">Company Name</p>
                  <div className="d-flex align-items-center gap-1">
                    <i className="d-flex align-items-center justify-content-center">
                      <CustomarIcon />
                    </i>
                    <span className="text-primary fw-medium">
                      Brilliant Home Designs Private Limited
                    </span>
                  </div>
                </div>
                <hr className="hr-vertical" style={{ minHeight: "52px" }} />
                <div className="d-flex flex-column gap-1 me-4">
                  <p className="fw-medium">Address</p>
                  <div className="d-flex align-items-center gap-1">
                    <i className="d-flex align-items-center justify-content-center">
                      <LocationIcon />
                    </i>
                    <span className="text-primary fw-medium">
                      Plot No. 72 to 82, Maruti Industrial Estate-1, Laskana,
                      Kamrej, Surat, Gujarat, Pin - 394185, India.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="comman-card">
              <h4 className="primary fw-semibold mb-4">Container Details</h4>
              <div className="d-flex align-items-center gap-28 pb-1">
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">45 Feet Container</p>
                  <span className="text-primary fw-medium">01</span>
                </div>
                <hr className="hr-vertical" style={{ minHeight: "52px" }} />
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">40 Feet Container</p>
                  <span className="text-primary fw-medium">00</span>
                </div>
                <hr className="hr-vertical" style={{ minHeight: "52px" }} />
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">20 Feet Container</p>
                  <span className="text-primary fw-medium">01</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="comman-card">
              <h4 className="primary fw-semibold mb-4">Port</h4>
              <div className="d-flex align-items-center gap-28 pb-1">
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">Loading Port</p>
                  <span className="text-primary fw-medium">Nhavasheva</span>
                </div>
                <hr className="hr-vertical" style={{ minHeight: "52px" }} />
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">Discharge Port</p>
                  <span className="text-primary fw-medium">Nhavasheva</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="comman-card">
              <h4 className="primary fw-semibold mb-4">Exchange Rate</h4>
              <div className="d-flex flex-column gap-1 pb-1">
                <p className="fw-medium">Price</p>
                <span className="text-primary fw-medium">₹88.5</span>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="comman-card">
              <h4 className="primary fw-semibold mb-4">Service Details</h4>

              <div className="d-flex flex-column gap-1  pb-1">
                <p className="fw-medium">Service Name</p>
                <span className="text-primary fw-medium">
                  Freight + Clearance
                </span>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="comman-card">
              <h4 className="primary fw-semibold mb-4">PI Details</h4>
              <div className="d-flex align-items-center gap-28 pb-1">
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">PI No.</p>
                  <span className="text-primary fw-medium">#1258684320</span>
                </div>
                <hr className="hr-vertical" style={{ minHeight: "52px" }} />
                <div className="d-flex flex-column gap-1">
                  <p className="fw-medium">PI Type</p>
                  <span className="text-primary fw-medium">
                    FOB (Freight on Board)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="comman-card">
              <h4 className="primary fw-semibold mb-4">Product Details</h4>
              <div className="d-flex flex-column gap-1 pb-1">
                <p className="fw-medium">Product Name</p>
                <span className="text-primary fw-medium">
                  Used and Recondition Textile Machine
                </span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="comman-card w-100">
              <h4 className="primary fw-semibold mb-4">Summary</h4>
              <div className="summary-table-cover">
                <Table className="summary-table" bordered>
                  <thead>
                    <tr className="">
                      <th className="p-3 border-none">
                        <span className="text-secondary fw-normal">Item</span>
                      </th>
                      <th className="p-3 text-end">
                        <span className="text-secondary fw-normal">
                          Quantity
                        </span>
                      </th>
                      <th className="p-3 text-end">
                        <span className="text-secondary fw-normal">Rate</span>
                      </th>
                      <th className="p-3 text-end">
                        <span className="text-secondary fw-normal">
                          Creditable GST
                        </span>
                      </th>
                      <th className="p-3 text-end border-none">
                        <span className="text-secondary fw-normal">Amount</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {viewQuotationTableData?.map((data, i) => (
                      <tr className="position-relative" key={i}>
                        <td className="border-none">
                          <p className="text-primary">{data?.item}</p>
                        </td>
                        <td className="text-end text-primary">
                          <p>{formatNumber(data?.quantity)}</p>
                        </td>
                        <td className="text-end text-primary">
                          <p>{formatNumber(data?.rate)}</p>
                        </td>
                        <td>
                          <p className="text-end text-primary">
                            {formatNumber(data?.creditable_gst)}
                          </p>
                        </td>
                        <td className="border-none">
                          <p className="fw-medium text-end text-primary">
                            ₹{formatNumber(data?.amount)}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2} className="border-none"></td>
                      <td className="border-none text-center fw-semibold py-3">
                        <span className="fw-semibold text-primary">
                          Total Amount
                        </span>
                      </td>
                      <td className="border-none text-end fw-normal py-3">
                        <span className="text-primary">₹22,823.00</span>
                      </td>
                      <td className="border-none text-end fw-semibold p-3 ">
                        <span className="fw-bold text-primary">
                          ₹3,37,450.00
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="hr-vertical" style={{ margin: "24px 10px" }} />
      <div className="side-content">
        <div className="comman-card p-0">
          <h4 className="side-title p-4">Quotation Details</h4>
          <hr className="hr-primary mb-3" />
          <Tabs
            defaultActiveKey="revision"
            id="uncontrolled-tab-example"
            className="mb-0"
            fill
          >
            <Tab eventKey="revision" title="Revision" className="">
              {revisionData?.map((item, i) => (
                <div className="section py-3 px-4" key={i}>
                  <div className="d-flex justify-content-between">
                    <h4 className="text-primary fw-medium">{item?.name}</h4>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="icon">
                        <CalenderIcon
                          color="#0F345E"
                          stroke="#0F345E"
                          size={14}
                        />
                      </i>
                      <span>{item?.created_on}</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4 className="primary fw-medium">{item?.id}</h4>

                    <span className="green fw-medium">₹{item?.amount}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="mb-2 text-primary">Updated By</p>
                      <div className="d-flex gap-2 align-items-center">
                        <i className="icon">
                          <UserIcon color="#0F345E" size={14} />
                        </i>
                        <span>{item?.update_by}</span>
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-primary text-end">Updated on</p>
                      <div className="d-flex gap-2 align-items-center">
                        <i className="icon">
                          <CalenderIcon
                            color="#0F345E"
                            stroke="#0F345E"
                            size={14}
                          />
                        </i>
                        <span>{item?.last_update}</span>
                      </div>
                    </div>
                  </div>

                  {/* green */}
                </div>
              ))}
            </Tab>
            <Tab eventKey="history" title="History">
              <div className="p-4 history-cover-data">
                {historyData?.map((item, i) => (
                  <div className="part" key={i}>
                    <h5 className="text-primary">{item?.date}</h5>
                    {item?.actions?.map((action, i) => (
                      <div key={i}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div>
                            {action?.revision && (
                              <p className="bullet">
                                Revision Quotation Created by{" "}
                                <strong className="fw-medium text-primary">
                                  {action.name}
                                </strong>
                              </p>
                            )}
                            {action?.update && (
                              <p className="bullet">
                                Quotation Updated by{" "}
                                <strong className="fw-medium text-primary">
                                  {action.name}
                                </strong>
                              </p>
                            )}
                            {action?.create && (
                              <p className="bullet">
                                Quotation Created by{" "}
                                <strong className="fw-medium text-primary">
                                  {action.name}
                                </strong>
                              </p>
                            )}
                          </div>
                          <span>{action?.time}</span>
                        </div>

                        {action?.update ? (
                          <p className=" ms-3">
                            Notes :{" "}
                            <span className="primary">{action?.notes}</span>
                          </p>
                        ) : (
                          <h4 className="primary fw-medium ms-3">
                            {action?.id}
                          </h4>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>

        {/* for Insurance Calculation end */}
      </div>
    </div>
  );
};

export default NormalView;
