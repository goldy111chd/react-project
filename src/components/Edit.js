import React, { Component } from 'react';
class Edit extends Component { 
   

    
 
    render() {
    return (
        <div className="container">
       
          <div className="form-group">
         
            <label for="email">Email:</label>
            <input type="email" className="form-control"  id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="form-group">
            <label for="pwd">First Name:</label>
            <input type="text" className="form-control"  id="pwd" placeholder="first_name" name="fn" />
          </div>
          <div className="form-group">
            <label for="pwd">Last Name:</label>
            <input type="password" className="form-control" id="pwd" placeholder="last_name" name="ln" />
          </div>
         
          <button type="submit" className="btn-set btn-default">Update</button>
       
      </div>
    )
}
  }
  
  export default Edit;
  