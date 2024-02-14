import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import app from "../firebase.js";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { TextInput, Button } from "flowbite-react";

function DashboardProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const filePickerRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if(imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          'Could not upload image (File must be less than 2MB)'
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
        });
      }
    );
  };

  return(
    <div className="flex flex-col gap-4 mx-auto w-1/2 my-10 font-mono text-2xl">
      <input 
        type="file"
        accept="image/*"
        ref={filePickerRef}
        onChange={handleImageChange}
        hidden
      />
      <img
        src={ imageUrl || currentUser.profilePicture } 
        onClick={ () => filePickerRef.current.click() }
        className="rounded-full w-20 self-center cursor-pointer"
      />
      {imageFileUploadError && (
        <Alert color='failure'>{imageFileUploadError}</Alert>
      )}
      <form className="flex flex-col gap-4 w-full">
        <TextInput 
          id="username"
          placeholder="username" 
          defaultValue={currentUser.username}
        />
        <TextInput 
          id="email"
          placeholder="email" 
          defaultValue={currentUser.email}
        />
        <TextInput 
          id="password"
          placeholder="password"/>
        <Button> Save </Button>
      </form>
      <div className="flex flex-row justify-between">
        <span className="text-sm cursor-pointer text-red-600"> Delete </span>
        <span className="text-sm cursor-pointer"> SignOut </span>
      </div>
    </div>
  )
}

export default DashboardProfile
