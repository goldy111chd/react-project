import React, { Component } from 'react';
import Edit from './Edit';

class Crud extends Component {

    constructor(){
        super();
        this.state ={
            email: [],
            first_name: [],
            last_name: [],
            avatar:[],
            fileds:[],
            togel:false
        };
      
    }
    update=()=>{
        this.setState({togel:true})
    }
    


    componentDidMount(){
        fetch('https://reqres.in/api/users/?results=500')
        .then (results => {
            return results.json();
        })
        .then(data1 =>{
            let filed = data1.data.map((filed) =>{
                return(
                    <tr key={filed.data}>
                   <td class="hover">{filed.email}</td>
                   <td class="hover">{filed.first_name}</td>
                   <td class="hover">{filed.last_name}</td>
                   <td class="hovers">
                   <button type="button" class="btn btn-success update" onClick ={this.update} >Update</button> 
                   
                   <button type="button" class="btn btn-danger delete">Delete</button>
                 
                  </td>
                   </tr>

                    
            )
                })
                this.setState({ fileds:filed});
                console.log("state", this.state.filed);
            })
        }
    
    render() {
        return (
            <div className="container">
            <table>
                <tr class="main">
                    <td class="fild">Email</td>
                    <td class="fild">First_name</td>
                    <td class="fild">Last Name</td>
                    <td class="fild" >Button</td>
            </tr>
            {this.state.togel?<Edit />:null }
            {this.state.fileds}
            
            </table>
            </div>
    );
        }
        }
export default Crud;