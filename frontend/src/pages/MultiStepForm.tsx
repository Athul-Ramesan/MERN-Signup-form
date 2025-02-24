import { useSelector } from "react-redux"
import { ContactDetails } from "../components/ContactDetails"
import { FinancialInformation } from "../components/FinancialInformation"
import { FormHeader } from "../components/FormHeader"
import { PersonalInformation } from "../components/PersonalInformation"
import { StepIndicator } from "../components/StepIndicator"
import { RootState } from "../store"
import logo from '../assets/react.svg';


const MultiStepForm = () => {
  const { currentStep } = useSelector((state: RootState) => state.form);

  return (
<div className="min-h-screen bg-gray-50 mt-6">
        <FormHeader logo={logo} />
        <div className="container mx-auto py-8">
          <StepIndicator currentStep={currentStep} totalSteps={3} />
          {currentStep === 1 && <ContactDetails />}
          {currentStep === 2 && <PersonalInformation />}
          {currentStep === 3 && <FinancialInformation />}
        </div>
        </div>
  )
}

export default MultiStepForm
