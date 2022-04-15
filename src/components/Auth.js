import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginAction } from "../redux/actions";


const Auth = () => {
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();
  return (
      <div>
        <h2>Please Login</h2>
        <input
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {/*login btn a click korley LoginAction k dispatched korbo*/}
        <button onClick={() => dispatch(loginAction(phone))}>Login</button>
      </div>
  );
};

export default Auth;
