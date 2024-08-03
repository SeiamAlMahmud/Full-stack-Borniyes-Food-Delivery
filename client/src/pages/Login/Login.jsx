import './login.css'
import React, { useEffect, useState } from 'react'
import img1 from '../../assets/pngegg.png'
import { Helmet } from 'react-helmet';
import SocialBox from '../../components/SocialBox/SocialBox';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
// console.log(location)
  const [Lemail, setLemail] = useState("");
  const [Lpassword, setLpassWord] = useState("");

console.log(location.state)
  return (
    <>
      <Helmet>
        <title>Authentication</title>
        <meta name="description" content="Sign In or Sign up " />
      </Helmet>
    
      {
        !userActive ? (
          <div className='auth'>
            <div className={`container ${!isActive ? 'active' : ''}`}>

              {/*  ############## Sign In Section #####################  */}

              <div className="user signin-box">
                <div className="overlay">
                  <h1>New Here?</h1>
                  <img src={img1} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non repellat unde!</p>
                  <button className='signup btn' onClick={() => setIsActive(!isActive)} >Sign Up</button>
                </div>
                <div className="form-box">
                  <div className="form">
                    <h2>Sign In</h2>
                    <SocialBox />
                    <input type="email" placeholder='email' onBlur={(e) => setLemail(e.target.value)} required />
                    <input type="Password" placeholder='Password' min={6} max={20} onBlur={(e) => setLpassWord(e.target.value)} required />
                    <button >Sign In</button>
                    <p className='footer-text'>Dont't have an account?
                      <span onClick={() => setIsActive(!isActive)}> Sign up</span>
                    </p>
                  </div>
                </div>
              </div>

              {/*  ############## Sign Up Section #####################  */}

              <div className="user signup-box">
                <div className="form-box">
                  <div className="form" >
                    <h2>Sign up</h2>
                    <SocialBox />
                    <input type="text" placeholder='Name' onBlur={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder='email' onBlur={(e) => setEmail(e.target.value)} required />
                    <input type="Password" placeholder='Password' min={6} max={20} onBlur={(e) => setPassWord(e.target.value)} required />
                    <button >Submit</button>
                    <p className='footer-text'>Already have an account?
                      <span onClick={() => setIsActive(!isActive)}> Sign In</span>
                    </p>
                  </div>
                </div>
                <div className="overlay">
                  <h1>one of us?</h1>
                  <img src={img1} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non repellat unde!</p>
                  <button className='signin btn' onClick={() => setIsActive(!isActive)} >Sign In</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className='footText'>user Log In successfully</p>
            <button >sign out</button>
          </>
        )
      }
    </>
  )
}

export default Login