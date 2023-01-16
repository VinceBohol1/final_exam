
import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        };
        console.log(data);

        axios.post('https://my-json-server.typicode.com/VinceBohol1/final_exam/posts', {data}).then(
            response => {
                localStorage.setItem('token', response.data.token);
                console.log(response);
                console.log(response.data);
                console.log("Data posted");
            }
        ).catch(err => {
                console.log(err)
                console.log("something's wrong")
            })
};
        




    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>

                
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" 
                        onChange= {e => this.email = e.target.value}/>
                </div>

                <br></br>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" 
                        onChange= {e => this.password = e.target.value}/>
                </div>

                <br></br>

                <button  className="btn btn-primary btn-block">Log in</button>

            </form>
                
        )
    }
}