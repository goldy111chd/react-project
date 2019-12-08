import React, {useState, useEffect} from 'react';

const Edit = ({id, getEmployees, setShowForm}) => { 
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [salary, setSalary] = useState("")

const handlesubmit = (e) =>{
  e.preventDefault()
    const url = `http://dummy.restapiexample.com/api/v1/update/${id}`;
const data ={
  name: name,
  salary: salary,
  age: age
}
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(res => {
            console.log("Edit Response", res)
            getEmployees()
            setShowForm(false)
        })
      }

          return(
          <form className="main-heading" onSubmit={handlesubmit}>
           id:{id}
          <div className="form-group">
            <label for="pwd">Name:</label>
            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} id="pwd" placeholder="name" name="fn" />
            <label for="pwd">Age:</label>
            <input type="number" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)} id="pwd" placeholder="age" name="age" />
            <label for="sal">Salery:</label>
            <input type="number" className="form-control"  value={salary} onChange={(e)=>setSalary(e.target.value)} id="email" placeholder="Enter Salery" name="Sal" />
          </div>
          <input type="submit" className="btn-set btn-default" value="Update"/>
          </form>
    )
}
  export default Edit;
  