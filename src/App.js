import React, { Component } from 'react';
import Searchbox from "./Searchbox";
import Displaycard from "./Displaycard";
import Wordslist from './Wordslist';
import './App.css';
import Loadingindicator from './Loadingindicator';


class App extends Component{

    state={
        meaning:[],
        word:'',
        words:[],
        inList:false
    }

    getStatus=(word)=>{
        let {words}=this.state;
        let status=false; 
        words.forEach((w)=>{
            if(w.toLowerCase() === word.toLowerCase())
              status=true;
        });
        return status;
    }
    
    setMeaning=(meaning,word)=>{
        let status=this.getStatus(word);
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
        let status=this.getStatus(word);
        if(status){
            words=words.filter((w)=> word.toLowerCase() !== w.toLowerCase());
            this.setState({
                words,
                inList:false
            })
         }else{
             words.push(word);
             words.sort((a,b)=>{
                if (a.toLowerCase() < b.toLowerCase()) return -1;
                if (a.toLowerCase() > b.toLowerCase()) return 1;
               return 0;
             });
             this.setState({
                words,
                inList:true
             })
         }
    }

    render(){
        return(
         <div>
           <div className="search-set">
             <Searchbox setmeaning={this.setMeaning} />
             <Loadingindicator/>
             {this.state.meaning.length !== 0 &&
             <Displaycard meaning={this.state.meaning} word={this.state.word} inlist={this.state.inList} 
             closecard={this.closeCard} handlechoice={(word)=>{this.handleChoice(word)}}/>}
           </div>
             {this.state.words.length !==0 && <Wordslist words={this.state.words} setmeaning={this.setMeaning} />}
         </div>  
        );
    }
}

export default App;