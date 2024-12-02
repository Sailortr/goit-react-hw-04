import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <Oval
        height={50}
        width={50}
        color="blue"
        visible={true}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
