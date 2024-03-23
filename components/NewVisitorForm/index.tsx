"use client";

import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import RestoreIcon from "@mui/icons-material/Restore";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import { useStore, IVisitor, VisitorStateType } from "@/store/visitors";
import { useNoticeStore, NoticeStateType } from "@/store/notice";
import { InputsType } from "./types";

const NewVisitorForm = () => {
  const [department, setDepartment] = useState<string>("Marketing");
  const [agree, setAgree] = useState<boolean>(false);
  const [emailExists, setEmailExists] = useState<boolean>(false);
  const addVisitor = useStore((state: VisitorStateType) => state.addVisitor);
  const visitors = useStore((state: VisitorStateType) => state.visitors);
  const addNotice = useNoticeStore((state: NoticeStateType) => state.addNotice);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = (data) => {
    setEmailExists(false);
    const visitorsWithSameEmail = visitors.filter(
      (visitor: IVisitor) => visitor.email === data.email
    );
    if (visitorsWithSameEmail.length > 0) {
      setEmailExists(true);
      return false;
    }
    addVisitor(data);
    addNotice("Visitor added");
  };

  return (
    <div className="border p-4 rounded-xl shadow-xl flex flex-col h-min w-full xl:w-1/3">
      <Typography variant="h6" sx={{ paddingBottom: 0.25 }}>
        Add new visitor
      </Typography>
      <Typography variant="subtitle1" sx={{ paddingBottom: 2 }}>
        Fill name, email address and the department
      </Typography>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        {errors.fullName && (
          <Alert severity="error">{errors.fullName.message}</Alert>
        )}
        <TextField
          {...register("fullName", { required: "Full Name is required" })}
          label="Full Name"
          variant="outlined"
        />
        {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
        {emailExists && (
          <Alert severity="error">User with this email already exists</Alert>
        )}
        <TextField
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
          label="Email address"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            {...register("department")}
            value={department}
            label="Department"
            onChange={(e) => setDepartment(e.target.value)}
          >
            <MenuItem value={"Marketing"}>Marketing</MenuItem>
            <MenuItem value={"IT"}>IT</MenuItem>
            <MenuItem value={"Sales"}>Sales</MenuItem>
            <MenuItem value={"Management"}>Management</MenuItem>
            <MenuItem value={"Accounting"}>Accounting</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          required
          control={
            <Checkbox checked={agree} onChange={() => setAgree(!agree)} />
          }
          label="I agree to be added to the table"
        />
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => {
              reset();
              setAgree(false);
            }}
            variant="outlined"
            startIcon={<RestoreIcon />}
            size="large"
          >
            Reset form
          </Button>
          <Button
            type="submit"
            variant="contained"
            startIcon={<PersonIcon />}
            size="large"
          >
            Add new visitor
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default NewVisitorForm;
