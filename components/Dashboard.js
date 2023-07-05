import { computeHeadingLevel } from '@testing-library/react';
import React, { useState , useEffect } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import uuid from 'react-uuid';
function Dashboard(props) {
  const date = new Date(Date.now()).toDateString();
  const newDate = date.replace(" ", ", ")
  const color_palette = ["#f28b82" ,"#fbbc04", "#fff475" , "#ccff90" , "#a7ffeb" , "#cbf0f8" , "#aecbfa" , "#d7aefb" , "#fdcfe8", "#e6c9a8","#e8eaed"]

  //console.log( props )
  const[ modal , setmodal ] = useState(false)

  const[ newTask , setnewTask ] = useState({
      name: props.title,
      content: props.message,
      id: props.id
  })

  let ti
  return (
    <div className="StickyNote">
    <h1 id="NoteTitle">
        {newTask.name}
    </h1>
    <div className="TaskArea">
       <div className="ScrollArea">
            <p id="NoteContent">
                {newTask.content}
            </p>
       </div>
        <div className="ButtonPlace">
        <small className="CurrentDate">{newDate}</small>
            
            {/* <button id="icons2" onClick={() => {
              props.editNote( props.id )
              
            }}  
              className="fa fa-edit"></button> */}

              

            <Modal size='lg' isOpen={modal} >                                                 {/*toggle={()=> setmodal(!modal ) } Add this to make the modal background work*/}
              <ModalHeader toggle={() => setmodal(!modal)}>
                Edit task
              </ModalHeader>
              <ModalBody>
                <form className='newForm'>
                  <input
                  
                  placeholder='Enter the title...'
                  value= {newTask.name}
                  autoCapitalize='off'
                  autoComplete='off'
                  onChange={(e) => {
                    setnewTask({...newTask, name : e.target.value})
                      console.log(e.target.value)
                  }}

              />
              <textarea 
                  placeholder='Enter the message...'
                  value={newTask.content}
                  autoCapitalize='off'
                  autoComplete='off'
                  onChange={(e) => {
                    setnewTask({...newTask, content: e.target.value})
                      console.log(e.target.value)
                  }}
              />
               <button className='btn mt-3' style={{ backgroundColor: '#0b3629' , color: 'white'}} 
                onClick={(e)=> { 
                  
                  //alert( `${newTask.name} ${newTask.content}`) ;
                  e.preventDefault();
                  setmodal(false)
                  
                  //props.addTask( newTask )
                
                }}> Submit </button>
                </form>
              </ModalBody>
            </Modal>

            
              <button id="icons2" onClick={() => {
              setmodal(true)
            }}  
              className="fa fa-edit"></button>

            <button id="icons2" onClick={() => {
              props.deleteNote(newTask.id)
            }} className="fa fa-trash"></button>
        </div>
    </div>
</div>
  )
}

export default Dashboard