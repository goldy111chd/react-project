import React, { Component } from 'react';
const Model = (p)=>{
    return(
<div class="container">

  <div class="modal fade setting" id={p.id} role="dialog">
    <div class="modal-dialog w100">
    
     
      <div class="modal-content p1">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">
            <div className="main">
                <table >
                    <tr class="col">
         <td> <div class="first-name">Email</div></td>
         <td> <div class="first-name">First Name</div></td>
         <td> <div class="first-name">Last Name</div></td>
          <td><div class="first-name">Avtar</div></td>
          </tr>
          <tr>
    <td>{p.email}</td>
    <td>{p.firstname}</td>
    <td>{p.lastname}</td>
    <td><img src={p.avatar} /></td>
              </tr>
          </table>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default Model;