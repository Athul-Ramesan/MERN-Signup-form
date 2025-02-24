import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { FormData } from "../types/form.types";
import { nextStep, setErrors, updateFormData } from "../store/slice/formSlice";

export const ContactDetails: React.FC = () => {
    const dispatch = useDispatch();
    const { data, errors } = useSelector((state: RootState) => state.form);
  
    const validateStep = () => {
      const stepErrors: Partial<Record<keyof FormData, string>> = {};
      
      if (!data.email) stepErrors.email = 'Email is required';
      if (!data.mobileNumber) stepErrors.mobileNumber = 'Mobile number is required';
      if (!data.password) stepErrors.password = 'Password is required';
      if (data.password !== data.confirmPassword) {
        stepErrors.confirmPassword = 'Passwords do not match';
      }
  
      dispatch(setErrors(stepErrors));
      return Object.keys(stepErrors).length === 0;
    };
  
    const handleContinue = () => {
      if (validateStep()) {
        dispatch(nextStep());
      }
    };
  
    return (
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-2xl font-semibold text-center mb-2">Create your account</h1>
        <p className="text-gray-500 text-center mb-8">Set-up your RentbyPass in as little as 2 minutes.</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Email address</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => dispatch(updateFormData({ email: e.target.value }))}
              className="w-full p-3 border rounded-lg"
              placeholder="email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
  
          <div>
            <label className="block text-sm mb-2">Mobile number</label>
            <input
              type="tel"
              value={data.mobileNumber}
              onChange={(e) => dispatch(updateFormData({ mobileNumber: e.target.value }))}
              className="w-full p-3 border rounded-lg"
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
          </div>
  
          <div>
            <label className="block text-sm mb-2">Create a password</label>
            <input
              type="password"
              value={data.password}
              onChange={(e) => dispatch(updateFormData({ password: e.target.value }))}
              className="w-full p-3 border rounded-lg"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
  
          <div>
            <label className="block text-sm mb-2">Confirm your password</label>
            <input
              type="password"
              value={data.confirmPassword}
              onChange={(e) => dispatch(updateFormData({ confirmPassword: e.target.value }))}
              className="w-full p-3 border rounded-lg"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
  
          <p className="text-sm text-gray-500">
            We need a password to keep your information safe. But don't worry, we'll also send your custom RentbyPass URL via email.
          </p>
  
          <button
            onClick={handleContinue}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            Create your account
          </button>
  
          <p className="text-sm text-gray-500 text-center">
            By clicking 'Create your account', you are agreeing to our{' '}
            <a href="#" className="text-blue-500">Terms & Conditions</a> and{' '}
            <a href="#" className="text-blue-500">Privacy Policy</a>
          </p>
        </div>
      </div>
    );
  };