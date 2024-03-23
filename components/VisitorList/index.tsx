"use client";

import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { useStore } from "@/store/visitors";

const VisitorList = () => {
  const columns: GridColDef[] = [
    { field: "visitor", headerName: "Visitor", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "department", headerName: "Department", width: 250 },
  ];
  const visitors = useStore((state: any) => state.visitors);

  return (
    <div>
      <Button size="small" onClick={{}}>
        Remove visitor
      </Button>
      <DataGrid rows={visitors} columns={columns} checkboxSelection />
    </div>
  );
};

export default VisitorList;
