import React, { useState } from 'react';
import { loginUser } from "../api/loginUser.js";

const Hooks = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsPending(true);
        setUser(null);
        setError(null);

        try {
            const response = await loginUser(username, password);
            setUser(response.data);
        }   
        catch(err) {
            setError(err.error)
        }
        finally {
            setIsPending(false);
        }
    }


  return (
    <form onSubmit={handleSubmit}>
        <div>
            <lable>Username:</lable>
            <input type="text" 
            className="outline-none border py-1 px-4 text-black mb-2 ml-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </div>

        <div>
            <lable>Password:</lable>
            <input type="password"
            className="outline-none border py-1 px-4 text-black mb-2 ml-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>

        <button type="submit" disabled={isPending} className='bg-blue-300 text-white py-1 px-4 mb-2'> 
            {isPending ? "Logging in..." : "Login"}
        </button>

        {user && <p style={{color: "green"}}>Logged in: {user.email}</p>}
        {error && <p style={{color: "red"}}>{error}</p>}
      
    </form>
  )
}

export default Hooks;
