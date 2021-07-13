import React from 'react';
import { Link } from "react-router-dom"; 
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = () => {
        console.log("Logging in...")
        dispatch(
          fetchUser({
            email: email,
            password: password
          })
        )
      }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your email: 
                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label> 
                    Enter your password: 
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" value={"Log in"} />
                </form>
            <p>Don't have a user yet? <Link to="/sign-up">Sign Up</Link></p>
        </div>
    )
}