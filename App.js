import React, { useState,useEffect } from "react"
import './components/App.css';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import InputBar from "./components/InputBar";

import uuid from 'react-uuid';

import { Modal, ModalHeader } from 'reactstrap';



function App() {
  const [ Todo, setTodo] = useState([])


  console.log( 'todo length: ' , Todo.length )

function addTask( note ) {
    setTodo( [...Todo , note] )
    //console.log( note)
}


function onDelete( id ) {
  setTodo( prevNote => {
    return[...prevNote.filter((note , index) => 
      index !== id )]
  })
}

  return (
    <div>
      <Header/>
      
      {/* <Popup/> */}
      <InputBar addTask={addTask} />
      <div className="StickyArea">
      {
        Todo.map( ( note , index ) => {
          return(
            <Dashboard 
              id={index}
              title={note.title}
              message={note.message}
              deleteNote={onDelete}
              addTask={addTask}
            />
          )
        })
      }
      </div>

    </div>
  )
}

export default App