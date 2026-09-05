import { useState } from "react";

export default function FormDemo1() {
  const defaultUserData = {
    firstName: "",
    lastName: "",
    email: "",
    salary: 0,
    phone: 0,
  };
  const [user, setUser] = useState(defaultUserData);

  const changeHandler = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitMyForm = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted", user);
  };
  const resetMyForm = () => {
    setUser({ ...defaultUserData });
  };
  return (
    <>
      <div className="col-sm-4 offset-4 border border-3 rounded-3 p-3">
        <h3>Form</h3>

        <form onSubmit={submitMyForm} onReset={resetMyForm}>
          <p>
            FirstName: <input name="firstName" value={user.firstName} onChange={changeHandler} />
          </p>
          <p>
            lastName: <input name="lastName" value={user.lastName} onChange={changeHandler} />
          </p>
          <p>
            Email: <input name="email" value={user.email} onChange={changeHandler} />
          </p>
          <p>
            Salary: <input name="salary" value={user.salary} onChange={changeHandler} />
          </p>
          <p>
            Phone: <input name="phone" value={user.phone} onChange={changeHandler} />
          </p>

          <input type="reset" value="Reset" />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <pre>{JSON.stringify(user)}</pre>
    </>
  );
}
