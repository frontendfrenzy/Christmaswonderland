import { CiCirclePlus } from "react-icons/ci";

const Home = () => {
 /*
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
  } */

  return (
    <div>
      {/**
       * <header className="mt-4">
      <div className="logo">
        <h1><b>Christmas Wonderland</b></h1>
      </div>
      <input type="checkbox" id="nav_check" hidden/>
      <nav>
        <div className="Logos">
          <h1><b>Christmas Wonderland</b></h1>
        </div>
        <ul>
          <li>Home</li>
          <li><Link to='/about'>About</Link></li>
          <div className="flex flex-col">
          <li className="flex flex-row cursor-pointer" onClick={toggleDropdown}>Collection <FaCaretDown className="ml-1 translate-y-1"/></li>
          {
            isOpen && (
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
       */}

<div className="Whole_Home_Cntent">
<div className="Homefantasy_Content ">
  <h1 className="text-5xl pb-5">Welcome to Christmas <br />Wonderland Celebrate the Joy of Christmas!</h1>
  <p className="text-gray-200">Make this Christmas magical with our exclusive festive dresses and charming toys! Find the perfect outfits to shine<br /> at celebrations and gifts that bring endless joy. Our unique designs, special holiday discounts, and fast delivery <br /> ensure a hassle-free festive shopping experience. Celebrate in style without breaking the bank. <br /> Shop now and fill your season with joy and cheer!</p>
</div>

<div className="Home_BtnProfile">
  <div className="flex flex-row">
    <img className="w-12 h-12 object-cover rounded-full" src="https://i.ibb.co/1bCMyjQ/Glow-up-en-1-mes.jpg" alt="Glow-up-en-1-mes" />
    <img className="w-12 h-12 object-cover rounded-full -translate-x-6" src="https://i.ibb.co/s2WBWCW/download.jpg" alt="download" />
    <img className="w-12 h-12 object-cover rounded-full -translate-x-12" src="https://i.ibb.co/YWHLrjP/download-1.jpg" alt="download-1" />
    <img className="w-12 h-12 object-cover rounded-full -translate-x-16" src="https://i.ibb.co/b1vDDNg/download-2.jpg" alt="download-2" />
    <img className="w-12 h-12 object-cover rounded-full -translate-x-20" src="https://i.ibb.co/6Nk7crx/Curly-Hair-Men-30-Best-Hairstyles-for-Guys-with-Curly-Long-Hair.jpg" alt="Curly-Hair-Men-30-Best-Hairstyles-for-Guys-with-Curly-Long-Hair" />
    <div className="translate-y-8">
    <CiCirclePlus className="-translate-x-24 text-white text-1xl cursor-pointer" />
    </div>
  </div>

  <div className="Explore_btn">
  <button className="border-2 border-red-600 bg-red-600 p-3 text-1xl rounded-lg shadow-2xl mr-12">Explore More</button>
  </div>
</div>
</div>
</div>
  )
}

export default Home