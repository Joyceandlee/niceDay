import React from 'react';
import './button.css'

class Button extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      this.props.data.map((item,index)=>{
          return (
              <div className="btn" key={index} onClick={()=>{this.props.change(item)}}>{item}</div>
          )
      })
    )
  }
}


export default Button