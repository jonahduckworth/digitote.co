// BookDemoModal.tsx
import React, { useState } from "react";

const BookDemoModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedUserType = event.target.value;
    setUserType(selectedUserType);
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    onClose();
  };

  const handleModalContentClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the onClick event of the background from being triggered
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-8 pb-16" // Add top padding and bottom padding
      onClick={handleBackgroundClick}
    >
      <div
        className="bg-white p-4 sm:p-8 md:p-12 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-4 my-4 overflow-y-auto max-h-full" // Add horizontal margin and max height
        onClick={handleModalContentClick}
        style={{ maxHeight: "calc(100% - 2rem)" }} // Ensure the modal is not taller than the screen minus the vertical margin
      >
        <h2 className="text-2xl mb-3 text-primary-pink font-avenir-heavy">
          Book a Demo
        </h2>
        <div className="h-full">
          <form>
            <label htmlFor="userType" className="block mb-2 text-black">
              What Best Describes You?
            </label>
            <select
              id="userType"
              name="userType"
              value={userType}
              onChange={handleUserTypeChange}
              className="mb-4 p-2 border rounded text-black"
            >
              <option value="">Select...</option>
              <option value="Talent Manager">Talent Manager</option>
              <option value="Influencer Agency Owner">
                Influencer Agency Owner
              </option>
              <option value="Influencer">Influencer</option>
              <option value="Brand">Brand</option>
              <option value="Marketing Agency">Marketing Agency</option>
            </select>

            <label htmlFor="firstName" className="block mb-2 text-black">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mb-4 p-2 border rounded w-full text-black"
            />

            <label htmlFor="lastName" className="block mb-2 text-black">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mb-4 p-2 border rounded w-full text-black"
            />

            <label htmlFor="companyName" className="block mb-2 text-black">
              {userType === "Influencer" ? "Social Handle:" : "Company Name:"}
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="mb-4 p-2 border rounded w-full text-black"
            />

            <label htmlFor="website" className="block mb-2 text-black">
              Website:
            </label>
            <input
              type="text"
              id="website"
              name="website"
              className="mb-4 p-2 border rounded w-full text-black"
            />

            <label htmlFor="email" className="block mb-2 text-black">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mb-4 p-2 border rounded w-full text-black"
            />

            <label htmlFor="country" className="block mb-2 text-black">
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="mb-4 p-2 border rounded w-full text-black"
            />

            <div className="flex flex-col sm:flex-row justify-between mt-4 pb-8">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-full mb-2 sm:mb-0"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-primary-cyan hover:bg-primary-cyan-75 px-4 py-2 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemoModal;
