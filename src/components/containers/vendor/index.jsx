"use client";
import CommanPaginaion from "@/components/common-components/comman-pagination/CommanPagination";
import CommanSearch from "@/components/common-components/comman-search/CommanSearch";
import CommanButton from "@/components/common-components/buttons/common-button/CommanButton";
import CustomCheckbox from "@/components/common-components/custom-checkbox/CustomCheckbox";
import DeleteModel from "@/components/common-components/delete-model/DeleteModel";
// import CommanDropdown from "@/components/common-components/dropdown/CommanDropdown";
import FilterButton from "@/components/common-components/buttons/filter-btn/FilterButton";
import MainSubTitle from "@/components/common-components/main-sub-title/MainSubTitle";
// import StatusChip from "@/components/common-components/status-chip/StatusChip";
import TableWinget from "@/components/common-components/table-winget/TableWinget";
import {
  QuotationTableColumn,
  QuotationTableData,
} from "@/constants/container/quotation";
import {
  // CalenderIcon,
  DeleteIcon,
  // DocumentIcon,
  DocumentPlusIcon,
  DropDownIcon,
  EditIcon,
  // EditIcon,
  FilterIcon,
  PlusIcon,
  TableBottomIcon,
  TableTopIcon,
} from "@/icons";
// import moment from "moment";

import React, { useEffect, useState } from "react";

// import CommanSelect_01 from "@/components/common-components/new-comman-select/CommanSelect_01";

// import CommanSelect_01_Client from "@/components/common-components/new-comman-select/Select_01_client";
// import CommanDatePicker from "@/components/common-components/common-date-picker/CommanDatePicker";
import { recordsPerPageOptions } from "@/constants/comman/comman";
import moment from "moment";
import StatusChip from "@/components/common-components/status-chip/StatusChip";
import ViewQuotationModel from "./view-vendor/ViewVendorModel";
import withAuth from "@/components/hocs/Auth/withAuth";
import { connect } from "react-redux";
import { getVendorList } from "@/store/slice/vendorSlice";
import ViewVendorModel from "./view-vendor/ViewVendorModel";
import NewVendorModel from "./new-vendor/NewVendorModel";
import Table from "@/components/common-components/table/Table";
import { vendorListColumns } from "./constants";
import CustomTable from "@/components/common-components/table/Table";
const VendorModule = ({ getVendors, loading, list }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewQuotation, setViewQuotation] = useState(false);
  const [limit, setLimit] = useState({ value: 10, label: 10 });
  const [newQuotation, setNewQuotation] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [client, setClient] = useState(false);
 
  const total = QuotationTableData.length;
  const date = new Date().getTime();

  const handleDeleteModel = () => {
    setDeleteOpen(true);
  };
  const handleDeleteModelClose = () => {
    setDeleteOpen(close);
  };
  const handleSelectContacts = (e, item) => {};

  const handleChange = () => {};
  const handlePageChange = () => {};
  const handleNewQuotation = () => {
    setNewQuotation(true);
  };
  const handleCloseNewQuotation = () => {
    setNewQuotation(false);
  };
  const handleCloseViewQuotation = () => {
    setViewQuotation(false);
  };

  useEffect(() => {
    getVendors(); // fetch vendors

    setClient(true);
  }, []);
  if (!client) {
    return null;
  }

  // console.log(list);
  return (
    <>
      {loading && <p>Loading...</p>}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <MainSubTitle title={"All Quotation"} className="m-0" />

        <div className="d-flex align-items-center gap-4">
          <CommanButton
            title="Delete"
            varient="danger"
            icon={<DeleteIcon color={"#D11D1E"} width={14} height={14} />}
            onClick={() => {}}
          />
          <CommanSearch placeholder={"Search quotation..."} />
          <FilterButton icon={<FilterIcon />} />

          <CommanButton
            title="New Quotation"
            icon={<PlusIcon color={"#FFFFFF"} width={14} height={14} />}
            onClick={handleNewQuotation}
          />
        </div>
      </div>
      <div className="d-flex mb-4 pb-4">
        <TableWinget
          title={"Total Quotation"}
          number={"0"}
          icon={<DocumentPlusIcon />}
        />
      </div>
      <CustomTable theads={vendorListColumns} data={list} hasSelectable hasAction />
      <DeleteModel
        open={deleteOpen}
        onHide={handleDeleteModelClose}
        title={"Delete Quotation?"}
        description={"Deleting this quotation will erase it from the database."}
      />
      <NewVendorModel open={newQuotation} onHide={handleCloseNewQuotation} />
      <ViewVendorModel open={viewQuotation} onHide={handleCloseViewQuotation} />
    </>
  );
};



const mapStateToProps = (state) => ({
  loading: state.vendor.loading,
  list: state.vendor.vendorList,
});
const mapDispatchToProps = (dispatch) => ({
  getVendors: () => dispatch(getVendorList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth(VendorModule));
