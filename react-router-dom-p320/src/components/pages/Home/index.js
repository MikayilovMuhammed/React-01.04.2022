import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../layouts/Button";
import "./index.scss";
function Home() {
  const { push } = useHistory();

  const handleChangeService = React.useCallback(() => {
    push("services", true);
    // push("/services");
  }, [push]);
  return (
    <div>
      <h1 className="test">Home Page</h1>
      {/* <button onClick={handleChangeService}>Go to Service page</button> */}
      <Button onClick={handleChangeService} text="Service page" />
      {/* <Link to="services" className="btn"> */}
      {/* Go to
      </Link> */}
    </div>
  );
}

export default Home;
