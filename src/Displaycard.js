import React ,{ Component } from "react";

class Displaycards extends Component{

   closeCard=()=>{
       this.props.closecard();
   }
   
   handleClick=()=>{
       const {word}=this.props;
       this.props.handlechoice(word);
   }

  render(){
    const {meaning,word,inlist}=this.props;
      return(
        
            <div className="card display-card">
              <div className="card-body">
                <h5 className="card-title">{word}</h5>
                <ul>
                  {meaning.map((m,index)=>(
                    <li key={index} className="card-text">{m}</li>
                  ))}
                </ul>
                <button className="btn btn-outline-danger close-btn" onClick={this.closeCard}>Close Card</button>
                <button className="btn btn-outline-primary choice-btn" onClick={this.handleClick}>{ inlist ? 'Remove' : 'Add'}</button>
              </div>
            </div>
          
      );
  }
}

export default Displaycards;