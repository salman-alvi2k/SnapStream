import React from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <div className="App-container">
         <img className='App_headerImage'
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt=""
          />
      </div>

      <h1>Hello! WORLD!!!!!!!!!!!</h1>
      <Post />
    </div>
  );
}

export default App;
