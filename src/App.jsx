import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage";
import Detail from "./components/Detail";
import Form from "./components/Form";

function App() {
  const [inHome, setInHome] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setInHome(true);
    } else {
      setInHome(false);
    }
  }, [location]);
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <MainPage />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
    {
      path: "/form",
      element: <Form></Form>
    }
  ];

  return (
    <>
    <div className="Main-App">

    
      {!inHome && <Header></Header>}
      <Routes>
        {
          routes.map((route, index)=>{
            return (
              <Route 
              key={index}
              path={route.path}
              element={route.element}
              />
            )
          })
        }
      </Routes>
      {!inHome && <Footer></Footer>}
    
        </div>
    </>
  );
}

export default App;
