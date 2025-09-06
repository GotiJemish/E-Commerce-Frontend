"use client";
import React from "react";
import "./index.css";
import MainSubTitle from "@/components/common-components/main-sub-title/MainSubTitle";
import SimpleWinget from "@/components/common-components/simple-winget/SimpleWinget";
import {
  companyConfiguration,
  generalConfiguration,
} from "@/constants/container/configuration/Configuration";
import { useRouter } from "next/navigation";
const Congfiguration = () => {
  const router = useRouter();

  return (
    <div className="page-cover d-flex flex-column">
      <div>
        <MainSubTitle title={"General Configuration"} />
        <div className="d-flex gap-4 w-100 flex-wrap">
          {generalConfiguration?.map((item, i) => (
            <SimpleWinget
              icon={item?.icon}
              title={item?.title}
              iconBgColor={item?.icon_bg_color}
              key={i}
              className={"w-100 cursor-pointer"}
              onClick={() => router.push(`configuration/${item?.link}`)}
            />
          ))}
        </div>
      </div>
      <div>
        <MainSubTitle title={"Company Configuration"} />
        <div className="d-flex gap-4 w-100 flex-wrap">
          {companyConfiguration?.map((item, i) => (
            <SimpleWinget
              icon={item?.icon}
              title={item?.title}
              iconBgColor={item?.icon_bg_color}
              key={i}
              className={"w-100 cursor-pointer"}
              onClick={() => router.push(`configuration/${item?.link}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Congfiguration;
