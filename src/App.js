import React from 'react';
import  {useState, useEffect } from 'react'
import './App.css';
import {db} from './firebase';
import Post from './components/Post/Post';
import Header from './components/Header/Header';

function App() {
  
  // const [Posts, setPosts] = useState([
    //  {
    //   username: "Salman_alvi",
    //   caption: "☮", 
    //   imageUrl: "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLGxhbmRzY2FwZXx8fHx8fDE2NTY4NTAwNzg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
    //  },
    //  {
    //   username: "Billllllly",
    //   caption: "Oi!",
    //   imageUrl: "./images/billy.jpg" 
    //  }
  // ]);

  // useEffect Runs a piece of code basedon s specific condition

  useEffect(()=>{
    db.collection('Post').onSnapshot(snapshot =>{;
    //snapshot everytime a new post is added, this code
    setPosts(snapshot.docs.map(doc => doc.data()));
  })
  },[])


  return (
    <div className="App">
      <Header />

      Posts.map{ post => (
        <Post username={post.username} caption ={post.caption} imageUrl = {post.imageUrl}/>
      )}

      <Post username ="Salman_alvi"  
      caption = "☮" 
      imageUrl = "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLGxhbmRzY2FwZXx8fHx8fDE2NTY4NTAwNzg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
      />
      <Post username ="Billllllly" 
      caption = "Oi!" 
      imageUrl = "./images/billy.jpg"
      />
      <Post username ="_._ssss_._" 
      caption = "😂😂😂😂" 
      imageUrl = "./images/funny.jpg"
      />
    </div>
  );
}

export default App;
