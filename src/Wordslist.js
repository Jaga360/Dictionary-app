import React, { Component } from 'react';

class Wordslist extends Component {

    render(){
        const {words}=this.props;
        return(
            <div>
                {words.map((word,index)=>(
                    <h6 key={index}>{word}</h6>
                ))}
            </div>
        );
    }
}

export default Wordslist;