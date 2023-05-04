import {useState} from 'react';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="App container justify-content-center my-5">
      <form onSubmit={UserForm.createUser} >
        <div className="bg-secondary d-flex align-items-center rounded">
          <label htmlFor="firstName" className='col-1 mx-2'>First Name</label>
          <input type="text" name="firstName" id="firstName" className='my-2 ms-1 form-control me-5' onChange={ (e) => setFirstName(e.target.value) }/>
        </div>
        <br />
        <div className="bg-secondary d-flex align-items-center rounded">
          <label htmlFor="lastName" className='col-1 mx-2'>Last Name</label>
          <input type="text" name="lastName" id="lastName" className='my-2 ms-1 form-control me-5' onChange={ (e) => setLastName(e.target.value)}/>
        </div>
        <br />
        <div className="bg-secondary d-flex align-items-center rounded">
          <label htmlFor="email" className='col-1 mx-2'>Email</label>
          <input type="text" name="email" id="email" className='my-2 ms-1 form-control me-5' onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <br />
        <div className="bg-secondary d-flex align-items-center rounded">
          <label htmlFor="password" className='col-1 mx-2'>Password</label>
          <input type="password" name="password" id="password" className='my-2 ms-1 form-control me-5' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <br />
        <div className="bg-secondary d-flex align-items-center rounded">
          <label htmlFor="confirmPassword" className='col-1 mx-2'>Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" className='my-2 ms-1 form-control me-5' onChange={ (e) => setConfirmPassword(e.target.value)}/>
        </div>
      </form>
      <h5 className="text-center my-3">Your Form Data</h5>
      <div className="d-flex justify-content-center">
        <div className="col-2 mx-2">
          <p>First Name</p>
          <p>Last Name</p>
          <p>Email</p>
          <p>Password</p>
          <p>Confirm Password</p>
        </div>
        <div className="col-5 text-start mx-2">
          <p>{firstName}</p>
          <p>{lastName} </p>
          <p>{email} </p>
          <p>{password} </p>
          <p>{confirmPassword} </p>
        </div>
      </div>
    </div>
  );
}
export default UserForm;
