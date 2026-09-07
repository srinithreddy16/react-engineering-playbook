import { useState } from "react";

export default function UserList_Http() {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((finalResponse) => {
        console.log(finalResponse);
        setUsers([...finalResponse]);
      });
    });
  };

  return (
    <>
      <h3 className="text-center">User List Using Http</h3>

      <button onClick={fetchUserData}>Fetch users</button>

      <table className="table table-bordered">
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}