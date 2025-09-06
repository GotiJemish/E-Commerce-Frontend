import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./index.css";
import { PreviousIcon } from "@/icons";

const CommanBackPath = (props) => {
  const breadcrumbData = props?.path.split("/").filter((e) => e);

  return (
    <div className={`comman-back-path ${props?.className && props?.className}`}>
      <div className=" d-flex align-items-center gap-1 mb-1">
        <i onClick={props?.onClick} className="cursor-pointer">
          <PreviousIcon color={"#0F345E"} />
        </i>
        <h3 className="title text-capitalize">{props?.title}</h3>
      </div>
      <Breadcrumb className="ms-4">
        {breadcrumbData?.map((path, i) => {
          const absolutePath = `/${breadcrumbData.slice(0, i + 1).join("/")}`;
          const formatPath = (path) =>
            path.replace(/-/g, " ").replace("and", "&");
          // console.log("absolutePath", absolutePath);
          return (
            <Breadcrumb.Item
              href={absolutePath}
              key={i}
              active={i === breadcrumbData.length - 1}
              className="text-capitalize"
            >
              {formatPath(path)}
            </Breadcrumb.Item>
          );
        })}

        {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
      </Breadcrumb>
    </div>
  );
};

export default CommanBackPath;
