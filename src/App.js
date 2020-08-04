import React from 'react';

import './App.css';
//create class Component
class ToggleCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      count:0,
      // IsToggle:false

     }
  }
  //handle event to update when user click buton
  handleCount=()=>{
    this.setState({
      count:this.state.count +1,
    }
    )
  }
  render() { 
    return (  
      <div>
            <button onClick ={this.handleCount}>
               {this.state.count} 
                      </button>
      </div>
    );
  }
}
 
export default ToggleCount;
