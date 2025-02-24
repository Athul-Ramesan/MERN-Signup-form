import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { FormData } from "../types/form.types";
import { nextStep, prevStep, setErrors, updateFormData } from "../store/slice/formSlice";

export const PersonalInformation: React.FC = () => {
    const dispatch = useDispatch();
    const { data, errors } = useSelector((state: RootState) => state.form);
  
    const validateStep = () => {
      const stepErrors: Partial<Record<keyof FormData, string>> = {};
      
      if (!data.fullName) stepErrors.fullName = 'Full name is required';
      if (!data.dateOfBirth) stepErrors.dateOfBirth = 'Date of birth is required';
      if (!data.currentAddress) stepErrors.currentAddress = 'Current address is required';
  
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
        <h1 className="text-2xl font-semibold text-center mb-2">Personal information</h1>
        <p className="text-gray-500 text-center mb-8">Please answer questions as accurately as possible.</p>
  
        <div className="space-y-6">
          <div className="flex gap-4">
            <select
              value={data.title}
              onChange={(e) => dispatch(updateFormData({ title: e.target.value }))}
              className="w-24 p-3 border rounded-lg"
            >
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
            </select>
  
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => dispatch(updateFormData({ fullName: e.target.value }))}
              placeholder="Full Name as per your passport"
              className="flex-1 p-3 border rounded-lg"
            />
          </div>
  
          <div>
            <input
              type="date"
              value={data.dateOfBirth}
              onChange={(e) => dispatch(updateFormData({ dateOfBirth: e.target.value }))}
              className="w-full p-3 border rounded-lg"
              placeholder="Date of birth"
            />
          </div>
  
          <div>
            <input
              type="text"
              value={data.currentAddress}
              onChange={(e) => dispatch(updateFormData({ currentAddress: e.target.value }))}
              className="w-full p-3 border rounded-lg"
              placeholder="Current address"
            />
          </div>
  
          <div>
            <input
              type="text"
              value={data.addressDuration}
              onChange={(e) => dispatch(updateFormData({ addressDuration: e.target.value }))}
              className="w-full p-3 border rounded-lg"
              placeholder="How long have you lived at this address?"
            />
          </div>
  
          <div>
            <textarea
              value={data.aboutYourself}
              onChange={(e) => dispatch(updateFormData({ aboutYourself: e.target.value }))}
              className="w-full p-3 border rounded-lg"
              placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)"
              rows={4}
            />
          </div>
  
          <p className="text-sm text-gray-500">
            All information can be edited once you have created your account.
          </p>
  
          <div className="flex gap-4">
            <button
              onClick={() => dispatch(prevStep())}
              className="w-1/2 bg-gray-100 text-gray-600 py-3 rounded-lg hover:bg-gray-200"
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              className="w-1/2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
            >
              Save and continue
            </button>
          </div>
        </div>
      </div>
    );
  };