import React from 'react';
import Home from './components/home/Home'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Home/>
      </div>
    )
  }
}

export default App;
