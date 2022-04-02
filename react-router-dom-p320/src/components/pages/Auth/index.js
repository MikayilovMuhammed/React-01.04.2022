import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../layouts/Button";

function Login({ setState }) {
  const { push } = useHistory();
  return (
    <div>
      <h2>Login Page</h2>
      <Button
        onClick={() => {
          setState(true);
          push("/services");
        }}
      />
    </div>
  );
}

export default Login;
