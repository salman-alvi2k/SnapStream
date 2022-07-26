import React, { useState } from 'react'
import { Button, Input } from '@mui/material';
import { storage, db } from './firebase';
// import { collection, onSnapshot } from "firebase/firestore"
// import app from 'firebase';

function ImageUpload(username) {
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changes",
            (snapshot) => {
                 progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
            console.log(error);
            alert(error.message);
        },
        () => {
             storage
             .ref("image")
             .child(image.name)
             .getDownloadURL() 
             .then(url =>{
                db.collection("posts").add({
                    // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: caption,
                    imageUrl: url,
                    username: username
                });
                setProgress(0);
             })
        }
        )
    }

    return (
        <div>
            <Input
                type="text"
                placeholder="Enter a caption..."
                onChange={event => setCaption(event.target.value)}
                value={caption}>

            </Input>

            <Input
                type="file"
                onChange={handleChange}>
            </Input>

            <Button onClick={handleUpload}>
                Upload
            </Button>

        </div>
    )
}

export default ImageUpload