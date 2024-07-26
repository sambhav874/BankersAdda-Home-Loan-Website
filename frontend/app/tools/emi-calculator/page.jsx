import EMICalculator from './../../../utils/EMICalculator';

const EMICalculatorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-6">
      <div className="w-full max-w-7xl md:max-w-md p-8 bg-gray-800 rounded-lg mx-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">EMI Calculator</h1>
        <EMICalculator />
      </div>
    </div>
  );
};

export default EMICalculatorPage;
