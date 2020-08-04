import React from 'react';
import './App.css'

class ToggleCount extends React. Component {
  constructor(props) {
    super(props);
    this.state = { 
      count:0,
      isToggle:false
     }
  }
  handleCount=()=>{
    this.setState({
      count:this.state.count +1,
      isToggle:!this.state.isToggle
    })
  }

    render(){
      const isToggleOn= this.state.isToggle
      return(
          <div className='column' >
              {/* style={isOn?"blue":"red"}  */}
              {/* <div className={isToggleOn ? 'yellow': 'red'}> */}
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