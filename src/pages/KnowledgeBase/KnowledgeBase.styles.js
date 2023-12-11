import styled from 'styled-components';

export const KnowledgePage = styled.div`
  padding: 15px;
  position: relative;
  .mainDiv{
    top:50%;
    left: 0;
    right: 0;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transform: translate(0, -50%);
    h3{
      color:#9155FD;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 32px;
      margin-bottom: 10px;
    }
    p{
      color:#807e82;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: normal;
      margin-bottom: 26px;
    }
  }
  .backgroundImg{
    z-index: -1;
    width: 100%;
    height: 320px;
  }
`;

export const CardsBase = styled.div`
overflow: hidden;
padding: 15px;
.cardInnerDiv{
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 -15px;
  .cardInnerCol{
    width: 33.33%;
    flex:0 0 33.33%;
    max-width: 33.33%;
    padding : 0 15px;
    margin-bottom: 30px;
  }
  .cardBox{
    border-radius: 6px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
      width: 100%;
    }
    h3{
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 16px;
      padding: 20px 20px 0px 20px;
    }
    p{
      font-size: 14px;
      width: 100%;
      text-align: center;
      font-weight: 500;
      margin: 0;
      padding:0px 20px 20px 20px;
      color: #3A3541AD;
    }
  }
}
`