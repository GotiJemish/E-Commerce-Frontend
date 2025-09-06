"use client";
import CommanBackPath from "@/components/common-components/comman-back-path/CommanBackPath";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";

import { SettingsIcon, TableBottomIcon, TableTopIcon } from "@/icons";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useRef, useState } from "react";
import { Form, Table } from "react-bootstrap";
import {
  FreightColumn,
  FreightData,
  ServiceColumns,
  ServiceData,
} from "@/constants/container/configuration/service/ServiceContainer";

import "./index.css";
import CustomCheckbox from "@/components/common-components/custom-checkbox/CustomCheckbox";
const FreightList = () => {
  const path = usePathname();
  const redirect = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const handleSort = () => {};

  return (
    <>
      <CommanBackPath
        title={"Freight Configuration"}
        path={path}
        onClick={() => redirect.back()}
        className="mb-4"
      />

      <div className="container-cover">
        <div className="tbl-cover">
          <Table className="comman-table">
            <thead>
              <tr className="">
                {FreightColumn?.map((item, i) => (
                  <th
                    key={i}
                    className="py-1 p-0"
                    style={{ maxWidth: "300px" }}
                  >
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
              {FreightData?.map((item, i) => (
                <tr key={i}>
                  <td className="pe-3">
                    <span className="data">{item?.id}</span>
                  </td>
                  <td className="pe-3">
                    <span className="data">{item?.service_charge}</span>
                  </td>

                  <td className="pe-3  ">
                    {/* <Form.Check
                      // inline
                      // label="1"
                      className="custom-checkbox d-flex align-items-center my-1"
                      name="group1"
                      type={"checkbox"}
                      id={`inline-checkbox-${i}`}
                    /> */}
                    <CustomCheckbox id={i} name={"group1"} className={"my-1"}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
      </div>
    </>
  );
};

export default FreightList;
