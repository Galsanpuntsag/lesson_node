import React from "react";
import userBodyInfo from "../Throw/userBodyInfo";

const TBody = ({ users }) => {
  return (
    <tbody>
      {users.map((user) => (
        <userBodyInfo user={user} />
      ))}
    </tbody>
  );
};

export default TBody;
