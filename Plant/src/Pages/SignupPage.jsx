import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Signup() {
    const navigate = useNavigate();
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, SetError] = useState("")
    function submit() {
        if (fname == '' || lname == ' ' || email == '' || password == '') {
            SetError("All fields are Required !")
        }
        else {
            SetError('')

            checkEmailExist();
        }

    }
    async function checkEmailExist() {
        let res = await fetch("http://localhost:3000/user")
        let data = await res.json();
        const exist = data.some((user) => user.email === email)
        if (exist) {
            alert("User already exists");
            navigate('/login')
        } else {
            pushData();
        }
    }
    async function pushData() {
        const user = {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
        }
        let res = await fetch("http://localhost:3000/user", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        let data = await res.json();
        console.log(data);
        alert("Signup Successful")
        navigate('/login')
    }
    return (
        <>
            <div className="loginform">
                <h1>Signup Page</h1>

               
                <div className="Account">Let's create Account</div>
                <div className="sign-form">
                    <input type="text" placeholder='First Name' required onChange={(ev) => setFname(ev.target.value)} />
                    <input type="text" placeholder='Last Name' required onChange={(ev) => setLname(ev.target.value)} />
                    <input type="email" placeholder='Email Id' required onChange={(ev) => setEmail(ev.target.value)} />
                    <input type="password" placeholder='password' required onChange={(ev) => setPassword(ev.target.value)} />

                <div className="signbtn">
                    <div className="error">{error}</div>
                    <button onClick={submit}>Submit</button>
                </div>
                </div>
            </div>
        </>
    )
}
export default Signup;