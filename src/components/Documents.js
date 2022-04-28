import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function Documents(props) {
    const [credentials, setCredentials] = useState({
        photo: "vanshaj"
      });
      let history = useHistory();
      const handlenext = ()=>{
        history.push("/result");
      }
      const handleback = ()=>{
        history.push("/education");
      }
      const handlesubmit = ()=>{
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
        <h1 style={myStyle1}>UPLOAD DOCUMENTS</h1>
        <h6>Each File Name must be in following format :- "MIS NUMBER - NAME ..."</h6>
        <h6>For Example :- "112016041-VanshajMittal.pdf"</h6>
        <br></br>
        <form action="http://localhost:5000/api/document/uploadfile" method="post" encType="multipart/form-data">
            <div className="mb-3">
                <label htmlFor="photoID" className="form-label" style={myStyle2}>PHOTO ID PROOF (Like- AADHAAR CARD, PAN CARD, etc.)</label>
                <input type="file" className="form-control" id="photoID" name="photoID" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="photo" className="form-label" style={myStyle2}>YOUR PASSPORT SIZE PHOTOGRAPH</label>
                <input type="file" className="form-control" id="photo" name="photo" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="marksheet12" className="form-label" style={myStyle2}>CLASS 12th MARKSHEET/PASS CERTIFICATE</label>
                <input type="file" className="form-control" id="marksheet12" name="marksheet12" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="marksheet10" className="form-label" style={myStyle2}>CLASS 10th MARKSHEET/PASS CERTIFICATE</label>
                <input type="file" className="form-control" id="marksheet10" name="marksheet10" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="charactercertificate" className="form-label" style={myStyle2}>STUDY AND CONDUCT CERTIFICATE/CHARACTER CERTIFICATE</label>
                <input type="file" className="form-control" id="charactercertificate" name="charactercertificate" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="jeeresult" className="form-label" style={myStyle2}>JEE MAINS RESULT/JEE MAINS ADMIT CARD</label>
                <input type="file" className="form-control" id="jeeresult" name="jeeresult" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="josaa" className="form-label" style={myStyle2}>PROVISIONAL ADMISSION LETTER (Downloaded from JOSAA)</label>
                <input type="file" className="form-control" id="josaa" name="josaa" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="castecertificate" className="form-label" style={myStyle2}>SC/ST/OBC-NCL/PWD/EWS CERTIFICATE</label>
                <input type="file" className="form-control" id="castecertificate" name="castecertificate" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="castemaharashtra" className="form-label" style={myStyle2}>CASTE VALIDITY CERTIFICATE (For Students Having Caste Certificate issued by Maharashtra State)</label>
                <input type="file" className="form-control" id="castemaharashtra" name="castemaharashtra" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="tc" className="form-label" style={myStyle2}>MIGRATION/TRANSFER CERTIFICATE</label>
                <input type="file" className="form-control" id="tc" name="tc" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="gap" className="form-label" style={myStyle2}>GAP CERTIFICATE (If Applicable)</label>
                <input type="file" className="form-control" id="gap" name="gap" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="medical" className="form-label" style={myStyle2}>MEDICAL FITNESS CERTIFICATE (As per JOSAA format)</label>
                <input type="file" className="form-control" id="medical" name="medical" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="studentantirag" className="form-label" style={myStyle2}>SIGNED STUDENT's ANTI RAGGING UNDERTAKING</label>
                <input type="file" className="form-control" id="studentantirag" name="studentantirag" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="parentantirag" className="form-label" style={myStyle2}>SIGNED PARENT's ANTI RAGGING UNDERTAKING</label>
                <input type="file" className="form-control" id="parentantirag" name="parentantirag" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="josaareceipt" className="form-label" style={myStyle2}>RECEIPT of PARTIAL ADMISSION FEE PAID to JOSAA</label>
                <input type="file" className="form-control" id="josaareceipt" name="josaareceipt" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="institutefee" className="form-label" style={myStyle2}>RECEIPT of INSTITUTE FEE PAYMENT (paid at Institute online portal)</label>
                <input type="file" className="form-control" id="institutefee" name="institutefee" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="undertaking" className="form-label" style={myStyle2}>UNDERTAKING for NON AVAILABILITY of PRESCRIBE DOCUMENTS (If applicable)</label>
                <input type="file" className="form-control" id="undertaking" name="undertaking" style={{backgroundColor: "rgb(36 74 104)", color: "#fd7e14", fontFamily: "cursive"}}
                onChange={onChange}/>
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

export default Documents
