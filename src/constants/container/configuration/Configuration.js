import {
    BankIcon,
    BuildingIcon,
  ChargesIcon,
  ContainerIcon,
  DocumentIcon,
  HeartIcon,
  PortIcon,
  ProductIcon,
} from "@/icons";

export const generalConfiguration = [
  {
    icon: <PortIcon width={16} height={16} color={"#FFAE00"} />,
    title: "Port",
    icon_bg_color: "bg-yellow",
    link:"/port/"
  },
  {
    icon: <ProductIcon width={16} height={16} color={"#28C76F"} />,
    title: "Products",
    icon_bg_color: "bg-green",
    link:"/product/"
  },
  {
    icon: <HeartIcon width={16} height={16} color={"#0F345E"} />,
    title: "Services",
    icon_bg_color: "bg-primary",
    link:"/services/"
  },
  {
    icon: <ContainerIcon width={16} height={16} color={"#D11D1E"} />,
    title: "Container",
    icon_bg_color: "bg-red",
    link:"/container/"
  },
  {
    icon: <ChargesIcon width={16} height={16} color={"#0F345E"} />,
    title: "Service Charges",
    icon_bg_color: "bg-primary",
    link:"/service-charges/"
  },
];

export const companyConfiguration = [
  {
    icon: <BuildingIcon width={16} height={16} color={"#0F345E"} />,
    title: "Profile",
    icon_bg_color: "bg-primary",
    link:"/profile/"
  },
  {
    icon: <BankIcon width={16} height={16} color={"#D11D1E"} />,
    title: "Bank Details",
    icon_bg_color: "bg-red",
     link:"/bank-details/"
  },
  {
    icon: <DocumentIcon width={16} height={16} color={"#28C76F"} />,
    title: "Terms & Conditions",
    icon_bg_color: "bg-green",
     link:"/terms-and-conditions/"
  },
  
];
