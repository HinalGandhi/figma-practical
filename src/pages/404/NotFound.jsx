import { LoginBase } from '../Login/Login.styles';

import loginBg from '../../assets/images/NotFoundbg.png';
import loginImg from '../../assets/images/notfoundboy.png';
import tree from '../../assets/images/registertree.png';
import { Button } from 'antd';


const NotFound = () => {
  return (
    <LoginBase>
      <div className='login-grid notfound-page'>
        <div>
          <div className='notfound-content'>
            <div className='notfound-text'>
            <p className="text-not-found">401</p>
            <p className="auth">You are not authorized! 🔐</p>
            <p className="permission">You don’t have permission to access this page. Go Home!</p>
            </div>
            <img src={loginImg} alt="Login" className='notfoundBoy' />
            <Button type="primary" size="large">
              Back To Home
            </Button>
          </div>
          <img src={loginBg} alt="Login" className='notfoundBg' />
          <img src={tree} alt="tree" className='notfoundtree' />
        </div>
        <div>
        </div>
      </div>
    </LoginBase>
  );
};

export { NotFound };