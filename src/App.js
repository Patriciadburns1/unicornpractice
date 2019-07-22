import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from './pages/homePage'; 
import Toolbar from './components/toolBar/toolBar'
import SideDrawer from './components/SideDrawer/sideDrawer'
import Backdrop from './components/BackDrop/backDrop'

class App extends Component {
  constructor (props){
    super(props); 
    this.state = {
      sideDrawerOpen: false
    }
  }
 
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop; 

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />  
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        <Switch> 
        {backdrop}
          <Route path="/homepage" component={HomePage}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App); 