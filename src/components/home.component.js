import axios from 'axios';
import React, {Component} from 'react';


export default class Home extends Component{

    componentDidMount(){
        const config = {
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('token')
            }
        };

        axios.get('user', config).then(
            response => {
                console.log(response);
            },
        
            err => {
                console.log(err)
        }
    )
}

    render(){
        return(
            <h2>You are not logged in</h2>
        )
    }


}