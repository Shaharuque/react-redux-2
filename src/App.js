import logo from "./logo.svg";
import "./App.css";
import Couter from "./components/Counter/Couter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction,logoutAction } from "./redux/actions";
import Auth from "./components/Auth";
import Base from "./components/Base";


function App() {
  // const [phone, setPhone] = useState("");
  // const dispatch = useDispatch();
   const auth = useSelector((state) => state.auth);
  // console.log(auth)

  return (
    <div className="App">
      <Couter></Couter>
      {auth.isAuth ? 
        <Base></Base>
       : 
        <Auth></Auth>
      }
    </div>
  );
}

export default App;
