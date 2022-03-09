import { useState } from 'react'
import Menu from '../Menu/Menu';
import {Logo} from '../Logo/Logo';
import './style.scss';

function Header() {

  const [tweets, setTweets] = useState<string[]>([])//is here have concept immutability 
 
  return (
      <div className='header-container'>
          <div className='container'>
              <Logo />
              <Menu />
          </div>
      </div> 
  );
}

export default Header;