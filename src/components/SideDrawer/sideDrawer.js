import React from 'react';
import './sideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li> <a href="/"> Products </a>  </li>
                <li><a href="/homepage"> Homepage </a></li>
            </ul>
        </nav>
    )
}



export default sideDrawer; 