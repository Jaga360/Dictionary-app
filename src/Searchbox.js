import React, { Component } from 'react';
import fetchmeaning from './API/fetchmeaning.js'

class Searchbox extends Component{

    state={
      inputValue:''
    }

    handleClick=()=>{
       const word=this.state.inputValue;
       fetchmeaning(word)
       .then((meaning)=>{
           if(meaning !== undefined)
           this.props.setmeaning(meaning,word);
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
        <div className="input-group mb-3 search-box">
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