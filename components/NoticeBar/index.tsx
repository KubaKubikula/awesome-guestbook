"use client";

import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useNoticeStore } from "../../store/notice";

const NoticeBar = ({ message }: { message: string }) => {
  const notice = useNoticeStore((state: any) => state.notice);
  const addNotice = useNoticeStore((state: any) => state.addNotice);
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={notice ? true : false}
      autoHideDuration={5000}
      message={notice}
      onClose={() => addNotice("")}
    />
  );
};

export default NoticeBar;
