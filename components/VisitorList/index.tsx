"use client";

import React from "react";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { useStore } from "@/store/visitors";

const VisitorList = () => {
  const columns: GridColDef[] = [
    { field: "visitor", headerName: "Visitor", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "department", headerName: "Department", width: 450 },
  ];
  const visitors = useStore((state: any) => state.visitors);
  const ref = useGridApiRef();

  const removeVisitor = () => {
    console.log("test");
    console.log(ref.current.getSelectedRows());
  };

  return (
    <div className="border rounded-xl shadow-xl">
      <h1 className="text-xl p-4">Visitor list</h1>
      <div className="p-4">
        <Button variant="outlined" size="small" onClick={() => removeVisitor()}>
          Remove visitor
        </Button>
      </div>
      <div>
        <DataGrid
          apiRef={ref}
          rows={visitors}
          columns={columns}
          checkboxSelection
          sx={{
            border: 0,
          }}
        />
      </div>
    </div>
  );
};

export default VisitorList;
