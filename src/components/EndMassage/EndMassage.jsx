import "./EndMassage.style.css"
import React from "react";

class EndMassage extends React.Component{

    getEndMessage = () => {
        if (this.props.like > this.props.dislike){
            return "You Like Classic Art";
        } else if (this.props.like < this.props.dislike){
            return "You Dislike Classic Art";
        } else {
            return "Draw";
        }
    }

    render(){
        return(
            <div className="end-message-container">
            <h2>{this.getEndMessage()}</h2>
            <button onClick={this.props.restart}>Restart</button>
            </div>
        )
    }
}

export default EndMassage;