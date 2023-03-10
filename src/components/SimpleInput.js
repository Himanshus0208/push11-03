import { useState } from "react";


const SimpleInput = (props) => {

  const[user, setUser] = useState('');
  const onChangeHandler =(event)=>{
    setUser(event.target.value);
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault();

    console.log(user);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control invalid'>
        <label htmlFor='name'>Your Name</label>
        <input className ='invalid' type='text' id='name' onChange={onChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {<p>input is invalid</p>}
    </form>
  );
};

export default SimpleInput;
