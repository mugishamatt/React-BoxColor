import React from 'react';

import './App.css';
//create class Component
class ToggleCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      count:0,
      IsToggle:false

     }
  }
  //handle event to update when user click buton
  handleCount=()=>{
    this.setState({
      count:this.state.count +1,
      IsToggle:!this.state.IsToggle
    }
    );
  }
  render() { 
    const isToggleOn= this.state.isToggle
    return(
        <div className='column' >

              <div>
             <button className= {isToggleOn ? 'blue': 'yellow'} onClick ={this.handleCount}>
             {this.state.count} 
                    </button>
                    </div>
            </div>
       
    )
}
}
 
export default ToggleCount;
