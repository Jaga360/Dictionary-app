import React, { Component } from 'react';
import Searchbox from "./Searchbox";
import Displaycard from "./Displaycard";
import Wordslist from './Wordslist';

class App extends Component{

    state={
        meaning:[],
        word:'',
        words:['applle','apel','hjfd']
    }
    
    setMeaning=(meaning,word)=>{
        this.setState({
            meaning,
            word
        })
    }
    
    
    render(){
        return(
         <div>
           <Searchbox setmeaning={this.setMeaning}  />
           {this.state.meaning.length !== 0 && <Displaycard meaning={this.state.meaning} word={this.state.word}/>}
           {this.state.words.length !==0 && <Wordslist words={this.state.words}/>}
         </div>  
        );
    }
}

export default App;