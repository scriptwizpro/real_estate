import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


function Register() {
  const [err, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new formData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // console.log(username, email, password);
    
    try {

    const res = await axios.post("http://localhost:8800/api/auth/register", {
      username, email, password
    })

    console.log(res.data)

  } catch(err) {
    console.log(err);
    // setError()
  }

  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;