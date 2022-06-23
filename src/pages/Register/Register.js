
import styles from './Register.module.css';
import {useState, useEffect} from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {

  const[displayName, setDisplayName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const[error, setError] = useState("");

  //renaming the errors that comes from useAuthentication to not mix with backend errors

  const {createUser, error : authError , loading} = useAuthentication();

  //Send Form
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError('');

    const user ={
      displayName,
      email,
      password
    };

    if(password !== confirmPassword){
      setError('Password needs to be equal!');
      return;
    }
    const res = await createUser (user);

    console.log(res);
  };
  //mapping if setError Changes

  useEffect(()=>{
    if (authError){
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register} >
        <h2>Register</h2>
        <p>Register and share your history!</p>
        <form id='form' onSubmit={handleSubmit}>
          <label>
            <span>Name:</span>
            <input type="text" 
            name="displayName" 
            required 
            placeholder='User name'
            value={displayName}
            onChange = {(e) => setDisplayName(e.target.value)}/>
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" 
            name="email" 
            required 
            placeholder='User email'
            value={email}
            onChange = {(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" 
            name="password" 
            required 
            placeholder='User password'
            value={password}
            onChange = {(event) => setPassword(event.target.value)}/>
          </label>
          <label>
            <span>Confirm Password:</span>
            <input type="password" 
            name="confirmpassword" 
            required 
            placeholder='User password'
            value={confirmPassword}
            onChange = {(e) => setConfirmPassword(e.target.value)}/>
          </label>
          
          {!loading && <button className='btn'>Sign in</button> }
          {loading && (<button className='btn' disabled>
            Loading...
          </button>) }
          {error && <p className='error'><strong>{error}</strong></p>}
        </form>
    </div>
  );
}

export default Register