import Navbar from "../Components/Navbar";
import './LoginPage.css';
import picture from '../assets/hero image 2.png';
import { useNavigate } from "react-router-dom";
import { AuthoContext } from "../Components/AuthoContext";
import { useContext, useState } from "react";

const LoginPage = () => {
  const { setIsLogin } = useContext(AuthoContext);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate();


  async function loginCall() {
    if (email === " " || password === "") {
        setError("All Field Requierd !")
    } else {
        setError("")
        let res = await fetch("http://localhost:3000/user");
        let data = await res.json();
        let user = data.some((users) => users.email === email && users.password === password)
        if (user) {
            alert("login succesful")
            setIsLogin(true);
            navigate('/')
        } else {
            setError("invalid crediential !")
        }
    }
}
function signup(){
  navigate('/signup')
}
  return (
    <>
      <div className="loginPage">
        <h1>Login Page</h1>
        <div className="login-body">
          <Navbar hideLogin={true} center={true} />
        </div>
        <div className="frame">
          <div className="picture">
            <img src={picture} alt="hero" />
          </div>
          <div className="form">
            <div className="align">
            <div className="error">{error}</div>
              <h4>Login</h4>
              <label>Welcome back!!!</label>
              <label className='text'>Email</label>
              <input type="email" placeholder="abc@gmail.com" onChange={(ev)=>{setEmail(ev.target.value)}} />
              <label className='text'>Password</label>
              <input type="password" placeholder=".............." onChange={(ev)=>{setPassword(ev.target.value)}}  />
              <div className="login-btn">
                <button onClick={loginCall}>Login</button>
              </div>
              <p>Don't have an account yet? <button onClick={signup}> Sign up for free</button></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
