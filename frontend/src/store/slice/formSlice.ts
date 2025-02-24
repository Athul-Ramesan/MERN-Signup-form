import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../../types/form.types';
import { fetchUserData, submitRegistration } from '../actions';

interface FormState {
    data: FormData;
    currentStep: number;
    errors: Partial<Record<keyof FormData, string>>,
    loading: boolean,
    success:boolean,
    error: string | null,
    userId : string | null
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
    errors: {},
    loading: false,
    success: false,
    error: null,
    userId: null,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitRegistration.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitRegistration.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.userId = action.payload.userId;
            })
            .addCase(submitRegistration.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { updateFormData, setErrors, nextStep, prevStep } = formSlice.actions;
export default formSlice.reducer;