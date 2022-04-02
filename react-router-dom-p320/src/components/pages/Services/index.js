import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "../../layouts/Button";

function Service() {
  const { push } = useHistory();
  const { state: isSalam } = useLocation();

  return (
    <>
      <h1>Services</h1>
      {isSalam && <h2>Salam</h2>}
      <Button onClick={() => console.log(isSalam)} />
    </>
  );
}

export default Service;
