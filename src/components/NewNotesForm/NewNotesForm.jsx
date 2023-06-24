import { useState } from 'react';
import * as notesAPI from '../../utilities/notes-api'


export default function NewNotesForm() {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([])
    
    async function handleSubmit(evt) {
        evt.preventDefault()
        const newNote = await notesAPI.create(note)
        setNotes([...notes, newNote])
    }
    
    function handleChange(evt) {
        setNote(evt.target.value)
    }

    return (
        <div  className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>Notes</label>
                <input type="text"  name="text" value={note} 
                onChange={handleChange} required/>
                <button type="submit">Add Note</button>
            </form>
        </div>
    )
}