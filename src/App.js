import React, { Component } from 'react';
import Searchbox from "./Searchbox";
import Displaycard from "./Displaycard";
import Wordslist from './Wordslist';

class App extends Component{

    state={
        meaning:[],
        word:'',
        words:['applle','apel','hjfd','envy'],
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
            console.log("removing");
            words=words.filter((w)=> word !== w);
            this.setState({
                words,
                inList:false
            })
         }else{
          console.log("adding");
          words.push(word);
          this.setState({
            words,
            inList:true
          })
         }
          console.log(word,words);
    }

    render(){
        return(
         <div>
           <Searchbox setmeaning={this.setMeaning}  />
           {this.state.meaning.length !== 0 &&
           <Displaycard meaning={this.state.meaning} word={this.state.word} inlist={this.state.inList} 
           closecard={this.closeCard} handlechoice={(word)=>{this.handleChoice(word)}}/>}
           {this.state.words.length !==0 && <Wordslist words={this.state.words}/>}
         </div>  
        );
    }
}

export default App;