import React, { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Login.css'
import { FaEye, FaUser  } from "react-icons/fa";
import { IoIosMail } from 'react-icons/io';
import { GoEyeClosed } from "react-icons/go";


  
export const Login = () => {

    let [eye, setEye]=useState("");
    let [visible, setVisible]=useState(false);
    let [loginSignup, setLoginSignup]=useState("Log in");
    let [inpName,setInpName]=useState("")   //use to empty input field after data send
    let [inpemail,setInpemail]=useState("")


function handle(e){
    setEye(e.target.value)
    
}
function handleVisible(){
    setVisible(!visible)
}

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_59t0ja2', 'template_m80bken', form.current, {
          publicKey: 'ew3WfSbRUPKAGLGwr',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
    return (
        <div>
            <div className="container">
                <form className='login-form' ref={form} onSubmit={sendEmail}>
                    <h1 className={loginSignup} >{loginSignup}</h1>
                   {
                    loginSignup==="Log in"?<div></div>:
                <div className="login">
                    <label htmlFor='naam'>Name</label>
                    <div className='inp-icon'>
                    <input type="text" id='naam' onChange={(e)=>{setInpName(e.target.value)}} value={inpName}    name='from_name' placeholder='Enter Name' required autoComplete='off'/>
                    <FaUser />
                    </div>
                </div>
                   }
               
                <div className="login">
                    <label htmlFor='mail'>Email</label>
                    <div className='inp-icon'>
                    <input type="email" id='mail' name='from_email' onChange={(e)=>{setInpemail(e.target.value)}} value={inpemail} placeholder='Enter Email' required />
                    <IoIosMail />
                    </div>
                </div>
                <div className="login">
                    <label htmlFor='pass'>Password</label>
                    <div className='inp-icon'>
                    <input type={visible ? 'text' : "password"} onChange={handle} value={eye} id='pass' placeholder='Enter Name' required />
                    <div>
                        {
                            visible ? <FaEye onClick={handleVisible}/> : <GoEyeClosed onClick={handleVisible}/> 
                        }
                    </div>
                    </div>
                </div>
                {/* <div className="login">
                    <textarea placeholder='Message' rows={10} cols={40}></textarea>
                </div> */}
                {
                    loginSignup!=="Log in"?<div></div>:
                    <p className='para'>Don't have an account? <a href="#" onClick={()=>setLoginSignup("Sign up")}>Click here</a></p>
                }
    
                    <div className="submit-btn">
                    <button  className={loginSignup==="Sign up"?"gray-color":"submit"} onClick={()=>{setLoginSignup("Log in"), setInpemail(""),setEye("")}}>Log in</button>
                    <button className={loginSignup==="Log in"?"gray-color":"submit"} onClick={()=>{setLoginSignup("Sign up"), setInpName(""),setInpemail(""),setEye("")}}>Sign up</button>
                    </div>
    
                </form>
    
            </div>
            
            
        </div>
      )
    }

export default Login;