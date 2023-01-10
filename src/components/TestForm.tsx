import { useState, useEffect } from "react";
import { apiEndpoint } from "../global/definitions";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage("Sending request...");
  };

  useEffect(() => {
    if (name && email && mobileNumber) {
      fetch(`${apiEndpoint}/testPost`, {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            mobileNumber: mobileNumber,
          }),
        })
          .then((res) => {
            if (res.status === 200) {
              return res.json()
            }
            console.error("Error Occured")
          })
          .then((resJson) => {
            setName("");
            setEmail("");
            setMobileNumber("");
            setMessage("User created successfully");
          })
          .catch((err) => {
            console.error(err);
            setMessage("Error Occured");
          });
    }
  }, [name, email, mobileNumber]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;
