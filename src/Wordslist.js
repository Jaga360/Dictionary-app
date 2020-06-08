import React, { Component } from 'react';
import fetchmeaning from './API/fetchmeaning';

class Wordslist extends Component {

    handleClick=(word)=>{
        fetchmeaning(word)
        .then((meaning)=>{this.props.setmeaning(meaning,word)})
    }

    render(){
        const {words}=this.props;
        return(
            <div>
                {words.map((word,index)=>(
                    <h6 onClick={()=>{this.handleClick(word)}} key={index}>{word}</h6>
                ))}
            </div>
        );
    }
}

export default Wordslist;