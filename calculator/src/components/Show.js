import React from 'react'
import './show.css'
class Show extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="box">{this.props.msg}</div>
        )
    }
}

export default Show