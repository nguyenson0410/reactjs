import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApiUrl } from "../../shared/baseUrl";
export const departmentSlice = createSlice({
  name: "departments",
  initialState: {
    status: "idle",
    departments: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDepartment.fulfilled, (state, action) => {
        state.status = "sucess";
        state.departments = action.payload;
      })
      .addCase(fetchDepartment.rejected, (state, action) => {
        state.status = "Error";
      });
  },
});
export const fetchDepartment = createAsyncThunk(
  fetchApiUrl + "departments",
  async () => {
    const res = await fetch(fetchApiUrl + "departments");
    const data = await res.json();
    return data;
  }
);
