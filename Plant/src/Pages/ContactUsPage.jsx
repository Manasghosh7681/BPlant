
import './ContactUsPage.css'
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();
    function Home(){
        navigate('/')
    }
    return(
        <>
        
        <div className="contactus">
            <div className="name">
                <h2 onClick={Home}>B.Planet</h2>
            </div>
            <div className="contact">
                <h2>Contact Us</h2>
            </div>
            <div className="info">
                <div className="leftinfo">
                    <h2>Stay Updated</h2><br/>
                    Need to get in touch with us ?
                    <a href="https://www.facebook.com/Bplanetgermany">Facebook</a>
                    <a href="https://www.instagram.com/bplanet_official/://">Instagram</a><br />
                </div>
                <div className="rightinfo">
                    <div className="contactname">
                        <input type="text" placeholder='Enter your name'/>
                    </div>
                    <div className="gmail">
                        <input type="text" placeholder='Enter your gmail' />
                    </div>
                    <div className="feedback">
                        <textarea name="" placeholder='What can we help you with ?' id=""></textarea>
                    </div>
                    <div className="submit">
                        <button>Submit</button>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ContactUs;