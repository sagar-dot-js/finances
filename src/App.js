import { useState } from "react";
import logo from "./logo.svg";
import Login from "./pages/Login";

function App() {
  let [loggedIn, setLoggedIn] = useState({
    loginStatus: false,
  });
  console.log(loggedIn);
  return (
    <>
      <div className="text-2xl">Finances Portal</div>
      <div className="text-blue-600  w-full h-screen flex items-center justify-center">
        <div>
          {loggedIn.loginStatus ? (
            "Already logged In Finance"
          ) : (
            <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
