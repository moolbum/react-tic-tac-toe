import React from "react";
import { UserContext, ThemeContext } from "../../../App";

const User = () => {
  return (
    <div>
      유저
      <UserContext.Consumer>{(value) => <p>{value}</p>}</UserContext.Consumer>
      <ThemeContext.Consumer>{(value) => <p>{value}</p>}</ThemeContext.Consumer>
    </div>
  );
};

export default User;
