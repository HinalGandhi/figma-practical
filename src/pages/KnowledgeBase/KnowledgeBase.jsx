import React from 'react';
import { KnowledgePage, CardsBase } from './KnowledgeBase.styles'
import loginBg from '../../assets/images/KnowlegeTree.png';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import card4 from '../../assets/images/card4.png';
import card5 from '../../assets/images/card5.png';
import card6 from '../../assets/images/card6.png';
import Text from '../../assets/images/TextField/Outlined.png';

const data = [{
  src: card1,
  title: 'Sales Automation ⭐️',
  des: 'There is perhaps no better demonstration of the folly of image of our tiny world.'
}, {
  src: card2,
  title: 'Marketing Automation 🚀',
  des: 'Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.'
}, {
  src: card3,
  title: 'API Questions 📱',
  des: 'Every hero and coward, every creator and destroyer of civilization.'
}, {
  src: card4,
  title: 'Personalization 🤩',
  des: 'It has been said that astronomy is a humbling and character experience.'
}, {
  src: card5,
  title: 'Email Marketing ✉️',
  des: 'There is perhaps no better demonstration of the folly of human conceits.'
}, {
  src: card6,
  title: 'Demand Generation 🤟🏻',
  des: 'Competent means we will never take anything for granted.'
}]



function KnowledgeBase() {
  return (
    <>
      <KnowledgePage>
        <img src={loginBg} alt="hello" className='backgroundImg' />
        <div className='mainDiv'>
          <h3>
            Hello, how can we help?
          </h3>
          <p>or choose a category to quickly find the help you need</p>
          <img src={Text} alt="hello" />
        </div>
      </KnowledgePage>
      <CardsBase>
        <div className='cardInnerDiv'>
          {data.map((e) => (
            <div className='cardInnerCol'>
              <div className='cardBox'>
                <img src={e.src} alt='card1' />
                <h3>
                  {e.title}
                </h3>
                <p> {e.des}</p>
              </div>
            </div>
          )
          )}
        </div>
      </CardsBase>
    </>
  )
}

export default KnowledgeBase