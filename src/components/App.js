
import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value); // Update the name as the user types
  };

  const handleSubmit = () => {
    if (name.trim() === "") {
      setGreeting("Please enter a valid name."); // Handle empty input
    } else {
      setGreeting(`Hello, ${name}!`); // Display personalized greeting
    }
  };

  return (
    <div>
      <p>Enter your name:</p>
      <input
        type="text"
        placeholder="Enter the name"
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {greeting && <p>{greeting}</p>} {/* Display greeting only if it's set */}
      {/* Do not remove the main div */}
    </div>
  );
};

export default App;

