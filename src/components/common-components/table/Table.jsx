import {
  QuotationTableColumn,
  QuotationTableData,
} from "@/constants/container/quotation";
import React from "react";
import "./table.css";
import CustomCheckbox from "../custom-checkbox/CustomCheckbox";
import { DeleteIcon, DropDownIcon, EditIcon, TableTopIcon } from "@/icons";
import StatusChip from "../status-chip/StatusChip";
import CommanPagination from "../comman-pagination/CommanPagination";
import { Form, Table } from "react-bootstrap";
import Select from "react-select";
import { recordsPerPageOptions } from "@/constants/comman/comman";

const CustomTable = ({ theads = [], hasSelectable, hasAction, data }) => {
  const handleSort = (type, key) => {};
  return (
    <>
      <div className="tbl-cover mb-5">
        <Table className="checkbox-table">
          <thead>
            <tr className="">
              {hasSelectable && (
                <th className="py-1 p-0">
                  <CustomCheckbox
                    // onChange={(e) => handleSelectContacts(e, item)}
                    // checked={selectedItems.some(
                    //   (contact) => contact.id === item.id
                    // )}
                    className="py-2"
                  />
                </th>
              )}

              {theads?.map((item, i) => (
                <th key={i} className="py-1 p-0">
                  <div className="sortable-column py-2 pe-3">
                    <span className="table-heading">{item.label}</span>
                    {item?.isSortable && (
                      <div className="sort-icons me-1">
                        <button
                          className="d-flex align-items-center justify-content-center table-sort-btn "
                          onClick={() => handleSort(item.type, item.key)}
                        >
                          <TableTopIcon color={"#6C718A"} />
                        </button>
                        <button
                          className="d-flex align-items-center justify-content-center table-sort-btn down"
                          onClick={() => handleSort(item.type, item.key)}
                        >
                          <TableTopIcon color={"#6C718A"} />
                        </button>
                      </div>
                    )}
                  </div>
                </th>
              ))}
              {hasAction && (
                <th className="py-1 p-0 pe-3 ">
                  <span className="table-heading">Action</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data?.slice(0, 10)?.map((item, i) => (
              <tr
                key={i}
                // onClick={() => setViewQuotation(true)}
                className="cursor-pointer"
              >
                {hasSelectable && (
                  <td className="table-check ">
                    <CustomCheckbox
                      // onChange={(e) => handleSelectContacts(e, item)}
                      // checked={selectedItems.some(
                      //   (contact) => contact.id === item.id
                      // )}
                      className="py-1"
                    />
                  </td>
                )}
                {theads?.map((thead, i) => {
                  const cellData = item[thead.key];
                  //  switch (thead.type) {
                  //      case "time":
                  return (
                    <td className="pe-3" key={i}>
                      <span className="data">
                        {/* {item[thead.key] || "-"} */}
                        {typeof cellData === "object" && cellData !== null
                          ? cellData[thead.subKey] || "-"
                          : cellData || "-"}
                      </span>
                    </td>
                  );

                  //      default:
                  //          return (
                  //            <td className="pe-3">
                  //              <span className="data">
                  //                {item[thead.key] || "-"}
                  //              </span>
                  //            </td>
                  //          );
                  //  }
                })}

                {/* <td className="pe-3">
                 <a href="#" className="data text-uppercase">
                   {item?.q_id}
                 </a>
               </td>
               <td className="pe-3">
                 <a href="#" className="data">
                   {item?.c_id}
                 </a>
               </td>
               <td className="pe-3">
                 <a href="#" className="data">
                   {item?.c_name}
                 </a>
               </td>
               <td className="pe-3">
                 <span className="data">{item?.mobile}</span>
               </td>
               <td className="pe-3">
                 {item?.status !== "Sent" ? (
                   <StatusChip
                     chip="yellow"
                     title={item.status}
                     className="text-capitalize"
                   />
                 ) : (
                   <div>-</div>
                 )}
               </td>
               <td className="pe-3">
                 <span className="data">{item?.amount}</span>
               </td>
               <td className="pe-3">
                 <div className="date">
                    <p>{moment(date).format("DD/MM/YYYY")}</p>
                   <span>{moment(date).format("hh:mm A")}</span> 
                 </div>
               </td>
               <td className="pe-3">
                 <div className="date">
                   <p>{moment(date).format("DD/MM/YYYY")}</p>
                   <span>{moment(date).format("hh:mm A")}</span>
                 </div>
               </td> */}
                <td className="pe-3">
                  <div className="cover d-flex gap-1 ">
                    <button className="table-btn edit-btn">
                      <EditIcon color={"#6C718A"} />
                    </button>
                    <button
                      className="table-btn delete-btn"
                      onClick={() => handleDeleteModel(i)}
                    >
                      <DeleteIcon color={"#6C718A"} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {QuotationTableData?.length === 0 && (
              <tr>
                <td colSpan={11}>
                  <div className="d-flex justify-content-center align-itema-center">
                    <div
                      className="content text-center"
                      style={{ maxWidth: "400px" }}
                    >
                      <div className="image-cover text-center mb-2 pb-1">
                        <Image src={"/images/table/EmptyTable.svg"} />
                      </div>
                      <h3 className="main-sub-title mb-3">No Quotations Yet</h3>
                      <p className="gray-300">
                        You haven’t created any quotations. Start by sending
                        your first quotation to a customer.
                      </p>
                      <CommanButton
                        title={"Create Quotation"}
                        className="mt-4 mx-auto "
                      />
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot></tfoot>
        </Table>
      </div>
    </>
  );
};

export default CustomTable;
