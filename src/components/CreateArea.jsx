import React, {useState}from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, createNote] = useState({
        title: '',
        content: ''
    });

    function newNote(event){
        const {value, name} = event.target;
        createNote(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        });
    }

    const [expand, setExpand] = useState(false);

    function updateExpand(){
      setExpand(true);
    }

    return (
    <div>
      <form className="create-note">
        <input 
        type={!expand ? 'hidden': 'none'}
        onChange={newNote} 
        name="title" 
        placeholder="Title" 
        value={note.title}
        autoComplete='off' />

        <textarea 
        onChange={newNote} 
        name="content" 
        placeholder="Take a note..." 
        rows={!expand ? "1": '3'} 
        value={note.content}
        onClick={updateExpand}
         />
        <Zoom in={!expand? false: true}><Fab onClick={(event)=> {props.addNewNote(note,event); createNote({title:'', content:''})}} ><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
