import React from "react"
import style from "./style.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUserUp } from "../../actions/userActions";

export default function SignUp() {
    const dispatch = useDispatch();
    const [userdata, setUserData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      password: ""
    });
  
    const handleOnChange = e => {
      e.persist();
      setUserData(prevUserData => ({
        ...prevUserData,
        [e.target.name]: e.target.value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(signUserUp(userdata));
    };
    return (
        <div style={style}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name: 
                    <input
                        name="firstName"
                        type="text"
                        onChange={handleOnChange}
                    />
                </label>
                <label>
                    Last Name: 
                    <input
                        name="lastName"
                        type="text"
                        onChange={handleOnChange}
                    />
                </label>
                <label>
                    Email: 
                    <input
                        name="email"
                        type="email"
                        onChange={handleOnChange}
                    />
                </label>
                <label>
                    Date of Birth: 
                    <input
                        name="dateOfBirth"
                        type="date"
                        onChange={handleOnChange}
                    />
                </label>
                <label>
                    Gender: 
                    <select
                        name="gender"
                        onChange={handleOnChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label> 
                    Password: 
                    <input
                        name="password"
                        type="password"
                        onChange={handleOnChange}  
                    />
                </label>
                <input type="submit" value="Log in" />
                </form>
        </div>
    )
}