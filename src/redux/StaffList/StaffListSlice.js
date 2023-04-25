import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApiUrl } from "../../shared/baseUrl";
export const staffListSlice = createSlice({
  name: "staffs",
  initialState: {
    status: "idle",
    staffs: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaffs.pending, (state, action) => {
        state.status = "fetchStaffs loading";
      })
      .addCase(fetchStaffs.fulfilled, (state, action) => {
        state.status = "fetchStaffs sucess";
        state.staffs = action.payload;
      })
      .addCase(fetchStaffs.rejected, (state, action) => {
        state.status = "fetchStaffs Error";
      })
      .addCase(fetchAddNewStaff.pending, (state, action) => {
        state.status = "fetchAddNewStaff loading";
      })
      .addCase(fetchAddNewStaff.fulfilled, (state, action) => {
        state.status = "fetchAddNewStaff sucess";
        state.staffs = action.payload;
      })
      .addCase(fetchAddNewStaff.rejected, (state, action) => {
        state.status = "fetchAddNewStaff Error";
      })
      .addCase(fetchDeleteStaff.pending, (state, action) => {
        state.status = "fetchDeleteStaff loading";
      })
      .addCase(fetchDeleteStaff.fulfilled, (state, action) => {
        state.status = "fetchDeleteStaff sucess";
        state.staffs = action.payload;
      })
      .addCase(fetchDeleteStaff.rejected, (state, action) => {
        state.status = "fetchDeleteStaff Error";
      });
  },
});
export const fetchStaffs = createAsyncThunk(
  fetchApiUrl + "staffs",
  async () => {
    const res = await fetch(fetchApiUrl + "staffs");
    let data = await res.json();

    return data;
  }
);
export const fetchAddNewStaff = createAsyncThunk(
  fetchApiUrl + "addNewstaffs",
  async (newStaff) => {
    const res = await fetch(fetchApiUrl + "staffs", {
      method: "POST",
      body: JSON.stringify(newStaff),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    });
    let data = await res.json();

    return data;
  }
);
export const fetchDeleteStaff = createAsyncThunk(
  fetchApiUrl + "deleteStaffs",
  async (id) => {
    const res = await fetch(fetchApiUrl + `staffs/${id}`, {
      method: "DELETE",
    });
    let data = await res.json();
    return data;
  }
);
