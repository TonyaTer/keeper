import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';

function App(){
    
    const [notes, setNotes] = useState([]);

    function addNote(note, event){ 
        setNotes(prevNotes =>{
            return [...prevNotes, note]
        });
       event.preventDefault();
    }

    function deleteNote(noteId){
        setNotes(prevNotes =>{
            return prevNotes.filter((item, index)=>{
                return index !== noteId;
            });
        })
    }


    return <div>
    <Header />
    <CreateArea
    addNewNote={addNote} />
    {notes.map((note, index)=>(
        <Note 
        key={index} 
        id={index} 
        title={note.title}
        content={note.content}
        onDelete={deleteNote} />
        ))}

    <Footer />
  </div>
}

export default App;