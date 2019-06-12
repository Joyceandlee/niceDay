import React from 'react';
import Button from './Button'
class Plane extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:["7","8","9",'÷',"4","5","6","x","1","2","3","-",'=',"0",".","+"]
          }
    }

    render(){
        return (
          
                    <Button data={this.state.data} change={this.props.change}/>
            
        )
    }
}

export default Plane