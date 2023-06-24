import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NotesList from '../../components/NotesList/NotesList';
import NewNotesForm from '../../components/NewNotesForm/NewNotesForm';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  function addNotes(note) {
    setNotes([...notes, note])
  }
  
  function noNotes() {
    if (notes === '')
    return 'No Notes Yet'
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />

            <NotesList />
            <NewNotesForm />

          </>
          :
          <AuthPage setUser={setUser} />
      }
 
    </main>
  );
}
