import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    setUsername(prompt('please enter your name'));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  };

  return (
    <div className='App'>
      <h1>JESTEM MLODY G Z GDYNI</h1>
      <h2>Hello {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message, index) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
