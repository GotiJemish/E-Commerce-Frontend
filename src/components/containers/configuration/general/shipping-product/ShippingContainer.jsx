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

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ShippingModel from "./ShippingModel";
import TableLoader from "@/components/common-components/table-loader/TableLoader";
import DeleteModel from "@/components/common-components/delete-model/DeleteModel";
import toast from "react-hot-toast";

const ShippingContainer = () => {
  const path = usePathname();
  const router = useRouter();

  const [openModel, setOpenModel] = useState(false);
  const [editItem, setEditItem] = useState("");

  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deleteItemName, setDeleteItemName] = useState("");
  const [deleteBtnDisabled, setDeleteBtnDisabled] = useState(false);

  const { isLoading, shippingProducts } = useSelector(
    (state) => state?.product
  );
  const total = useSelector(
    (state) => state?.product?.shippingProducts?.data?.total_records
  );



  const handlePort = () => {
    setOpenModel(true);
    setEditItem("");
  };
  const handleModalClose = () => {
    setOpenModel(false);
    setEditItem("");
  };

  const handleSort = () => {};

  // Open Delete Model
  const handleDeleteProduct = (item) => {
    setDeleteId(item?.id);
    setDeleteItemName(item?.name);
    setOpenDeleteModel(true);
  };

  // Close Delete Model
  const handleDeleteModalClose = () => {
    setOpenDeleteModel(false);
  };

  // Delete Product Final Handler
  const handleFinalDelete = async () => {

  };

  // Open Edit Product Handler
  const handleEditProduct = (item) => {
    setEditItem(item);
    setOpenModel(true);
  };

  return (
    <>
      <div className="d-flex align-items-start justify-content-between mb-4">
        <CommanBackPath
          title={"Shipping Products"}
          path={path}
          onClick={() => router.back()}
          className="m-0"
        />
        <CommanButton
          icon={<PlusIcon color={"#FFFFFF"} width={14} height={14} />}
          onClick={() => handlePort()}
          title={"New Product"}
          className=""
        />
      </div>

      <div className="container-cover">
        <div className="tbl-cover mb-5">
          <Table className="comman-table">
            <thead>
              <tr className="">
                {ProductColumns?.map((item, i) => (
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
                  <td colSpan={ProductColumns.length}>
                    <div style={{ height: "400px" }}>
                      {" "}
                      <TableLoader />{" "}
                    </div>
                  </td>
                </tr>
              ) : shippingProducts?.data?.data?.length === 0 ? (
                <tr>
                  <td colSpan={ProductColumns.length}>
                    <p className="text-center m-0 py-3">No Records Found</p>
                  </td>
                </tr>
              ) : (
                shippingProducts?.data?.data?.map((item, i) => (
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
                        {item?.cec_charge_applicable === true
                          ? "Yes"
                          : item?.cec_charge_applicable === false
                          ? "No"
                          : ""}
                      </span>
                    </td>
                    <td className="pe-3">
                      <div className="cover d-flex gap-1 ">
                        <button
                          className="table-btn edit-btn"
                          onClick={() => handleEditProduct(item)}
                        >
                          <EditIcon color={"#6C718A"} />
                        </button>
                        <button
                          className="table-btn delete-btn"
                          onClick={() => handleDeleteProduct(item)}
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
      <ShippingModel
        open={openModel}
        onHide={handleModalClose}
        editItem={editItem}
      />
      <DeleteModel
        open={openDeleteModel}
        onHide={handleDeleteModalClose}
        title={`Delete Product`}
        description={`Are you sure you want to delete the (${deleteItemName}) Product?`}
        handleFinalDelete={handleFinalDelete}
        btnDisable={deleteBtnDisabled}
      />
    </>
  );
};

export default ShippingContainer;
