import { useState } from "react";
import "./Form.css";

function Form({ handleData }) {
  const [values, setvalues] = useState({
    username: "",
    phone: "",
    Address: "",
    Email: "",
    Birthday: "",
  });
  function handlesubmit(e) {
    e.preventDefault();
    handleData(values);
    setvalues({
      username: "",
      phone: "",
      Address: "",
      Email: "",
      Birthday: "",
    });
  }
  function handlechange(e) {
    setvalues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <h1>Registration Form</h1>
        <label>Username</label>
        <input
          type="text"
          value={values.username}
          placeholder="enter your name"
          onChange={handlechange}
          name="username"
          required={true}
        />
        <label>phone number</label>

        <input
          type="number"
          value={values.phone}
          placeholder="enter your phone number"
          onChange={handlechange}
          name="phone"
          required={true}
        />
        <label>Skills</label>
        <input
          type="text"
          value={values.Address}
          placeholder="enter your Skills"
          onChange={handlechange}
          name="Address"
        />
        <label>Email</label>
        <input
          type="email"
          value={values.Email}
          placeholder="enter your Email Address"
          onChange={handlechange}
          name="Email"
          required={true}
        />
        <label>Birthday</label>
        <input
          type="date"
          value={values.Birthday}
          placeholder="enter your Birthday date"
          onChange={handlechange}
          name="Birthday"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
