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
      .then((response: { data: TestResponse }) => setResponse(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <p>Response received: {response.message}</p>
    </div>
  );
};

export default TestServer;
