import React from "react";

class Images extends React.Component{

    render(){
        return(
            <>
                <img className="image" src={this.props.imageSrc} alt={this.props.imageTitle} />
                <h2>{this.props.imageTitle}</h2>
                <p>{this.props.description}</p>
            </>
        );
    }
}

export default Images;