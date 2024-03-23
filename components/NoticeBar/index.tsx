"use client";

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useNoticeStore } from "../../store/notice";
import Alert from "@mui/material/Alert";

const NoticeBar = () => {
  const notice = useNoticeStore((state: any) => state.notice);
  const addNotice = useNoticeStore((state: any) => state.addNotice);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={notice ? true : false}
      autoHideDuration={5000}
      onClose={() => addNotice("")}
    >
      <Alert
        onClose={() => addNotice("")}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {notice}
      </Alert>
    </Snackbar>
  );
};

export default NoticeBar;
