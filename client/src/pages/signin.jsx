import { 
  Spinner,
  Label,
  TextInput,
  Button,
  Alert
} from 'flowbite-react';
import OAuth from './OAuth.jsx';
import { useState } from 'react';
import Header from "../pages/header.jsx";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js';

function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.id]: e.target.value.trim()
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = {...formData};
    if(!email || !password || email === '' || password === '') {
      return dispatch(signInFailure("Fields Empty"));
    }
    try {
      dispatch(signInStart);
      const res = await fetch("/api/signin", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if(data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }

  return(
    <div>
      <Header />
      <div className="mt-10 p-5">
        <div>
          <span className="text-4xl">
            My Blog
          </span>
        </div>
        <div className="mt-6">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Label 
              value="Email"
              className="text-xl"
            />
            <TextInput 
              type="text"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
            <Label 
              value="Password"
              className="text-xl"
            />
            <TextInput 
              type="text"
              placeholder="**************"
              id="password"
              onChange={handleChange}
            />
            <Button 
              type="submit"
              disabled={loading}
            >
              {
                loading ? (
                  <>
                    <Spinner size="20" />
                    <span> Loading... </span>
                  </>
                ) : 'Sign In'
              }
            </Button>
            <OAuth />
          </form>
          {
            errorMessage &&
            <Alert className="bg-red-400 text-black font-mono mt-5 text">
              { errorMessage }
            </Alert>
          }
        </div>
      </div>
    </div>
  )
}

export default Signin;
