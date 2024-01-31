import { 
  Spinner,
  Label,
  TextInput,
  Button,
  Alert
} from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.id]: e.target.value.trim()
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {username, email, password} = {...formData};
    if(!username || !email || !password || username === '' || email === '' || password === '') {
      return setErrorMessage('Fields Empty');
    } else {
      setErrorMessage('');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/signup", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if(data.success === false) {
        setErrorMessage(data.message)
      }
      if(res.ok) {
        navigate("/signin");
      }
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  return(
    <div className="mt-10 p-5">
      <div>
        <span className="text-4xl">
          My Blog
        </span>
      </div>
      <div className="mt-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Label 
            value="Your Username"
            className="text-xl"
          />
          <TextInput 
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
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
            placeholder="Password"
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
              ) : 'Sign Up'
            }
          </Button>
        </form>
        {
          errorMessage &&
          <Alert className="bg-red-400 text-black font-mono mt-5">
            { errorMessage }
          </Alert>
        }
      </div>
    </div>
  )
}

export default Signup;
