import { useContext } from "react";
import { CustomContext } from "../../main";

const Child = () => {
  const user = useContext(CustomContext);
  return <h1>Hello {user}</h1>;
};

export default Child;
