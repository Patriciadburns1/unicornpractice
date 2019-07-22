import React from 'react';
import './toolBar.css';
import DrawerToggleButton from '../SideDrawer/drawerToggleButton';

const navBar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle_button"><DrawerToggleButton click={props.drawClickHandler} /></div>
                <div className="toolbar_logo"> <a href="/"> Logo</a> </div>
            <div className="spacer"> </div>
                <div className="toolbar_navigation-item">
                    <ul>
                        <li> <a href="/"> Home </a>  </li>
                        <li> <a href="/"> Uploads </a> </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default navBar; 