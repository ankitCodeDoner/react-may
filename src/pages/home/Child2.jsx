import React, { useContext } from "react";
import { UserContext } from "../../contextApi/Context";

const Child2 = () => {

  const { name } = useContext(UserContext)

  console.log(name, "name")

  return <div>{name}</div>;
};

export default Child2;
