// src/components/NoteForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const NoteForm = ({ handleSubmit, buttonText }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {buttonText}
      </Button>
    </Form>
  );
};

export default NoteForm;
