


export const vendorListColumns = [
  { label: "Company Id", isSortable: true, type: "number", key: "id" },
  {
    label: "Company Name",
    isSortable: true,
    type: "name",
    key: "company_name",
  },
  {
    label: "Vendor Id",
    isSortable: true,
    type: "number",
    key: "user",
    subKey: "id",
  },
  {
    label: "Vendor Name",
    isSortable: true,
    type: "name",
    key: "user",
    subKey: "username",
  },
  {
    label: "vendor email",
    isSortable: true,
    type: "name",
    key: "user",
    subKey: "email",
  },
];