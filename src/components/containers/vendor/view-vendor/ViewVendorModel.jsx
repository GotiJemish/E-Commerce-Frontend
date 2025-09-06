"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./index.css";
import {
  ConvertIcon,
  DownloadIcon,
  EditIcon,
  EmailIcon,
  ModelCloseIcon,
  PrintIcon,
  RevisionIcon,
} from "@/icons";

import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";

import Link from "next/link";
import Toggle from "@/components/common-components/comman-long-toggle/LongToggle";
import PDFView from "./PDFView";
import NormalView from "./NormalView";

const ViewVendorModel = ({ open, onHide }) => {
  if (!open) return null;
  const [pdfView, setPdfView] = useState(false);

  const handlePdfView = () => {
    setPdfView(!pdfView);
  };
  const formatNumber = (value) => {
    if (value == null || isNaN(value)) return "-";
    const num = Number(value);
    const formatted = num.toLocaleString("en-IN");
    return num < 10 ? "0" + formatted : formatted;
  };
  return (
    <>
      <div className="custom-modal-overlay view-quotation">
        <div className="custom-modal">
          <Modal.Header>
            <div className="left-content">
              <h2 className="title fw-semibold">YOGI FABRICS</h2>
              <Link href="#" className="link fw-medium">
                HB-0000001 / 01
              </Link>
            </div>
            <div className="right-content">
              <Toggle
                label={"Show PDF View"}
                isChecked={pdfView}
                className={""}
                onChange={handlePdfView}
              />
              <ul className="list-unstyled buttons-list d-flex gap-2 align-items-center m-0 ms-1">
                <li>
                  <CommanButton
                    varient="secondary"
                    title="Send"
                    icon={
                      <EmailIcon color="#0F345E" size={14} stroke="#0F345E" />
                    }
                  />
                </li>
                <li>
                  <CommanButton
                    varient="secondary"
                    title="Print"
                    icon={<PrintIcon color="#0F345E" size={14} />}
                  />
                </li>
                <li>
                  <CommanButton
                    varient="secondary"
                    title="Edit"
                    icon={
                      <EditIcon
                        color="#0F345E"
                        size={14}
                        strokeWidth={1}
                        stroke="#0F345E"
                      />
                    }
                  />
                </li>
                <li>
                  <CommanButton
                    varient="secondary"
                    title="Download"
                    icon={<DownloadIcon color="#0F345E" size={14} />}
                  />
                </li>
                <li>
                  <CommanButton
                    varient="secondary"
                    title="Convert to Job"
                    icon={<ConvertIcon color="#0F345E" size={14} />}
                  />
                </li>
                <li>
                  <CommanButton
                    varient="secondary"
                    title="New Revision"
                    icon={<RevisionIcon color="#0F345E" size={14} />}
                  />
                </li>
              </ul>
              <button className="close-btn" onClick={onHide}>
                <ModelCloseIcon width={24} height={24} />
              </button>
            </div>
          </Modal.Header>
          <Modal.Body>
            {pdfView ? (
              <>
                <PDFView />
              </>
            ) : (
              <>
                <NormalView />
              </>
            )}
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
    </>
  );
};

export default ViewVendorModel;
