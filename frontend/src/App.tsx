import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './store';
import logo from './assets/react.svg';
import { ContactDetails } from './components/ContactDetails';
import { PersonalInformation } from './components/PersonalInformation';
import { FinancialInformation } from './components/FinancialInformation';
import { FormHeader } from './components/formHeader';
import { StepIndicator } from './components/stepIndicator';

function App() {
  const { currentStep } = useSelector((state: RootState) => state.form);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <FormHeader logo={logo} />
        <div className="container mx-auto py-8">
          <StepIndicator currentStep={currentStep} totalSteps={3} />
          {currentStep === 1 && <ContactDetails />}
          {currentStep === 2 && <PersonalInformation />}
          {currentStep === 3 && <FinancialInformation />}
        </div>
        </div>
    </Provider>
  );
}

export default App;
