
import React,{useState} from 'react'
import './SignUp.css';
// css need to understand
// registration form validation steps 
// Step 1 – Create React App
// Step 2 – Install validator and Bootstrap
// Step 3 – Create Form Validation Class
// Step 4 – Create Registration Form in App.js ,https://www.dotnetcurry.com/reactjs/forms-using-react-functional-components-hooks

const SignUp = () => {
  // state for registration
    const [name, setName] = useState('');
    const[email,setEmail]=useState('');
    const [address,setAddress] =useState('');
    const [phone,setPhone] =useState('');
    const[password,setPassword] = useState('');
    const[confirmpassword,setConfirmPassword] = useState('');
    // state for checking the errors.
    const[submitted,setSubmitted] =useState(false);
    const[error,setError]  = useState(false);
    // handling the name change
    const handleName =(e)=>{
      setName(e.target.value);
      setSubmitted(false);
    };
    // handling the email
    const handleEmail =(e) =>{
      setEmail(e.target.value);
      setSubmitted(false);
    };
    // address
    const handleAddress =(e) =>{
      setAddress(e.target.value);
      setSubmitted(false);
    }
    // handling phone number
    const handlePhone= (e)=>{
      setPhone(e.target.value);
      setSubmitted(false);
    }
    // handling the password 
    const handlePassword =(e)=>{
      setPassword(e.target.value);
      setSubmitted(false);

    }
    // confirm handle password
    const handleConfirmPassword =(e)=>{
      setConfirmPassword(e.target.value);
      setSubmitted(false);

    }
    // handling the form submission
    const  handleSubmit =(e)=>{
      e.preventDefault();
      if(name === '' || email === '' ||password === ''){
        setError(true);
      }else{
        setSubmitted(true);
        setError(false);
      }
    }
    // showing success message
    const successMessage =()=>{
      return(
        <div className='success'
        style ={{ display:submitted ?'':'none', }}>
          <h1> User {name} Successfully Registered!!</h1>
        </div>
      )
    }
    // showing error message if error is true
    const errorMessage =()=>{
      return(
        <div className='error' style={{ display:error?'':'none', }}>
          <h1> Please enter all the fields</h1>
        </div>
      )
    }
  return (
 <div className ="App">
    <div className='form'>

  <div>
    <h1>User Registration</h1>
  </div>
  {/* calling the method */}
  <div className='messages'>
    {errorMessage()}
    {successMessage()}
  </div>
  <form>
    {/* taking data input from browser */}
      <label className='label'>First Name</label>
        <input id ="first-name" className ="input" type ="text" placeholder='First Name' name ="firstName"
         
        value ={name} onChange={handleName}
        />
        {/* <label>Last Name</label>
        <input id ="last-name" className="input" type ="text" placeholder='last Name' name ="lastName" 
        value ={values.lastName}
        /> */}
        <label  className='label'>Email</label>
        <input id ="email" className='input' type="text" placeholder='email' name="email"
         value ={email} onChange={handleEmail}
         />
         <label className='label'>Address</label>
         <input type ="text" className='input' placeholder='enter the address' name ="address" value ={address} onChange={handleAddress}/>
         <label className='label'>Phone</label>
         <input type ="text" className='input' placeholder='enter the phone number' name ="phone" value ={phone} onChange={handlePhone}/>
        <label  className='label'>Password</label>
        <input id ="password" className='input' type ="password" placeholder='password' name ="passWord" 
        value ={password} onChange={handlePassword}
        />
        <label className='label'>Confirm Password</label>
        <input  className='input' type ="password" placeholder='confirm password' value ={confirmpassword} onChange={handleConfirmPassword} ></input>
        <button type="submit" className='btn btn-secondary' onClick={handleSubmit}>SignUp</button>
        <button type="submit" className='btn btn-secondary' onClick={handleSubmit}>Login</button>
</form>
    </div>
</div>
  
  )
}

export default SignUp