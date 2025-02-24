import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { FormData } from "../types/form.types";
import { prevStep, setErrors, updateFormData } from "../store/slice/formSlice";

export const FinancialInformation: React.FC = () => {
    const dispatch = useDispatch();
    const { data, errors } = useSelector((state: RootState) => state.form);
  
    const validateStep = () => {
      const stepErrors: Partial<Record<keyof FormData, string>> = {};
      
      if (!data.employmentStatus) {
        stepErrors.employmentStatus = 'Employment status is required';
      }
  
      dispatch(setErrors(stepErrors));
      return Object.keys(stepErrors).length === 0;
    };
  
    const handleSubmit = () => {
      if (validateStep()) {
        // Submit form
        console.log('Form submitted:', data);
      }
    };
  
    return (
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-2xl font-semibold text-center mb-2">Financial information</h1>
        <p className="text-gray-500 text-center mb-8">All your information is stored securely.</p>
  
        <div className="space-y-6">
          <div>
            <select
              value={data.employmentStatus}
              onChange={(e) => dispatch(updateFormData({ employmentStatus: e.target.value }))}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">What is your current employment status?</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self-employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
            </select>
          </div>
  
          <div>
            <input
              type="text"
              value={data.additionalSavings}
              onChange={(e) => dispatch(updateFormData({ additionalSavings: e.target.value }))}
              className="w-full p-3 border rounded-lg"
              placeholder="Additional savings/investments"
            />
          </div>
  
          <div className="flex gap-4">
            <button
              onClick={() => dispatch(prevStep())}
              className="w-1/2 bg-gray-100 text-gray-600 py-3 rounded-lg hover:bg-gray-200"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="w-1/2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
            >
              Save and continue
            </button>
          </div>
        </div>
      </div>
    );
  };