import React from "react";
import "./loading-spinner.styles.modules.scss";

const loadingSpinner = WrappedComponent => {
  const loadSpinner = ({isLoading}) => {
    return isLoading ? (
      <div className="spinner-container">
        <div className="spinner">Fetching Data....</div>
      </div>
    ) : (
      <WrappedComponent />
    );
  };
  return loadSpinner;
};

export default loadingSpinner;
