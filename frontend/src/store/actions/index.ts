import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "./registerUser";
import { getUser } from "./getUser";
import { FormData } from "../../types/form.types";

export const submitRegistration = createAsyncThunk(
    'form/submitRegistration',
    async (formData: FormData, { rejectWithValue }) => {
      try {
        const response = await registerUser(formData);
        return response;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const fetchUserData = createAsyncThunk(
    'form/fetchUserData',
    async (userId: string, { rejectWithValue }) => {
      try {
        const response = await getUser(userId);
        return response;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );