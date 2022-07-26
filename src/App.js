import React from 'react';
import { useState, useEffect } from 'react'
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore"
import Post from './components/Post/Post';
import Header from './components/Header/Header';
import ImageUpload from './components/ImageUpload/ImageUpload';
import Box from '@mui/material/Box';
import { Button, Input } from '@mui/material';
import Modal from '@mui/material/Modal';
import './App.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  // const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle)


  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);


  // useEffect Runs a piece of code basedon s specific condition

  useEffect(() => {
    //unsubscribe perform cleanup action before triggering useEffect
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in...
        console.log(authUser);
        setUser(authUser);
      } else {
        // user logged out...
        setUser(null);
      }
    })
    return () => {
      unsubscribe();
    }
  }, [user, username]);

  useEffect(() => {
    onSnapshot(collection(db, "Post"), (snapshot) => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  const handleClose = () => { setOpen(false) };

  const signUp = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) => alert(error.message));
  }

  // auth.createUserWithEmailAndPassword(email, password)
  //   .then()
  //   .catch((error) => alert(error.message));


  const signIn = (event) => { 
    event.preventDefault(); 
    signInWithEmailAndPassword(auth, email, password)
    .catch((error) => alert(error.message)); 

    setOpen(false);
  }

  return (
    <div className="App">

      {/* IG POST $ IMAGE IN FIREBASE
      caption 
      file picker
      post button */}
      {user.displayName ? (
      <ImageUpload username={user.displayName}/>
      ) : (
        <h3>Sorry You Need To LogIn To Upload</h3>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className='app_signup'>

            <center>
              <img className='App_headerImage'
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                alt=""
              />
            </center>

            <Input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}>
            </Input>

            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}>
            </Input>

            <Input
              placeholder="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}>
            </Input>
            <Button onClick={signUp}> Sign Up</Button>
          </form>
        </Box>



      </Modal>


      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)} 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className='app_signin'>

            <center>
              <img className='App_headerImage'
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                alt=""
              />
            </center>

            {/* <Input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}>
            </Input> */}

            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}>
            </Input>

            <Input
              placeholder="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}>
            </Input>
            <Button onClick={signIn}> Sign In</Button>
          </form>
        </Box>



      </Modal>

      <Header />

      {user ? ( //if user exist
      <Button onClick={() => auth.signOut()}>Log Out</Button> //authsignout()
      ): (
        <div className="app_logincontainer">
      <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      </div>
      )}


      {
        posts.map((post, index) => (
          <Post key={index} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
