import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext";
import { useHistory } from "react-router-dom";

function Education(props) {
    const [credentials, setCredentials] = useState({
        course: "",
        branch: "",
        gradyear: "",
        jeenumber: "",
        jee: "",
        class12: "",
        board12: "",
        roll12: "",
        class10: "",
        board10: "",
        roll10: ""
      });
      let history = useHistory();
      const context = useContext(noteContext);
      const {addNoteedu} = context;
      const handlenext = ()=>{
        history.push("/documents");
      }
      const handleback = ()=>{
        history.push("/personal");
      }
      const handlesubmit = (e)=>{
        e.preventDefault();
        addNoteedu(credentials.course, credentials.branch, credentials.gradyear, credentials.jeenumber, credentials.jee, credentials.class12, credentials.board12, credentials.roll12, credentials.class10, credentials.board10, credentials.roll10);
        setCredentials({course: "",
        branch: "",
        gradyear: "",
        jeenumber: "",
        jee: "",
        class12: "",
        board12: "",
        roll12: "",
        class10: "",
        board10: "",
        roll10: ""})
        props.showAlert("ADDED SUCCESSFULLY", "success")
    }  
      
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  let myStyle1 = {
    color: "#000066",
    fontFamily: "fantasy",
  };
  let myStyle2 = {
    color: "black",
    fontFamily: "cursive",
  };
    return (
        <>
      <div className="container mt-2">
        <h1 style={myStyle1}>EDUCATIONAL INFORMATION</h1>
        <form >
            <div className="mb-3">
                <label htmlFor="course" className="form-label" style={myStyle2}>COURSE PROGRAM</label>
                <input type="text" className="form-control" id="course" name="course" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="branch" className="form-label" style={myStyle2}>COURSE BRANCH ALLOTTED</label>
                <input type="text" className="form-control" id="branch" name="branch" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="gradyear" className="form-label" style={myStyle2}>YEAR OF GRADUATION</label>
                <input type="number" className="form-control" id="gradyear" name="gradyear" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="jeenumber" className="form-label" style={myStyle2}>JEE APPLICATION NUMBER</label>
                <input type="number" className="form-control" id="jeenumber" name="jeenumber" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="jee" className="form-label" style={myStyle2}>JEE MAINS RANK</label>
                <input type="number" className="form-control" id="jee" name="jee" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="class12" className="form-label" style={myStyle2}>CLASS 12th PERCENTAGE</label>
                <input type="number" className="form-control" id="class12" name="class12" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="board12" className="form-label" style={myStyle2}>CLASS 12th BOARD</label>
                <input type="text" className="form-control" id="board12" name="board12" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="roll12" className="form-label" style={myStyle2}>CLASS 12th BOARD ROLL NUMBER</label>
                <input type="number" className="form-control" id="roll12" name="roll12" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="class10" className="form-label" style={myStyle2}>CLASS 10th PERCENTAGE</label>
                <input type="number" className="form-control" id="class10" name="class10" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="board10" className="form-label" style={myStyle2}>CLASS 10th BOARD</label>
                <input type="text" className="form-control" id="board10" name="board10" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="roll10" className="form-label" style={myStyle2}>CLASS 10th BOARD ROLL NUMBER</label>
                <input type="number" className="form-control" id="roll10" name="roll10" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <button type="reset" className="btn btn-danger" style={{marginLeft:'30px', marginBottom:'20px'}}>RESET</button>
            <button type="submit" className="btn btn-danger" onClick={handlesubmit} style={{marginLeft:'30px', marginBottom:'20px'}}>SAVE</button>
            <button type="submit" className="btn btn-danger" onClick={handlenext} style={{marginLeft:'30px', marginBottom:'20px'}}>NEXT</button>
            <button type="submit" className="btn btn-danger" onClick={handleback} style={{marginLeft:'30px', marginBottom:'20px'}}>BACK</button>
        </form>
      </div>
    </>
    )
}

export default Education
