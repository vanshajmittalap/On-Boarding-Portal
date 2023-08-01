import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addQuestion} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addQuestion(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("ADDED SUCCESSFULLY", "success")
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    let myStyle1 = {
        color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'#000066',
        fontFamily: 'fantasy'
    }
    let myStyle2 = {
        color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'black',
        fontFamily: 'cursive'
    }
    return (
        <div className="container my-3">
            <h1 style={myStyle1}>ASK YOUR QUESTIONS</h1>
            <h3 style={myStyle1}>For discussion on your doubts join 'DISCUSSION CLASSROOM'</h3>
            <h6 style={myStyle1}>You will get your Username and Password for this Classroom on your registered E-Mail Id soon.</h6>
            {/* <a href="https://discussion-classroom-iiit-pune.netlify.app/" target='_blank' rel='noreferrer' class="btn btn-danger btn-lg" role="button" style={{marginLeft:'40%', padding:'10px 10px 10px 10px'}}>DISCUSSION CLASSROOM</a> */}
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"style={myStyle2}>Write the Subject Name</label>
                    <input type="text" className="form-control" id="title" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"style={myStyle2}>Write Your Question Here</label>
                    <input type="text" className="form-control" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"style={myStyle2}>Write Your Name</label>
                    <input type="text" className="form-control" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" style={{backgroundColor:'#0000cc'}} onClick={handleClick}>Add Question</button>
            </form>
        </div>
    )
}

export default AddNote
