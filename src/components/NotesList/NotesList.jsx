import { useState } from 'react';
import NotesListItem from '../../components/NotesListItem/NotesListItem'


export default function NotesList() {
    const [notes, setNotes] = useState([]);

    return (
        <div>
            <div  className='form-container'>
                <label>Previous Notes</label>
                <NotesListItem />
             </div>
        </div>
    )
}