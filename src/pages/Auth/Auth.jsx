import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo}/>
            <div className="Webname">
                <h1>Hery Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>
        <LogIn/>
    </div>
  )
}

function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }

function SignUp(){
    return(
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>Sign up</h3>
                <div>
                    <input type='text' placeholder='FirstName' name="firstname" className='infoInput'/>
                    <input type='text' placeholder='LastName' name="lastname" className='infoInput'/>
                </div>
                <div>
                    <input type='text' placeholder='UserName' name="username" className='infoInput'/>
                </div>
                <div>
                    <input type="password" name="password" placeholder='password' className="infoInput" />
                    <input type="password" name="confirmpassword" placeholder='confirm password' className="infoInput" />
                </div>
                <div>
                    <span style={{fontSize: "12px"}}>Already have an account. Login!</span>
                </div>
                <button className="button infoButton" type='submit'>
                    Signup
                </button>
            </form>
        </div>
    )
}

export default Auth