import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import app from "../firebase.js";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextInput, Button } from "flowbite-react";
import {
  updateStart,
  updateSuccess,
  updateFailure,
} from '../redux/user/userSlice.js';

function DashboardProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(null);
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


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateUserError(null);
    setUpdateUserSuccess(null);
    if (Object.keys(formData).length === 0) {
      setUpdateUserError('No changes made');
      return;
    }
    if (imageFileUploading) {
      setUpdateUserError('Please wait for image to upload');
      return;
    }
    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        setUpdateUserError(data.message);
      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("User's profile updated successfully");
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateUserError(error.message);
    }
  }

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
      <form 
        className="flex flex-col gap-4 w-full" 
        onSubmit={handleSubmit}
      >
        <TextInput 
          id="username"
          placeholder="username" 
          defaultValue={currentUser.username}
          onChange={handleChange}
        />
        <TextInput 
          id="email"
          placeholder="email" 
          defaultValue={currentUser.email}
          onChange={handleChange}
        />
        <TextInput 
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <Button type="submit"> Save </Button>
      </form>
      <div className="flex flex-row justify-between">
        <span className="text-sm cursor-pointer text-red-600"> Delete </span>
        <span className="text-sm cursor-pointer"> SignOut </span>
      </div>
    </div>
  )
}

export default DashboardProfile
