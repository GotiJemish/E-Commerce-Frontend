import dynamic from "next/dynamic";

const CommanSelect_01_Client = dynamic(() => import("./CommanSelect_01"), {
  ssr: false,
});

export default CommanSelect_01_Client;