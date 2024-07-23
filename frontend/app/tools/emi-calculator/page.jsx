import EMICalculator from './../../../utils/EMICalculator';

const EMICalculatorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">EMI Calculator</h1>
        <EMICalculator />
      </div>
    </div>
  );
};

export default EMICalculatorPage;
