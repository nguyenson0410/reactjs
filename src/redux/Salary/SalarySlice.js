import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApiUrl } from "../../shared/baseUrl";
export const staffSalarySlice = createSlice({
  name: "salary",
  initialState: {
    status: "idle",
    staffSalary: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaffSalary.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStaffSalary.fulfilled, (state, action) => {
        state.status = "sucess";
        state.staffSalary = action.payload;
      })
      .addCase(fetchStaffSalary.rejected, (state, action) => {
        state.status = "Error";
      });
  },
});
export const fetchStaffSalary = createAsyncThunk(
  fetchApiUrl + "staffsSalary",
  async () => {
    const res = await fetch(fetchApiUrl + "staffsSalary");
    const data = await res.json();
    return data;
  }
);


