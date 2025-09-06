import { DocIcon, PdfIcon } from "@/icons";

export const recordsPerPageOptions = [
  { value: 10, label: 10, isFixed: true },
  { value: 15, label: 15 },
  { value: 20, label: 20 },
  { value: 25, label: 25 },
];

export const PITermsOptions = [
  { value: "EXW", label: "EXW (Ex Work)" },
  { value: "FOB", label: "FOB (Freight on Board)" },
  { value: "CNF", label: "CNF (Cost and Freight)" },
  { value: "CIF", label: "CIF (Cost, Insurance and Freight)" },
];

export const searchSlectOptions = [
  {
    label: "Anant Pvt Ltd",
    value: "anant-pvt-ltd",
    subLabel: "anant patel",
    initials: "AN",
  },
  {
    label: "ABC Technology Pvt Ltd",
    value: "abc-tech",
    subLabel: "Yogesh Patel",
    initials: "AT",
  },
  { label: "New Customer", value: "new", isNew: true },
];

export const dummyFileData = [
  { icon: <PdfIcon />, name: "Demo.pdf", file_size: " 157.67 KB" },
   { icon: <DocIcon />, name: "Demo.doc", file_size: " 130.25 KB" },
];
