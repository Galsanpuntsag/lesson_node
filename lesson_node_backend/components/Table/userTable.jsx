import React from "react";
import UserHeadWords from "../Head/userHeadWords";
import UserBodyInfo from "../Throw/userBodyInfo";
import { users } from "../../Data/usersData";

const userTable = () => {
  return (
    <div className="overflow-x-auto bg-slate-300">
      <table className="table">
        {/* head */}

        <UserHeadWords />
        {/* body */}
        <UserBodyInfo users={users} />
        {/* foot */}
      </table>
    </div>
  );
};

export default userTable;
