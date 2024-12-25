import './App.css';
import Home from './Home';
import Blog from './Blog';
import Collection from './Collection';
import Credit from './Credit';
import Footer from './Footer';
import Service from './Service';
import Subscription from './Subscription';
import About from './About';
import Productimg from './Productimg';
import Messsing from './Messsing';
import { Route, Routes } from 'react-router-dom';
import { useRef, useState } from "react"
import { CgMenuRight } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function App() {
  const [Signvisible,setSignvisible] = useState(false);
  const [userName,setuserName] = useState("");
  const [emailName,setemailName] = useState("");
  const [loginVisible,setloginVisible] = useState(false);
  const [passwordId,setpasswordId] = useState("");
  const [isOpen,setisOpen] = useState(false);
  const inputRef = useRef()
  const [phoneNumber,setphoneNumber] = useState("");
  const [userPassword,setuserPassword] = useState("");

  const toggleDropdown = () => {
    setisOpen(!isOpen);
  }
  const toggleSignvisible = () => {
    setSignvisible(!Signvisible);
  }
  const handleSignupSubmit = (event) => {
    if(event){
      alert('SIGN-IN was Succesfully Submit');
    }
  }
  const handleLoginSubmit = (event) => {
    if(event){
      alert('LOG-IN was succesfully submitted');
    }
  }
  const hanndleLoginButton = () => {
    setloginVisible(!loginVisible);
  }

  return (
    <div>
      <header className="mt-4">
      <div className="logo">
        <h1 id='christmaswonder'><b>Christmas Wonderland</b></h1>
      </div>
      <input type="checkbox" id="nav_check" hidden/>
      <nav>
        <div className="Logos">
          <h1><b>Christmas Wonderland</b></h1>
        </div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <div className="flex flex-col">
          <li className="flex flex-row cursor-pointer" onClick={toggleDropdown}>Collection <FaCaretDown className="ml-1 translate-y-1"/></li>
          {
            isOpen && (
              <div className='Drop-dwon-contet'>
                <div className="dropdown">
                  <ul className="flex flex-col -translate-x-3 fixed">
                    <li><Link to='/collection'>Products</Link></li>
                    <li>Third-Party Sell</li>
                    <li>T-shirt Design</li>
                    <li onClick={hanndleLoginButton}>Log-in</li>
                    {
                      loginVisible && (
                        <div className="login-content-blah">
                          <form onSubmit={handleLoginSubmit}>
                            <h2 className="-translate-y-10 text-white text-4xl">Log-in</h2>
                            <label className="-translate-x-10 text-2xl text-white phonenumber" htmlFor="PhoneNumber">PhoneNumber:</label>
                            <input className="mb-4" ref={inputRef} type="number" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} placeholder="Enter a Phone number" required/>
                            <label className="-translate-x-14 text-white text-2xl userpassword" htmlFor="Password">Password:</label>
                            <input ref={inputRef} type="password" value={userPassword} onChange={(e) => setuserPassword(e.target.value)} placeholder="Enter a Password" required/>
                            <button className="Sifgn_upbtn" type="Submit">Sign-in</button>
                          </form>
                        </div>
                      )
                    }
                    <li><Link to='/service'>Ordering Service</Link></li>
                  </ul>
                </div>
              </div>
            )
          }
          </div>
          <li><Link to='/premium'>Premium</Link></li>
          <div className="Sign_up">
            <p onClick={toggleSignvisible} className="cursor-pointer">Sign-Up</p>
            {
              Signvisible && (
                <div className="Signup_content">
                  <form onSubmit={handleSignupSubmit}>
                    <h2>Create New Account!</h2>
                    <label className="-translate-x-16 mb-3 font-light user_name" htmlFor="Username">Username:</label>
                    <input ref={inputRef} type="text" value={userName} onChange={(e) => setuserName(e.target.value)} placeholder="Username..." required/>
                    <label className="-translate-x-20 mb-3 font-light email_input" htmlFor="Email">Email:</label>
                    <input ref={inputRef} type="email" value={emailName} onChange={(e) => setemailName(e.target.value)} placeholder="Enter a email address" required/>
                    <label className="-translate-x-16 mb-3 font-light password_hub" htmlFor="Password">Password:</label>
                    <input ref={inputRef} type="password" value={passwordId} onChange={(e) => setpasswordId(e.target.value)} placeholder="password..." required/>
                    <button className="Login_btn" type="Submit">Log-in</button>
                  </form>
                </div>
              )
            }
          </div>
        </ul>
      </nav>
      <label htmlFor="nav_check">
      <CgMenuRight className="hambarger cursor-pointer text-3xl" />
      </label>
    </header>



      <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/premium' element={<Credit/>}/>
       <Route path='/collection' element={<Collection/>}/>
       <Route path='/service' element={<Service/>}/>
       <Route path='*' element={<Messsing/>}/>
      </Routes>     
     <Productimg/>
      <Subscription/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
