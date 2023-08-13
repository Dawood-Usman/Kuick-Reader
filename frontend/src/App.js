import "./App.css";
import { LoginContext } from "./Contexts/LoginContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import RouteProvider from "./Routes/RouteProvider";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      const user = { username: "",email:"", status: false };
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, []);

  
  return (
    <>
      <Provider store={store}>
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <RouteProvider />
        </LoginContext.Provider>
      </Provider>
    </>
  );
}

export default App;
