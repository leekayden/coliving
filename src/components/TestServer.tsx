import React, { useState, useEffect } from 'react';

interface TestResponse {
  message: string;
}

const TestServer: React.FC = () => {
  const [response, setResponse] = useState<TestResponse>({ message: '' });

  useEffect(() => {
    fetch('/testget')
      .then((res) => res.json())
      .then((data: TestResponse) => setResponse(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <p>{response.message}</p>
    </div>
  );
};

export default TestServer;
