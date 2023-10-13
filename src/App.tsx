import './App.css';
import { useState } from 'react';

/*
  Useful resources:
  * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  * https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
*/

function sendPostRequest(url: string, body: object, oncomplete: ((value : any) => any)) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res) => res.json()
  .then((data) => oncomplete(data)));
}

const API_HOSTNAME = "http://localhost:3001";

function App() {
  const [ response, setResponse ] = useState("");

  // TODO: This is sending three requests, instead of just one.
  function clickButton () {
    sendPostRequest(
      `${API_HOSTNAME}/api`,                // API endpoint (where the request is going)
      { message: "Hello from client"},      // Request body (what the request contains)
      (data) => setResponse(data.message)); // Callback function (what to do when we receive a response)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={clickButton}>Send API request</button>
        <p>{response}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
