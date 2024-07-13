import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NoteList = ({ notes, deleteNote, editNote }) => {
  return (
    <div>
      {notes.map((note) => (
        <Card key={note.id} className="mb-3">
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.content}</Card.Text>
            <Button variant="danger" onClick={() => deleteNote(note.id)}>
              Delete
            </Button>
            <Button variant="primary" onClick={() => editNote(note.id)}>
              Edit
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default NoteList;
