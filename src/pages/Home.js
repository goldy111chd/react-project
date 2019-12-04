import React,{useEffect,useState} from 'react'
import Edit from '../components/Edit';

const Home = () => {
    const [employees, setEmployees] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [id, setId] = useState(null)
    useEffect(()=>{
        getEmployees();

    },[])
    const getEmployees = () => {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(data=>data.json())
        .then(res=> {
            console.log("res", res);
            setEmployees(res)
        })
    }
  const handleShowForm = (i) => {
    setShowForm(!showForm)
    setId(i)
  }
console.log("employees",employees)
    return (
        <div className="container">
         <div className="row">
        <div className="col-md-8">
            <table>
            {employees && employees.map((item)=>  
            <tr>
            <td>{item.employee_name}</td>
            <td>{item.employee_salary}</td>
            <td>{item.employee_age}</td>
            <button className="btns" onClick={()=>handleShowForm(item.id)}>Update</button>
            <button className="btnD" >Delete</button>
           </tr> 
            ) 
            } 
            </table>
            </div>
            <div className="col-md-4">
            {showForm === true ? <Edit id={id} />: null}
            </div>
            </div>
        </div>

    )
}

export default Home