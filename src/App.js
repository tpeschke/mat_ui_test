import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Dialog from 'material-ui/Dialog'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'

class App extends Component {
  constructor() {
    super()

    this.state= {
      drawer: false,
      open: false
    }
  }

  render() {
    return (
      <div className="App">
          <AppBar 
            title="Trent's Super Rad Test App"
            onLeftIconButtonClick={_=>this.setState({drawer:true})}/>

          <Drawer 
            open={this.state.drawer}
            docked={false}
            onRequestChange={_=>this.setState({drawer:false})}></Drawer>

          <button onClick={_=>this.setState({open: true})}>open dialog</button>

          <Dialog
              title="CTA Text"
              actions={<button onClick={()=>this.setState({open: false})}>Confirm Dialog</button>}
              open={this.state.open}>
              <TextField
                floatingLabelText="this is just a label"/>
              <DatePicker 
                hintText="Date Picker" />
          </Dialog>
      </div>
    );
  }
}

export default App;
