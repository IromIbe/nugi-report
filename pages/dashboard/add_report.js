import React from "react";
import styled from "styled-components";
import AddReport from "../../components/addReport/addReport";
import { GeneralContLayout } from "./general.style";

const ReportCont = styled.div``;

function AddReportPg() {
  return (
    <GeneralContLayout>
      <AddReport />
    </GeneralContLayout>
  );
}

export default AddReportPg;
