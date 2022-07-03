import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
