import React from 'react';
import './NavBar.css'
import Logo from '../images/Logo.jpeg'
import ActiveIcon from '../images/images.png';
import { SidebarData } from './SidebarData';

function NavBar() {
    // const [sidebar, setSidebar] = useState();
  return (
    <div>
      <div className="sidebarmenu">
        <div className="image">
            <img src={Logo} alt="" />
            <img src={ActiveIcon} alt="" className='ActiveIcon'/>
            <h2>Julius Kilanko</h2>
            <p>Front-end Developer</p>
        </div>
        <div className="sidebar">
        {SidebarData.map((item, index) =>{
            return(
                <buttton key={index} className={item.cName}>
                    <a href={item.path}>
                        <button>{item.title}</button>
                    </a>
                </buttton>
            )
        })}
      </div>
      </div>
    </div>
  )
}

export default NavBar

