import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiEndpoint } from "../global/definitions";

interface TestResponse {
  message: string;
}

const TestServer: React.FC = () => {
  const [response, setResponse] = useState<TestResponse>({ message: "" });

  useEffect(() => {
    axios
      .get(`${apiEndpoint}/test`)
      .then((response: { data: TestResponse }) => {
        console.log(response, response.data)
        setResponse(response.data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Status: {response.message ? "Received" : "Waiting"}</h1> 
      <p>Response: {response.message ? response.message : "Fetching..."}</p>
    </div>
  );
};

export default TestServer;
