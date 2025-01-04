import React from 'react';

const UnderMaintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-800">
        🚧 Page Under Maintenance
      </h1>
      <p className="mt-2 text-gray-600 text-lg">
        We're working hard to bring this page back online soon. 🚀
      </p>
      
      {/* Illustration */}
      <div className="mt-6">
        <img 
          src="https://img.freepik.com/free-vector/ecology-protection-environment-preservation-nature-conservation-eco-friendly-mechanism-idea-cogwheels-leaves-mechanical-parts-with-foliage_335657-1588.jpg" 
          alt="Under Maintenance" 
          className="rounded-lg shadow-md h-96 w-96" 
        />
      </div>
      
      {/* Footer Message */}
      <p className="mt-6 text-sm text-gray-500">
        Thank you for your patience! For immediate assistance, please <a href="mailto:contact@arkainfotech.in" target='_blank' className="text-blue-600 underline">contact@arkainfotech.in</a>.
      </p>
    </div>
  );
};

export default UnderMaintenance;
