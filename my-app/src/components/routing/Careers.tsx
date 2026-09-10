import { Outlet, Link } from "react-router-dom";

export default function Careers() {
  return (
    <>
      <h2>This is Careers Component</h2>

      <p>
        <Link to="permanent">Permanent Jobs</Link>
      </p>

      <p>
        <Link to="contract">Contract Jobs</Link>
      </p>
     
      <Outlet/>
    </>
    
  );
}
