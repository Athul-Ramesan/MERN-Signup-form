import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../types/form';

interface FormState {
  formData: FormData;
  currentStep: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: FormState = {
  formData: {
    email: '',
    phone: '',
    password: '',
    fullName: '',
    dateOfBirth: '',
    currentAddress: '',
    addressDuration: '',
    aboutYourself: '',
    employmentStatus: '',
    additionalSavings: '',
  },
  currentStep: 1,
  isLoading: false,
  error: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { updateFormData, setCurrentStep, setLoading, setError } = formSlice.actions;
export default formSlice.reducer;