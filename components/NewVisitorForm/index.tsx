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
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

import { useForm, SubmitHandler } from "react-hook-form";
import { useStore } from "@/store/visitors";

type Inputs = {
  fullName: string;
  email: string;
  department: string;
};

const NewVisitorForm = ({ setVisitors }: any) => {
  const [department, setDepartment] = useState("");
  const addVisitor = useStore((state: any) => state.addVisitor);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addVisitor({
      id: 1,
      fullName: "Jakub Zientek",
      email: "jakub.zient@gmail.com",
      department: "IT",
    });
    console.log(data);
  };

  console.log(watch("fullName")); // watch input value by passing the name of it

  return (
    <div className="border p-4 rounded-xl">
      <h2 className="text-xl pb-4">Add new visitor</h2>
      <p className="pb-4">Fill name, email address and the department</p>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("fullName")}
          label="Full Name"
          variant="outlined"
        />
        <TextField
          {...register("email")}
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
          </Select>
          <FormControlLabel
            required
            control={<Checkbox />}
            label="I agree to be added to the table"
            className="py-4"
          />
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Reset form
            </Button>
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Add new visitor
            </Button>
          </Stack>
        </FormControl>
      </form>
    </div>
  );
};

export default NewVisitorForm;
