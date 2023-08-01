import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useHistory } from 'react-router';

const Notes = (props) => {
    const context = useContext(noteContext);
    let history = useHistory()
    const { questions, getQuestions, editQuestion} = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getQuestions();
        }
        else{
            history.push("/login")
        }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

    const updateQuestion = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    const handleClick = (e)=>{ 
        editQuestion(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("UPDATED SUCCESSFULLY", "success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    let myStyle1 = {
        color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'#000066':'white',
        fontFamily: 'fantasy'
    }
    let myStyle2 = {
        color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'black':'white',
        fontFamily: 'cursive'
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} mode={props.mode}/>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundColor: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'black'}}>
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel" style={myStyle1}>EDIT QUESTION</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label" style={myStyle2}>SUBJECT</label>
                                    <input type="text" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label" style={myStyle2}>QUESTION</label>
                                    <input type="text" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label" style={myStyle2}>NAME</label>
                                    <input type="text" style={{backgroundColor: 'rgb(36 74 104)', color:'#fd7e14', fontFamily:'cursive'}} className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-danger" data-bs-dismiss="modal">CANCEL</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-success">UPDATE QUESTION</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h1 style={{color: (props.mode==='dark' || props.mode==='primary' || props.mode==='success')?'white':'#000066', fontFamily:'fantasy'}}>QUESTIONS</h1>
                <div className="container mx-2" style={myStyle2}> 
                {questions.length===0 && 'No questions to display'}
                </div>
                {questions.map((note) => {
                    return <Noteitem key={note._id} updateQuestion={updateQuestion} showAlert={props.showAlert} note={note} mode={props.mode}/>
                })}
            </div>
        </>
    )
}

export default Notes
