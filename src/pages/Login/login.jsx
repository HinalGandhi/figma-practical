import { Button, Checkbox, Divider, Input } from 'antd';
import { LoginBase, LoginPage } from './Login.styles';

import logo from '../../assets/images/Logo.png';
import loginBg from '../../assets/images/Mask.png';
import loginImg from '../../assets/images/group-light 1.png';
import tree from '../../assets/images/Tree.png';

import { ReactComponent as Fb } from '../../assets/icons/fb.svg';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';

const Login = () => {
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
              <h3>Welcome to Materialize! 👋🏻</h3>
              <p className="mb-24">
                Please sign-in to your account and start the adventure
              </p>
              <form>
                <Input type="email" className="mb-16" placeholder="Email" />
                <Input.Password placeholder="Password" />
                <div className="form-actions mb-16">
                  <Checkbox>Remember Me</Checkbox>
                  <span className="text-primary">Forgot password ?</span>
                </div>
                <Button type="primary" size="large" block>
                  LOGIN
                </Button>
              </form>
              <p className="text">
                New on our platform?{' '}
                <span className="text-primary">&nbsp;Create an account</span>
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

export { Login };