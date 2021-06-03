import React from "react";

const Setdate = () => {
  const today = new Date();

  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yy = today.getFullYear();

  return <div>{`${dd}/${mm}/${yy}`}</div>;
};

export default Setdate;
