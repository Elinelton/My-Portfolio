import * as React from 'react'
import './style.scss';

type MenuProps={};
type MenuState={};

class Menu extends React.Component<MenuProps,MenuState> {
  constructor(props: Readonly<MenuProps>) {
    super(props);
  }
  render(): React.ReactNode {
      return (
        <div className='container-menu'>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Contato</a></li>                        
            </ul>
        </div>
    )
  }
}
export default Menu;