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
    console.log("indisplaycards");
      return(
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{word}</h5>
                <ul>
                  {meaning.map((m,index)=>(
                    <li key={index} className="card-text">{m}</li>
                  ))}
                </ul>
                <button className="btn btn-primary" onClick={this.closeCard}>Close Card</button>
                <button className="btn btn-primary" onClick={this.handleClick}>{ inlist ? 'Remove' : 'Add'}</button>
              </div>
            </div>
          </div>
       </div>
      );
  }
}

export default Displaycards;