import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QueryBuilderComponent from "./component/QueryBuilder/QueryBuilderComponent";
// import ExpressionBuilder from "./component/ExpressionBuilder";
// import ExpressionForm from "./ExpressionForm";

function App() {
  return (
    <div className="container mt-5">
      {/* <ExpressionBuilder /> */}
      <QueryBuilderComponent />
    </div>
  );
}

export default App;
