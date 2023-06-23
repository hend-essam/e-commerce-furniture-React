import './login.css';
import { useState } from 'react';

function Login(){

  const [slide , setslide] = useState("sign-in");
  const change = (slide) => {
    setslide(slide)
  }

  return (
    <div className="login">
      <div className='login-part-one'>
        <div>
          <div className='border-1'></div>
          <div className='border-2'></div>
        </div>
        <h1>Make your house comfortable</h1>
      </div>
      <div className={`login-part-two ${slide === "cancel" ? "sign-in" : slide}`}>
        <div className={`${slide === "sign-in" 
            || slide === "forget-pass" 
            || slide === "cancel"
            ? "sign-in-slide" : "sign-up-slide"}`}>
          <input type="radio" name='form' id='sign-up' defaultChecked={true}/>
          <input type="radio" name='form' id='sign-in'/>
          <label htmlFor="sign-up" onClick={() => {change("sign-in")}}
          >Sign in</label>
          <label htmlFor="sign-in" onClick={() => {change("sign-up")}}
          >Sign up</label>
          <div className='background'></div>
        </div>
        <div className='container'>
          <form className={`${slide === "sign-up" ? "sign-in-form" : ""}`}>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <span
            onClick={() => {change("forget-pass")}}
            >forget password?</span>
            <input type="submit" value="Submit"/>
          </form>
          <form className={`${slide === "sign-up" ? "sign-up-form" : ""}`}>
            <div>
              <input type="text" placeholder='First Name'/>
              <input type="text" placeholder='Last Name'/>
            </div>
            <div>
              <input type="number" placeholder='Phone Number'/>
              <input type="email" placeholder='Email'/>
            </div>
            <div>
              <input type="password" placeholder='Password'/>
              <input type="password" placeholder='Confirm Password'/>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <form className={`forget-pass-form ${slide === "forget-pass" ? "up" : "down"}`}>
          <div className='forget-pass-container'>
          <h4>Reset your password</h4>
          <p>We will send you an email to reset your password.</p>
          <input type="email" placeholder='Email'/>
          <input type="submit" value="Submit"/>
          <span className='cancel'
          onClick={() => {change("cancel")}}
          >Cancel</span>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login;