import {
  BagIcon,
  BuildingIcon,
  CustomarIcon,
  DealIcon,
  HomeIcon,
  NoteIcon,
  SettingsIcon,
  TeamIcon,
} from "@/icons";

export const AdminSideBarLinks = [
  { text: "Dashboard", link: "/admin/", icon: <HomeIcon /> },
  { text: "Customer", link: "/admin/customer", icon: <CustomarIcon /> },
  { text: "Orders", link: "/admin/orders", icon: <NoteIcon /> },
  { text: "Jobs", link: "/admin/jobs", icon: <BagIcon /> },
  { text: "Vendors", link: "/admin/vendor", icon: <DealIcon /> },
  {
    text: "Team Management",
    link: "/admin/team-management",
    icon: <TeamIcon />,
  },
  { text: "Configuration", link: "/configuration", icon: <SettingsIcon /> },
];
export const VendorSidebarLinks = [
  { text: "Dashboard", link: "/vendor/", icon: <HomeIcon /> },
  { text: "Customer", link: "/vendor/customer", icon: <CustomarIcon /> },
  { text: "Orders", link: "/vendor/orders", icon: <NoteIcon /> },
  { text: "Jobs", link: "/vendor/jobs", icon: <BagIcon /> },
  { text: "Vendors", link: "/vendor/vendor", icon: <DealIcon /> },
  {
    text: "Team Management",
    link: "/vendor/team-management",
    icon: <TeamIcon />,
  },
  {
    text: "Configuration",
    link: "/vendor/configuration",
    icon: <SettingsIcon />,
  },
];