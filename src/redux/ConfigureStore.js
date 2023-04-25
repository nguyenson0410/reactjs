import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { departmentSlice } from "./Department/DepartmentSlice";
import {  staffSalarySlice } from "./Salary/SalarySlice";

import { staffListSlice } from "./StaffList/StaffListSlice";

const store = configureStore({
  reducer: {
    staffList: staffListSlice.reducer,
    departmentList: departmentSlice.reducer,
    Salary: staffSalarySlice.reducer,
  },
  middleware: [thunk, logger],
});
export default store;
