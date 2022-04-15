import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions";

const Base = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <div>
        Welcome!!
        <p>Phone No.:{auth.phone}</p>
        <button onClick={() => dispatch(logoutAction())}>Log Out</button>{" "}
        {/*for log-out we need a action to be performed so slice a redducers method banabo  */}
      </div>
    </div>
  );
};

export default Base;
