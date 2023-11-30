import styled from 'styled-components';
import { typography, dark } from '../../config/theme'

export const LoginPage = styled.div`
  padding: 48px 28px 36px 28px;
  width: 450px;
  border-radius: 6px;
  background-color: ${dark.background};
  text-align: start;
  height: 100vh;
  display: flex;
  align-items: center;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    h2 {
      font-size: 24px;
      font-weight: 600;
      line-height: 29px;
    }
  }
  .content {
    h3 {
      font-size: 20px;
      line-height: 32px;
      font-weight: 500;
    }
    p {
      color: ${typography.secondary};
      font-size: 14px;
    }
  }
  .form-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    height: 42px;
  }
  .text {
    font-size: 16px;
    margin-top: 28px;
    text-align: center;
  }
  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 28px;
  }
  .ant-divider-inner-text {
    font-weight: 400;
  }
`;

export const LoginBase = styled.div`
  height: 100vh;
  .login-grid{
    display: grid;
    grid-template-columns: 4fr 1fr;
    align-items: center;
    &.notfound-page{
      grid-template-columns: none;
    }
    .logoImg{
      width:139px;
      height:29px;
      position: absolute;
      top: 20px;
      left:20px;
    }
    .groupImg{
      height:65vh;
      position: absolute;
      top: 135px;
      left: 260px;
    }
    .loginImg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 288px;
      z-index: -1;
    }
    .tree {
      position: absolute;
      bottom: 10px;
      left: 10px;
      height: 190px;
    }
    .notfoundtree{
      position: absolute;
      bottom: 65px;
      left: 10px;
      height: 180px;
    }
    .notfoundBg{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 188px;
      z-index: -1;
    }
    .notfound-content{
      display: grid;
      justify-items: center;
      justify-content: center;
    }
    .notfoundBoy{
      width: 100%;
      height: 60vh;
      margin: 25px 0;
    }
    .notfound-text{
      display: flex;
      flex-direction: column;
      align-items: center;
      .text-not-found {
        font-size: 66px;
        color:#3A3541DE;
        text-align: center;
        margin-bottom: 5px;
        font-weight: 500;
        line-height: 82px;
      }
      .auth{
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0px;
      }
      .permission{
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.15000000596046448px;
        color: #3A3541AD;
      }
    }
  }
`;