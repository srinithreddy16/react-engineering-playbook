import axios from "axios";
import { useState } from "react";

export default function Multiple_API() {
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    const promise1 = axios.get("https://api.github.com/users/octocat");
    const promise2 = axios.get("https://api.github.com/users/gaearon");
    const promise3 = axios.get("https://api.github.com/users/sindresorhus");
    const responseArr = await axios.all([promise1, promise2, promise3]);
    const responseData = responseArr.map(response=>response.data);
    console.log(responseData)
    setData(responseData);
  };

  return (
    <>

      <h3 className="text-center">Fetch Data From Multiple APIs and display on the screen</h3>
      
      <button onClick={fetchData}>Fetch Data</button>

      <table className="table table-bordered">
        <tbody>
            {data.map((obj)=>{
                return <tr key={obj.id}>
                    <td>{obj.id}</td>
                    <td>{obj.login}</td>
                    <td>{obj.bio}</td>
                    <td>{obj.email}</td>
                    <td>{obj.public_repos}</td>
                    <td>{obj.followers}</td>
                </tr>
            })}
        </tbody>
    </table>
    </>
  );
}
