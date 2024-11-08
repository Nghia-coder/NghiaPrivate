import{FcGoogle} from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../utils/utils';
import { Form } from "antd";
import './LoginPage.css';
export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  return <div className='window d-flex align-items-center justify-center'>
    <div className='login-body d-flex'>
      <div className='form-login-container w-50'>
        <div style={{ fontSize: 28, fontWeight: 600 }}>Login</div>
        <div style={{ color: '#ACACAC' }}>Doesn't have an account ? <a style={{ color: '#AA8DB3', fontWeight: 500, textDecoration: 'underline', cursor: 'pointer' }}>Sign Up!</a></div>
        <div className='mt-5'>
          <label for="input-user" class="form-label">User name or Email</label>
          <input type="text" id="input-user" class="form-control" />
          <label for="input-password" class="form-label">Password</label>
          <input type="password" id="input-password" class="form-control" />
          <div className='mt-2'>
            <input type="checkbox" />
            <span className='ms-2'>Remember Me!</span>
          </div>
          <div className='d-flex justify-content-conter'>
            <button class='btn mt-3' style={{ background: '#DCC6F9', width: '100%', fontSize: 16, fontWeight: 600 }}>Login</button>
          </div>
          <div className='d-flex'>
            <hr className='w-100' /><div style={{ whiteSpace: 'nowrap' }} className='mx-1'>Or Login With</div><hr className='w-100' />
          </div>
          <div className="d-flex">
            <div className="w-50 me-1">
              <button className='btn w-100 social-btn'><FcGoogle />Google</button>
            </div>
            <div className="w-50 ms-1">
            <button className='btn w-100 social-btn'><FaFacebookF/>Facebook</button>
            </div>
          </div>
        </div>
      </div>
      <div className='login-background w-50'>
      <img src="" alt="" />
      </div>
    </div>
  </div>
}