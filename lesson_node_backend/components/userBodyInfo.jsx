import React from "react";

const userBodyInfo = ({ users }) => {
  console.log("USERS", users);

  return (
    <>
      {users.map((user) => {
        return (
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox mr-5 ml-10" />
                </label>
              </th>
              <th>
                <br />
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-8 mb-5 rounded-full">
                      <img src={user.avatarUrl} alt="Avatar" />
                    </div>
                  </div>
                </div>
              </th>
              <td>
                <br />
                <div>
                  <div className="font-bold ml-5">{user.username}</div>
                </div>
              </td>
              <td>
                <br />
                <div className="font-bold ml-5">{user.name}</div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm ml-5">
                  {user.job}
                </span>
              </td>

              <td>
                {" "}
                <div className="text-sm opacity-50 ml-5">{user.email}</div>
              </td>
              <td>
                <div className="text-sm opacity-50 ml-5">{user.date}</div>
              </td>
              <th>
                <th>
                  <button className="btn btn-outline btn-warning">Edit</button>
                </th>
                <th>
                  <button className="btn btn-outline btn-error ml-5 mr-10">
                    Delete
                  </button>
                </th>
              </th>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default userBodyInfo;
