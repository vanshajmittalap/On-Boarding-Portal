import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  const [edunotes, setEdunotes] = useState(notesInitial)
  const [notesadmin, setNotesadmin] = useState(notesInitial)
  const [eduadmin, setEduadmin] = useState(notesInitial)
  const [users, setUsers] = useState(notesInitial)
  const [check, setCheck] = useState('not')
  
  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setNotes(json)
  }
  // admin all notes
  const getNotesadmin = async (id) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes/admin/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    if(json){
      setNotesadmin(json)
    }
    else{
      setNotesadmin(notesInitial)
    }
  }
  // admin all education
  const getNoteseduadmin = async (id) => {
    // API Call 
    const response = await fetch(`${host}/api/education/fetchallnotes/admin/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    if(json){
      setNotesadmin(json)
    }
    else{
      setNotesadmin(notesInitial)
    }
  }
  //user
  const getUsers = async () => {
    // API Call 
    const response = await fetch(`${host}/api/auth/getuser/admin`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setUsers(json)
  }
  // get education
  const getNotesedu = async () => {
    // API Call 
    const response = await fetch(`${host}/api/education/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setEdunotes(json)
  }

  // Add a Note
  const addNote = async (name, email, mis, mobile, mobileparent, address, state, gender, birth, mothername, fathername, cast, religion, seat, admission, institute) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({name, email, mis, mobile, mobileparent, address, state, gender, birth, mothername, fathername, cast, religion, seat, admission, institute})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }
  // Add a note education
  const addNoteedu = async (course, branch, gradyear, jeenumber, jee, class12, board12, roll12, class10, board10, roll10) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/education/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({course, branch, gradyear, jeenumber, jee, class12, board12, roll12, class10, board10, roll10})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }
  
  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    console.log(json)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json(); 
    console.log(json)
    
     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }
    // QUESTIONS

  const questionsInitial = []
  const [questions, setQuestions] = useState(questionsInitial)

  // Get all Notes
  const getQuestions = async () => {
    // API Call 
    const response = await fetch(`${host}/api/questions/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setQuestions(json)
  }

  // Add a Note
  const addQuestion = async (title, description, tag) => {
  
    const response = await fetch(`${host}/api/questions/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });

    const question = await response.json();
    setQuestions(questions.concat(question))
  }

  // Delete a Note
  const deleteQuestion= async (id) => {
    // API Call
    const response = await fetch(`${host}/api/questions/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    console.log(json)
    const newQuestions = questions.filter((question) => { return question._id !== id })
    setQuestions(newQuestions)
  }

  // Edit a Note
  const editQuestion = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/questions/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json(); 
    console.log(json)
    
     let newQuestions = JSON.parse(JSON.stringify(questions))
    // Logic to edit in client
    for (let index = 0; index < newQuestions.length; index++) {
      const element = newQuestions[index];
      if (element._id === id) {
        newQuestions[index].title = title;
        newQuestions[index].description = description;
        newQuestions[index].tag = tag; 
        break; 
      }
    }  
    setQuestions(newQuestions);
  }

  return (
    <NoteContext.Provider value={{questions, addQuestion, deleteQuestion, editQuestion, getQuestions, users, notesadmin, eduadmin, getUsers, getNotesadmin, getNoteseduadmin, check, setCheck, notes, addNote, deleteNote, editNote, getNotes, addNoteedu,getNotesedu, edunotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;