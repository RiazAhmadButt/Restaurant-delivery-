import React from 'react';
import './PersonalDetails.css'; // Import the CSS styles

const PersonalDetails = () => {
  return (
    <div className="personal-details-container">
      {/* Personal details header */}
      <div className="personal-details-header">
        Personal details
      </div>
      {/* Cancel button */}
      {/* <div className="cancel-button">
        Cancel
      </div> */}

      {/* Email input */}
      <div className="input-group email-group">
        <span className="label">Email</span>
      </div>

      <div className="name-fields">
        {/* First Name input */}
        <div className="input-group first-name-group">
          <span className="label">First Name</span>
        </div>

        {/* Last Name input */}
        <div className="input-group last-name-group">
          <span className="label">Last Name</span>
        </div>
      </div>

      {/* Phone input */}
      <div className="input-group phone-group">
        <span className="label">Phone</span>
      </div>

      {/* Save button */}
      <div className="save-button">
        <span className="save-text">Save</span>
      </div>
    </div>
  );
};

export default PersonalDetails;
