import React, { useState } from "react";
export const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);

    }
    return (
        <div className="auth-form-container">  
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor ="name">Full Name</label>
                <input value= {name} type="text" placeholder="Enter your name" id="name" name="name"></input>
                <label htmlFor ="username">Username</label>
                <input value= {username}type="text" placeholder="Enter Username" id="username" name="username"></input><br></br>
                <label htmlFor ="pw">Password</label>
                <input value= {pass}type="password" placeholder="Enter Password" id="pw" name="pw"></input>
                <button type="submit">Log in</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Log In</button>
        </div>
    )
}