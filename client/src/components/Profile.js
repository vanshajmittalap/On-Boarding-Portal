import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const Profile = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, edunotes, getNotesedu } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
      getNotesedu();
    } else {
      // history.push("/login")
    }
  });
  return (
    <>
    <Link className="btn btn-success mx-1" to="/questions" role="button">ASK YOUR QUESTIONS</Link>
      {notes.map((note) => {
        return (
          <>
          <div className="container"><h1>YOUR PROFILE SUMMARY</h1></div>
          <br></br>
            <div className="container">
              <h1>PERSONAL INFORMATION</h1>
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
                    <td>{note.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>MIS NUMBER</td>
                    <td>{note.mis}</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>EMAIL ADDRESS</td>
                    <td>{note.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>MOBILE NUMBER</td>
                    <td>{note.mobile}</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>PARENT MOBILE NUMBER</td>
                    <td>{note.mobileparent}</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>ADDRESS</td>
                    <td>{note.address}</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>STATE/DOMICILE</td>
                    <td>{note.state}</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>GENDER</td>
                    <td>{note.gender}</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>DATE OF BIRTH</td>
                    <td>{note.birth}</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>MOTHER's NAME</td>
                    <td>{note.mothername}</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>FATHER's NAME</td>
                    <td>{note.fathername}</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>CATEGORY</td>
                    <td>{note.cast}</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>RELIGION</td>
                    <td>{note.religion}</td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td>SEAT ACCEPTANCE FEE PAYMENT REFERENCE NUMBER</td>
                    <td>{note.seat}</td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td>PARTIAL ADMISSION FEE PAYMENT REFERENCE NUMBER</td>
                    <td>{note.admission}</td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td>INSTITUTE FEE PAYMENT REFERENCE NUMBER</td>
                    <td>{note.institute}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      })}

{edunotes.map((edunote) => {
        return (
          <>
            <div className="container">
              <h1>EDUCATIONAL INFORMATION</h1>
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
                    <td>COURSE PROGRAM</td>
                    <td>{edunote.course}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>COURSE BRANCH</td>
                    <td>{edunote.branch}</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>YEAR OF GRADUATION</td>
                    <td>{edunote.gradyear}</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>JEE APPLICATION NUMBER</td>
                    <td>{edunote.jeenumber}</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>JEE MAINS RANK</td>
                    <td>{edunote.jee}</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>CLASS 12th PERCENTAGE</td>
                    <td>{edunote.class12}</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>CLASS 12th BOARD</td>
                    <td>{edunote.board12}</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>CLASS 12th BOARD ROLL NUMBER</td>
                    <td>{edunote.roll12}</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>CLASS 10th PERCENTAGE</td>
                    <td>{edunote.class10}</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>CLASS 10th BOARD</td>
                    <td>{edunote.board10}</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>CLASS 10th BOARD ROLL NUMBER</td>
                    <td>{edunote.roll10}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Profile;
