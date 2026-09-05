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
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
    salary: null,
    phone: null,

  }); 

   const changeHandler = (e:any)=>{
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setUser({...user , [fieldName]:fieldValue});

    if(fieldValue == ''){
      setErrors({...errors, [fieldName]:`${fieldName} is required`})
    }else{
      setErrors({...errors, [fieldName]:''})
    }
  }

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
            FirstName: <input name="firstName" value={user.firstName} onChange={changeHandler} required /> 
            <span className="text-danger">{errors.firstName}</span>
          </p>
          <p>
            lastName: <input name="lastName" value={user.lastName} onChange={changeHandler} />
            <span className="text-danger">{errors.lastName}</span>
          </p>
          <p>
            Email: <input name="email" type="email" value={user.email} onChange={changeHandler} required />
            <span className="text-danger">{errors.email}</span>
          </p>
          <p>
            Salary: <input name="salary" value={user.salary} onChange={changeHandler} />
            <span className="text-danger">{errors.salary}</span>
          </p>
          <p>
            Phone: <input name="phone" value={user.phone} onChange={changeHandler} />
           
          </p>

          <input type="reset" value="Reset" />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <pre>{JSON.stringify(user)}</pre>
      <pre>{JSON.stringify(errors)}</pre>
    </>
  );
}
