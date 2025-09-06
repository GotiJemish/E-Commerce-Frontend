"use client";
import CommanBackPath from "@/components/common-components/comman-back-path/CommanBackPath";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";

import { SettingsIcon, TableBottomIcon, TableTopIcon } from "@/icons";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import {
  ServiceColumns,
  ServiceData,
} from "@/constants/container/configuration/service/ServiceContainer";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ServiceContainer = () => {
  const path = usePathname();
  const redirect = useRouter();

  const handleSort = () => {};
  
  return (
    <>
      <div>
        <CommanBackPath
          title={"Services"}
          path={path}
          onClick={() => redirect.back()}
          className="mb-4"
        />

        <div className="container-cover">
          <div className="tbl-cover mb-5">
            <Table className="comman-table">
              <thead>
                <tr className="">
                  {ServiceColumns?.map((item, i) => (
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
                {ServiceData?.map((item, i) => {
                  // {console.log("item",item)}
                  return (
                    <tr
                    key={i}
                    className="cursor-pointer"
                    onClick={() => redirect.push(`services/${item.link}`)}
                  >
                    <td className="pe-3">
                      <span className="data">{item?.id}</span>
                    </td>
                    <td className="pe-3">
                      <span className="data">{item?.service_name}</span>
                    </td>

                    <td className="pe-3">
                      <div className="cover d-flex gap-1">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id={`tooltip-${i}`}>Configuration</Tooltip>
                          }
                        >
                          <button className="table-btn edit-btn">
                            <SettingsIcon color={"#6C718A"} />
                          </button>
                        </OverlayTrigger>
                      </div>
                    </td>
                  </tr>
                  )
                  
})}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      {/* <ShippingModel open={openModel} onHide={handleModalClose} /> */}
    </>
  );
};

export default ServiceContainer;
