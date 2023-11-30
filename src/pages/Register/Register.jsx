import { Button, Checkbox, Divider, Input } from 'antd';
import { LoginBase, LoginPage } from '../Login/Login.styles';

import logo from '../../assets/images/Logo.png';
import loginBg from '../../assets/images/Mask.png';
import loginImg from '../../assets/images/registergroup.png';
import tree from '../../assets/images/registertree.png';

import { ReactComponent as Fb } from '../../assets/icons/fb.svg';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';

const Register = () => {
  return (
    <LoginBase className="center">
      <div className='login-grid'>
        <div>
          <img src={logo} alt="logo" className='logoImg' />
          <img src={loginImg} alt="Login" className='groupImg' />
          <img src={loginBg} alt="Login" className='loginImg' />
          <img src={tree} alt="tree" className='tree' />
        </div>
        <div>
          <LoginPage>
            <div className="content">
              <h3>Adventure starts here 🚀</h3>
              <p className="mb-24">
                Make your app management easy and fun!
              </p>
              <form>
               <Input type="name" className="mb-16" placeholder="Username" />
                <Input type="email" className="mb-16" placeholder="Email" />
                <Input.Password placeholder="Password" />
                <div className="form-actions mb-16">
                  <Checkbox>I Agree to privacy policy & terms</Checkbox>
                </div>
                <Button type="primary" size="large" block>
                  LOGIN
                </Button>
              </form>
              <p className="text">
                Already have an account?{' '}
                <span className="text-primary">&nbsp;Sign in instead</span>
              </p>
              <Divider>or</Divider>
              <div className="logos">
                <span className="icon pointer">
                  <Fb />
                </span>
                <span className="icon pointer">
                  <Twitter />
                </span>
                <span className="icon pointer">
                  <Github />
                </span>
                <span className="icon pointer">
                  <Google />
                </span>
              </div>
            </div>
          </LoginPage>
        </div>
      </div>
    </LoginBase>
  );
};

export { Register };