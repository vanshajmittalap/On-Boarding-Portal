import React, {useContext, useEffect} from 'react'
import noteContext from "../context/notes/noteContext";
import AdminProfile from "./AdminProfile.js";

const Admin = () => {
  const context = useContext(noteContext);
  const {getUsers,users} = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUsers();
    } else {
      // history.push("/login")
    }
  });
  return (
    <>
       <div className="container"><h1>ALL REGISTERED STUDENTS</h1></div>
          <br></br>
        {users.map((user) => {
        return (
          <>
            <div className="container">
              <h1>STUDENT DETAILS :-</h1>
            </div>
            <div className="container">
              <table className="table table-dark table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">FEILD</th>
                    <th scope="col">VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>NAME</td>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>EMAIL ADDRESS</td>
                    <td>{user.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                MORE INFORMATION
              </button>
            </p> */}
              {/* <div className="collapse" id="collapseWidthExample"> */}
                <div className="card card-body">
                  <AdminProfile id={user._id}/>
                </div>
              {/* </div> */}
          </>
        );
      })}
    </>
  );
};

export default Admin;
