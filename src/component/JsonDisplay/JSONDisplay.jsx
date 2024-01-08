import React from "react";

export const JSONDisplay = ({ showData, output }) => {
  return (
    <div>
      {showData && (
        <div className=" d-flex flex-column align-center">
          <div className="d-flex justify-content-center">
            <h3>JSON:</h3>
          </div>
          <div className="d-flex justify-content-center ">
            <pre>{JSON.stringify(output, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};
