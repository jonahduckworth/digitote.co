import React from "react";

const Pricing: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 mx-auto my-10 font-avenir-heavy">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Tier 1: <span className="text-gray-600">$144 CAD Monthly</span> /{" "}
        <span className="text-gray-600">$129 CAD Annually</span>
      </h2>
      <p className="font-semibold text-lg text-gray-800 mb-4">
        What&apos;s included:
      </p>
      <ul className="list-none text-gray-700">
        <li className="flex items-center mb-2">
          <span className="text-green-500 mr-2">✓</span> Create Projects and
          Deliverables
        </li>
        <li className="flex items-center mb-2">
          <span className="text-green-500 mr-2">✓</span> Add Influencers
        </li>
        <li className="flex items-center mb-2">
          <span className="text-green-500 mr-2">✓</span> Agency Admin
        </li>
        <li className="flex items-center mb-2">
          <span className="text-green-500 mr-2">✓</span> Project Management
          Template
        </li>
        <li className="flex items-center mb-2">
          <span className="text-green-500 mr-2">✓</span> Brand and Company
          Contact Management
        </li>
      </ul>
    </div>
  );
};

export default Pricing;
