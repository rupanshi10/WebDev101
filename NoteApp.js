import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import './style.css';
import DarkModeToggle from './DarkModeToggle';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    const newNote = { ...note, id: Date.now() };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id) => {
    // Implement edit functionality as needed
    console.log('Edit note with id:', id);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`} class="pp">
      <Container className="py-4">
        <Row>
          <Col>
          <div class='u'>
            <h1>Notes App</h1>
            </div>
          </Col>
          <br></br><br></br><br></br>
          <Col className="container-fluid">
            <Button variant="secondary" onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={20}>
          <div class='g'>
            <NoteForm handleSubmit={addNote} buttonText="Add Note" />
          </div>
          </Col>
          <Col md={6}>
            <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
