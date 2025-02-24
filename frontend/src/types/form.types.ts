export interface FormData {
  // Contact Details (Step 1)
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;

  // Personal Information (Step 2)
  title: string;
  fullName: string;
  dateOfBirth: string;
  currentAddress: string;
  addressDuration: string;
  aboutYourself: string;

  // Financial Information (Step 3)
  employmentStatus: string;
  additionalSavings: string;
}
