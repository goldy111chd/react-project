import React from 'react';
import { tsConstructorType } from '@babel/types';
const Edit = () => { 
    
  const [name,setName]=React.useState("sanjeet")
  //  const handleSubmit =(e) => {
   
  //     e.preventDefault();
  //     const id = this.props.match.params.id
  //     const url = `http://dummy.restapiexample.com/api/v1/update/${id}`

  //     const data = {
  //         name: this.state.name,
  //         salary: this.state.salary,
  //         age: this.state.age
    
  //       };

  //     fetch(url, {
  //         method: 'PUT',
  //         body: JSON.stringify(data),
  //         headers: {
  //             'Content-Type': 'application/json'
  //         }
  //     })
  //         .then(response => response.json())
  //         .then(data => {
  //             console.log("UPDATED DATA", data)
  //             if(data){
  //                 this.props.history.push('/dashboard')
  //                 alert("User Updated Successfully");
  //             } else{
  //                 alert("Error while Updating");

  //             }
  //           })
  //         }

//   useEffect(()=>{
//     const id = this.props.match.params.id
//     const url = `http://dummy.restapiexample.com/api/v1/employee/${id}`;

//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log("single user data", data)
//             this.setState({ name: data.employee_name, salary: data.employee_salary, age: data.employee_age, })
//         });

// }

// return(
//   <div>
//     hello
//   </div>
//           // <div className="main-heading">
//           // <div className="form-group">
//           //   <label for="pwd">First Name:</label>
//           //   <input type="text" className="form-control"  id="pwd" placeholder="first_name" name="fn" />
     
//           //   <label for="pwd">Age:</label>
//           //   <input type="password" className="form-control" id="pwd" placeholder="last_name" name="age" />
          
//           //   <label for="sal">Salery:</label>
//           //   <input type="taxt" className="form-control"  id="email" placeholder="Enter Salery" name="Sal" />
//           // </div>
//           // <button type="submit" className="btn-set btn-default">Update</button>
//           // </div>
//     )

return(
  <div>
    <h1>{name}</h1>
    <button onClick={() => setName("ajeet")}>Submit</button>
  </div>
)
}

  export default Edit;
  