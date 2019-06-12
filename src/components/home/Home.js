import React from 'react';
import axios from 'axios';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    
    //请求数据
    componentDidMount(){
        axios.get('http://localhost:3000/api',{}).then(res=>{
            console.log(res.data)
        })
    }

    render(){
        return(
            <div></div>
        )
    }

    //销毁
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
}

export default Home