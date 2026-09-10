import userArr from './user_data.json'
import { Link } from 'react-router-dom'

export default function UserList() {
  return <>
    <h3 className="text-center">User Table</h3>

    <table className="table table-bordered table-striped">
      <tbody>
        {userArr.map((user) => {
          return <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address.city}</td>
            <td>
                <Link to={`/userdetails/${user.id}`}>Details</Link>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </>
}
