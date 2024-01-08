import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";
import { QueryBuilder } from "react-querybuilder";
import "./QueryBuilderComponent.css";

import { JSONDisplay } from "../JsonDisplay/JSONDisplay";

const QueryBuilderComponent = () => {
  const initialRule = {
    field: "",
    value: "",
    operator: ">",
    score: "",
  };

  const [output, setOutput] = useState(null);
  const [initialQuery, setQuery] = useState({
    combinator: "and",
    rules: [initialRule],
  });
  const [score, setScore] = useState("");
  const [showData, setShowData] = useState(false);

  const onChange = (query) => {
    setQuery(query);
    const formattedOutput = {
      rules: query.rules.map((rule) => ({
        key: rule.field,
        output: {
          value: rule.value,
          operator: rule.operator,
          score: score,
        },
      })),
      combinator: query.combinator || "and",
    };
    setOutput(formattedOutput);
  };
  const resetOutput = () => {
    setOutput(null);
  };

  const handleJsonDisplay = () => {
    setShowData(!showData);
  };

  return (
    <>
      <Container className="mt-5 d-flex justify-content-center flex-column  ">
        <div className="mb-1.5 text-primary-emphasis d-flex justify-content-center">
          <h3>Expression Builder</h3>
        </div>
        <Form className="mt-1.5">
          <div className="mb-4" data-bs-theme="light">
            <QueryBuilder
              fields={[
                { name: "age", label: "Age" },
                { name: "creditScore", label: "Credit Score" },
                { name: "accountBalance", label: "Account Balance" },
              ]}
              query={initialQuery}
              controlElements={{
                valueEditor: ({ value, handleOnChange }) => {
                  return (
                    <input
                      type="number"
                      className="form-control"
                      value={value}
                      onChange={(e) => handleOnChange(e.target.value)}
                      placeholder="value"
                    />
                  );
                },
                operatorSelector: ({ value, handleOnChange }) => {
                  return (
                    <select
                      className="form-select"
                      value={value}
                      onChange={(e) => handleOnChange(e.target.value)}
                    >
                      <option value=">">{">"}</option>
                      <option value="<">{"<"}</option>
                      <option value="≤">{"≤"}</option>
                      <option value="≥">{"≥"}</option>
                      <option value="=">{"="}</option>
                    </select>
                  );
                },
              }}
              onQueryChange={onChange}
            />
          </div>

          <div className=" d-flex flex-row justify-content-between">
            <div className="mb-4 d-flex justify-content-center">
              <Button variant="primary" onClick={handleJsonDisplay}>
                {showData ? "Hide JSON" : "Show JSON"}
              </Button>
            </div>

            <div className="mb-4 d-flex justify-content-center">
              <Button variant="primary" onClick={resetOutput}>
                Reset Output
              </Button>
            </div>
          </div>
        </Form>
      </Container>
      <JSONDisplay showData={showData} output={output} />
    </>
  );
};

export default QueryBuilderComponent;
