interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
  }
  
  export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => (
    <div className="w-full h-1 pt-6 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all duration-300"
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      />
    </div>
  );