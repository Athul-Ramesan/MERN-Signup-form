import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../../types/form.types';

interface FormState {
  data: FormData;
  currentStep: number;
  errors: Partial<Record<keyof FormData, string>>;
}

const initialState: FormState = {
  data: {
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    title: 'Mr',
    fullName: '',
    dateOfBirth: '',
    currentAddress: '',
    addressDuration: '',
    aboutYourself: '',
    employmentStatus: '',
    additionalSavings: ''
  },
  currentStep: 1,
  errors: {}
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      state.data = { ...state.data, ...action.payload };
    },
    setErrors: (state, action: PayloadAction<Partial<Record<keyof FormData, string>>>) => {
      state.errors = action.payload;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    }
  }
});

export const { updateFormData, setErrors, nextStep, prevStep } = formSlice.actions;
export default formSlice.reducer;