import React, { Component } from 'react';
import Searchbox from "./Searchbox";
import Displaycard from "./Displaycard";
import Wordslist from './Wordslist';

class App extends Component{

    state={
        meaning:[],
        word:'',
        words:[],
        inList:false
    }
    
    setMeaning=(meaning,word)=>{
        const {words}=this.state;
        const status = words.includes(word);
        this.setState({
            meaning,
            word,
            inList:status
        })
    }
    
    closeCard=()=>{
        this.setState({
            meaning:[]
        })
    }

    handleChoice=(word)=>{
        let {words}=this.state;
         if(words.includes(word)){
            words=words.filter((w)=> word !== w);
            this.setState({
                words,
                inList:false
            })
         }else{
          words.push(word);
          this.setState({
            words,
            inList:true
          })
         }
    }

    render(){
        return(
         <div>
           <Searchbox setmeaning={this.setMeaning}  />
           {this.state.meaning.length !== 0 &&
           <Displaycard meaning={this.state.meaning} word={this.state.word} inlist={this.state.inList} 
           closecard={this.closeCard} handlechoice={(word)=>{this.handleChoice(word)}}/>}
           {this.state.words.length !==0 && <Wordslist words={this.state.words} setmeaning={this.setMeaning} />}
         </div>  
        );
    }
}

export default App;