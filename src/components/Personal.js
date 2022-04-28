import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext";
import { useHistory } from "react-router-dom";

function Personal(props) {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        mis: "",
        mobile: "",
        mobileparent: "",
        address: "",
        state: "",
        gender: "",
        birth: "",
        mothername: "",
        fathername: "",
        cast: "",
        religion: "",
        seat: "",
        admission: "",
        institute: ""
      });
      let history = useHistory();
      const context = useContext(noteContext);
      const {addNote} = context;
      const handlenext = ()=>{
        history.push("/education");
      }
      const handlesubmit = (e)=>{
        e.preventDefault();
        addNote(credentials.name, credentials.email, credentials.mis, credentials.mobile, credentials.mobileparent, credentials.address, credentials.state, credentials.gender, credentials.birth, credentials.mothername, credentials.fathername, credentials.cast, credentials.religion, credentials.seat, credentials.admission, credentials.institute);
        setCredentials({name: "",
        email: "",
        mis: "",
        mobile: "",
        mobileparent: "",
        address: "",
        state: "",
        gender: "",
        birth: "",
        mothername: "",
        fathername: "",
        cast: "",
        religion: "",
        seat: "",
        admission: "",
        institute: ""})
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
        <h1 style={myStyle1}>PERSONAL INFORMATION</h1>
        <form >
            <div className="mb-3">
                <label htmlFor="name" className="form-label" style={myStyle2}>NAME</label>
                <input type="text" className="form-control" id="name" name="name" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="mis" className="form-label" style={myStyle2}>MIS NUMBER</label>
                <input type="number" className="form-control" id="mis" name="mis" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label" style={myStyle2}>EMAIL ADDRESS</label>
                <input type="email" className="form-control" id="email" name="email" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="mobile" className="form-label" style={myStyle2}>MOBILE NUMBER</label>
                <input type="tel" className="form-control" id="mobile" name="mobile" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="mobileparent" className="form-label" style={myStyle2}>PARENT MOBILE NUMBER</label>
                <input type="tel" className="form-control" id="mobileparent" name="mobileparent" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label" style={myStyle2}>ADDRESS</label>
                <textarea type="text" className="form-control" id="address" name="address" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="state" className="form-label" style={myStyle2}>DOMICILE (STATE)</label>
                <input type="text" className="form-control" id="state" name="state" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label" style={myStyle2}>GENDER</label>
                <input type="text" className="form-control" id="gender" name="gender" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="birth" className="form-label" style={myStyle2}>DATE of BIRTH</label>
                <input type="date" className="form-control" id="birth" name="birth" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="mothername" className="form-label" style={myStyle2}>MOTHER's NAME</label>
                <input type="text" className="form-control" id="mothername" name="mothername" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="fathername" className="form-label" style={myStyle2}>FATHER's NAME</label>
                <input type="text" className="form-control" id="fathername" name="fathername" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="cast" className="form-label" style={myStyle2}>CATEGORY</label>
                <input type="text" className="form-control" id="cast" name="cast" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="religion" className="form-label" style={myStyle2}>RELIGION</label>
                <input type="text" className="form-control" id="religion" name="religion" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="seat" className="form-label" style={myStyle2}>SEAT ACCEPTANCE FEE PAYMENT REFERENCE NUMBER (Paid to JOSAA/CSAB)</label>
                <input type="text" className="form-control" id="seat" name="seat" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="admission" className="form-label" style={myStyle2}>PARTIAL ADMISSION FEE PAYMENT REFERENCE NUMBER (Paid to JOSAA/CSAB)</label>
                <input type="text" className="form-control" id="admission" name="admission" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="institute" className="form-label" style={myStyle2}>INSTITUTE FEE PAYMENT REFERENCE NUMBER (Paid to Institute)</label>
                <input type="text" className="form-control" id="institute" name="institute" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} required/>
            </div>
            <button type="reset" className="btn btn-danger" style={{marginLeft:'30px', marginBottom:'20px'}}>RESET</button>
            <button type="submit" className="btn btn-danger" onClick={handlesubmit} style={{marginLeft:'30px', marginBottom:'20px'}}>SAVE</button>
            <button type="submit" className="btn btn-danger" onClick={handlenext} style={{marginLeft:'30px', marginBottom:'20px'}}>NEXT</button>
        </form>
      </div>
    </>
  );
}

export default Personal;
