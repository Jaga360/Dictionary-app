import React ,{ Component } from "react";

class Displaycards extends Component{
  render(){
    const {meaning,word}=this.props;
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
                <button className="btn btn-primary">Cancel</button>
              </div>
            </div>
          </div>
       </div>
      );
  }
}

export default Displaycards;