import React from "react";
import termsOfService from "../public/policies/TermsOfService";
import "../app/globals.css";

const TermsOfService = () => {
  return (
    <div className="bg-primary-blue p-4 md:p-8 lg:p-12 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-4 sm:mx-auto">
        {Object.entries(termsOfService).map(([heading, paragraphs], index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-avenir-heavy text-primary-blue mb-4">
              {heading}
            </h2>
            {paragraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                dangerouslySetInnerHTML={{ __html: paragraph as string }}
                className="text-gray-700 text-base mb-4"
              ></p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;
