"use client";

import React from "react";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { useStore } from "@/store/visitors";
import { useNoticeStore } from "@/store/notice";
import Typography from "@mui/material/Typography";
import clsx from "clsx";

const VisitorList = () => {
  const visitors = useStore((state: any) => state.visitors);
  const removeVisitors = useStore((state: any) => state.removeVisitors);
  const addNotice = useNoticeStore((state: any) => state.addNotice);
  const ref = useGridApiRef();

  const columns: GridColDef[] = [
    {
      field: "fullName",
      headerName: "Visitor",
      width: 250,
      sortable: false,
      filterable: false,
      renderCell: ({ value }) => <strong>{value}</strong>,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      sortable: false,
      filterable: false,
    },
    {
      field: "department",
      headerName: "Department",
      flex: 450,
      align: "right",
      headerAlign: "right",
      renderCell: ({ value }) => (
        <span
          className={clsx(
            "p-2 rounded-full border text-white text-sm",
            value === "Marketing" && "bg-[#2196F3]",
            value === "Sales" && "bg-[#0288D1]",
            value === "IT" && "bg-[#9C27B0]",
            value === "Management" && "bg-[#EF6C00]",
            value === "Accounting" && "bg-[#2E7D32]"
          )}
        >
          {value.toUpperCase()}
        </span>
      ),
      sortable: false,
      filterable: false,
    },
  ];

  const removeVisitor = () => {
    const rows = ref.current.getSelectedRows();
    removeVisitors(rows);
    addNotice("Visitor removed");
  };

  return (
    <div className="border rounded-xl shadow-xl w-full xl:w-2/3">
      <Typography variant="h4" sx={{ padding: 2 }}>
        Visitor management
      </Typography>
      {visitors.length > 0 ? (
        <>
          <div className="p-3">
            <Button
              variant="contained"
              size="small"
              onClick={() => removeVisitor()}
            >
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
              rowHeight={89}
            />
          </div>
        </>
      ) : (
        <div className="w-full p-20 justify-center flex text-gray-400">
          No visitors yet
        </div>
      )}
    </div>
  );
};

export default VisitorList;
