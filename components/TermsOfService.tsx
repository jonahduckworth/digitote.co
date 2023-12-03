import React from "react";
import termsOfService from "../public/TermsOfService";

const TermsOfService = () => {
  return (
    <div className="terms-of-service">
      {Object.entries(termsOfService).map(([heading, paragraphs], index) => (
        <div key={index}>
          <h2>{heading}</h2>
          {paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TermsOfService;
