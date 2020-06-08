import React, { Component } from 'react';
import fetchmeaning from './API/fetchmeaning.js'

class Searchbox extends Component{

    state={
      inputValue:''
    }

    handleClick=()=>{
       fetchmeaning(this.state.inputValue)
       .then((meaning)=>{
           if(meaning !== undefined)
           console.log(meaning);
       })
       this.setInput('');
    }

    setInput=(value)=>{
        this.setState({
            inputValue:value
           })
    }

    handleChange=(e)=>{
      this.setInput(e.target.value);
    }

    render(){
        return(
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Pick a word" value={this.state.inputValue} 
            onChange={this.handleChange}/>
            <div className="input-group-append">
              <button className="btn btn-success" type="button" onClick={this.handleClick}>Search</button>
            </div>
         </div>   
        );
    }
}

export default Searchbox;