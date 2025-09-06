"use client";
import CommanBackPath from "@/components/common-components/comman-back-path/CommanBackPath";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import MainSubTitle from "@/components/common-components/main-sub-title/MainSubTitle";
import {
  DischargeColumns,
  DischargeData,
} from "@/constants/container/configuration/port/Port";
import {
  ProductColumns,
  ProductData,
} from "@/constants/container/configuration/shipping/ShippingData";
import {
  DeleteIcon,
  EditIcon,
  PlusIcon,
  TableBottomIcon,
  TableTopIcon,
} from "@/icons";
import { usePathname, useRouter } from "next/navigation";

import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ContainerModel from "./ContainerModel";
import {
  ContainerListColumns,
  ContainerListData,
} from "@/constants/container/configuration/containers/ContainerDetails";
import DeleteModel from "@/components/common-components/delete-model/DeleteModel";
import { useEffect } from "react";
import TableLoader from "@/components/common-components/table-loader/TableLoader";
import toast from "react-hot-toast";

const Containers = () => {
  const path = usePathname();
  const router = useRouter();

  const [openModel, setOpenModel] = useState(false);
  const [editItem, setEditItem] = useState("");

  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deleteItemName, setDeleteItemName] = useState("");


  // Open Add Container Modal
  const handlePort = () => {
    setOpenModel(true);
  };

  // Close Add Container Modal
  const handleModalClose = () => {
    setOpenModel(false);
  };

  // Open Delete Modal
  const handleDeleteModel = (item) => {
    setOpenDeleteModel(true);
  };

  // Close Delete Modal
  const handleDeleteModalClose = () => {
    setOpenDeleteModel(false);
  };

  // Final Delete Handler
  const handleFinalDelete = async () => {

  };

  // Open Edit Container Modal
  const handleEditItem = (item) => {
    setOpenModel(true);
  };

  const handleSort = () => {};
  return (
    <>
      <div>
        <div className="d-flex align-items-start justify-content-between mb-4">
          <CommanBackPath
            title={"Containers"}
            path={path}
            onClick={() => router.back()}
            className="m-0"
          />
          <CommanButton
            icon={<PlusIcon color={"#FFFFFF"} width={14} height={14} />}
            onClick={() => handlePort()}
            title={"New Container"}
            className=""
          />
        </div>

        <div className="container-cover">
          <div className="tbl-cover mb-5">
            <Table className="comman-table">
              <thead>
                <tr className="">
                  {ContainerListColumns?.map((item, i) => (
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
                {isLoading ? (
                  <tr>
                    <td colSpan={ContainerListColumns.length}>
                      <div style={{ height: "200px" }}>
                        {" "}
                        <TableLoader />{" "}
                      </div>
                    </td>
                  </tr>
                ) : data?.length === 0 ? (
                  <tr>
                    <td colSpan={ContainerListColumns.length}>
                      <p className="text-center m-0 py-3">No Records Found</p>
                    </td>
                  </tr>
                ) : (
                  data?.map((item, i) => (
                    <tr key={i}>
                      <td className="pe-3">
                        <span className="data">{i + 1}</span>
                      </td>
                      <td className="pe-3">
                        <span className="data">{item?.size} Feet</span>
                      </td>
                      <td className="pe-3">
                        <div className="cover d-flex gap-1">
                          <button
                            className="table-btn edit-btn"
                            onClick={() => handleEditItem(item)}
                          >
                            <EditIcon color={"#6C718A"} />
                          </button>
                          <button
                            className="table-btn delete-btn"
                            onClick={() => handleDeleteModel(item)}
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
      <ContainerModel
        open={openModel}
        onHide={handleModalClose}
        editItem={editItem}
      />
      <DeleteModel
        open={openDeleteModel}
        onHide={handleDeleteModalClose}
        title="Delete Container?"
        description={`The (${deleteItemName} Feet) Containers will be deleted and cannot be retrieved later. Are you sure about deleting them?`}
        handleFinalDelete={handleFinalDelete}
      />
    </>
  );
};

export default Containers;
