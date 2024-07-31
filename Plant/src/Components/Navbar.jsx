import './Navbar.css';
import { useNavigate } from "react-router-dom";
import profile from '../assets/Manas.jpg';
import { useContext } from 'react';
import { AuthoContext } from './AuthoContext';

const Navbar = ({ hideLogin, center }) => {
  const { isLogin, setIsLogin } = useContext(AuthoContext);
  const navigate = useNavigate();

  function loginCall() {
    if (isLogin) {
      navigate('/about')
    } else {
      navigate('/login');
    }
  }
  function navigation()
  {
    navigate('/')

  }
  function contact(){
    navigate('/contact')
  }

  return (
    <div className="nav">
      <div onClick={navigation} className={`name ${center ? 'center' : ''}`}>B.planet</div>
      <div className="btn">
        <div className="contact">
          <button onClick={contact}>Contact Us</button>
        </div>
        {!hideLogin && (
          <div className="login">
            <button onClick={loginCall}>
              {isLogin ? (
                <div className='Profile'>
                  <img src={profile} alt="Profile" />
                </div>
              ) : (
                'Login'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
