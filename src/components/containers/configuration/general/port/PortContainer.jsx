"use client";
import CommanBackPath from "@/components/common-components/comman-back-path/CommanBackPath";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import MainSubTitle from "@/components/common-components/main-sub-title/MainSubTitle";
import {
  DischargeColumns,
  DischargeData,
} from "@/constants/container/configuration/port/Port";
import {
  DeleteIcon,
  EditIcon,
  PlusIcon,
  TableBottomIcon,
  TableTopIcon,
} from "@/icons";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import PortModel from "./PortModel";

import toast from "react-hot-toast";
import TableLoader from "@/components/common-components/table-loader/TableLoader";
import DeleteModel from "@/components/common-components/delete-model/DeleteModel";

const PortContainer = () => {
  const path = usePathname();
  const router = useRouter();

  const [portType, setPortType] = useState("");
  const [openAddPortModel, setOpenAddPortModel] = useState(false);

  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [deleteType, setDeleteType] = useState("");
  const [deletePortName, setDeletePortName] = useState("");
  const [deletePortId, setDeletePortId] = useState("");

  const [editType, setEditType] = useState("");
  const [editItem, setEditItem] = useState("");

  const handleSort = () => {};

  // API for PORT Listing
 

  // Open Add Port Handler
  const handlePortOpen = (type) => {
  
  };

  // Close Add Port Handler
  const handlePortClose = () => {
  
  };

  // Open Edit Port Handler
  const handleEditPort = (item, type) => {
   
  };

  // Open Delete Port Handler
  const handleDeletePort = (item, id, type) => {

  };

  // close Delete Modal
  const handleDeleteModalClose = () => {
    setOpenDeleteModel(false);
  };

  // Final Delete Port Handler
  const handleFinalDelete = async () => {
  
  };

  return (
    <>
      <div>
        <CommanBackPath
          title={"Ports"}
          path={path}
          onClick={() => router.push("/configuration")}
          className="mb-4"
        />
        <div className="container-cover">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <MainSubTitle title={"Port Of Discharge"} className={"mb-0"} />
            <CommanButton
              icon={<PlusIcon color={"#FFFFFF"} width={14} height={14} />}
              onClick={() => handlePortOpen("discharge")}
              title={"New port"}
            />
          </div>

          <div className="tbl-cover mb-5">
            <Table className="comman-table">
              <thead>
                <tr className="">
                  {DischargeColumns?.map((item, i) => (
                    <th key={i} className="py-1 p-0">
                      <div className="sortable-column py-2 pe-3">
                        <span className="table-heading">{item.label}</span>
                        {item?.isSortable && (
                          <div className="sort-icons me-1">
                            <button
                              className="d-flex align-items-center justify-content-center table-sort-btn "
                              onClick={() => handleSort(item.key)}
                            >
                              <TableTopIcon color={"#6C718A"} />
                            </button>
                            <button
                              className="d-flex align-items-center justify-content-center table-sort-btn "
                              onClick={() => handleSort(item.key)}
                            >
                              <TableBottomIcon color={"#6C718A"} />
                            </button>
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dischargeLoading ? (
                  <tr>
                    <td colSpan={DischargeColumns.length}>
                      <div style={{ height: "200px" }}>
                        {" "}
                        <TableLoader />{" "}
                      </div>
                    </td>
                  </tr>
                ) : dischargePortList?.data?.length === 0 ? (
                  <tr>
                    <td colSpan={DischargeColumns.length}>
                      <p className="text-center m-0 py-3">No Records Found</p>
                    </td>
                  </tr>
                ) : (
                  dischargePortList?.data?.map((item, i) => (
                    <tr key={i}>
                      <td className="pe-3">
                        <span className="data">{i + 1}</span>
                      </td>
                      <td className="pe-3">
                        <span className="data">{item?.name}</span>
                      </td>
                      <td className="pe-3">
                        <span className="data">{item?.short_code}</span>
                      </td>
                      <td className="pe-3">
                        <span className="data">
                          {item?.stamp_duty === true
                            ? "Yes"
                            : item?.stamp_duty === false
                            ? "No"
                            : ""}
                        </span>
                      </td>
                      <td className="pe-3">
                        <div className="cover d-flex gap-1">
                          <button
                            className="table-btn edit-btn"
                            onClick={() => handleEditPort(item, "discharge")}
                          >
                            <EditIcon color={"#6C718A"} />
                          </button>
                          <button
                            className="table-btn delete-btn"
                            onClick={() =>
                              handleDeletePort(item, item?.id, "discharge")
                            }
                          >
                            <DeleteIcon color={"#6C718A"} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <MainSubTitle title={"Port Of Loading"} className={"mb-0"} />
            <CommanButton
              icon={<PlusIcon color={"#FFFFFF"} width={14} height={14} />}
              onClick={() => handlePortOpen("loading")}
              title={"New port"}
            />
          </div>

          <div className="tbl-cover">
            <Table className="comman-table">
              <thead>
                <tr className="">
                  {DischargeColumns?.map((item, i) => (
                    <th key={i} className="py-1 p-0">
                      <div className="sortable-column py-2 pe-3">
                        <span className="table-heading">{item.label}</span>
                        {item?.isSortable && (
                          <div className="sort-icons me-1">
                            <button
                              className="d-flex align-items-center justify-content-center table-sort-btn "
                              onClick={() => handleSort(item.key)}
                            >
                              <TableTopIcon color={"#6C718A"} />
                            </button>
                            <button
                              className="d-flex align-items-center justify-content-center table-sort-btn "
                              onClick={() => handleSort(item.key)}
                            >
                              <TableBottomIcon color={"#6C718A"} />
                            </button>
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loadingPortLoader ? (
                  <tr>
                    <td colSpan={DischargeColumns.length}>
                      <div style={{ height: "200px" }}>
                        {" "}
                        <TableLoader />{" "}
                      </div>
                    </td>
                  </tr>
                ) : loadingPortList?.data?.length === 0 ? (
                  <tr>
                    <td colSpan={DischargeColumns.length}>
                      <p className="text-center m-0 py-3">No Records Found</p>
                    </td>
                  </tr>
                ) : (
                  loadingPortList?.data?.map((item, i) => (
                    <tr key={i}>
                      <td className="pe-3">
                        <span className="data">{i + 1}</span>
                      </td>
                      <td className="pe-3">
                        <span className="data">{item?.name}</span>
                      </td>
                      <td className="pe-3">
                        <span className="data">{item?.short_code}</span>
                      </td>
                      <td className="pe-3">
                        <span className="data">
                          {item?.stamp_duty === true
                            ? "Yes"
                            : item?.stamp_duty === false
                            ? "No"
                            : ""}
                        </span>
                      </td>
                      <td className="pe-3">
                        <div className="cover d-flex gap-1 ">
                          <button
                            className="table-btn edit-btn"
                            onClick={() => handleEditPort(item, "loading")}
                          >
                            <EditIcon color={"#6C718A"} />
                          </button>
                          <button
                            className="table-btn delete-btn"
                            onClick={() =>
                              handleDeletePort(item, item?.id, "loading")
                            }
                          >
                            <DeleteIcon color={"#6C718A"} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <PortModel
        open={openAddPortModel}
        onHide={handlePortClose}
        type={portType}
        editItem={editItem}
        editType={editType}
      />
      <DeleteModel
        open={openDeleteModel}
        onHide={handleDeleteModalClose}
        title={`Delete ${deleteType} Port`}
        description={`Are you sure you want to delete the (${deletePortName}) Port?`}
        handleFinalDelete={handleFinalDelete}
      />
    </>
  );
};

export default PortContainer;
