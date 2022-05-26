import "./LikeAndDislikeCounter.style.css";
import React from "react";

class LikeAndDislikeCounter extends React.Component {

    getImgSrc = () => {
        if (this.props.type === "like") {
            return "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-smiley-face-emoji-with-a-smile-for-internet-messenger-smiley-color-tal-revivo.png";
        }
        if (this.props.type === "dislike") {
            return "https://img.icons8.com/fluency/96/000000/sad.png";
        }
    }

    render() {
        return (
            <div className="counter-container">
                <img className="smiley"
                    src={this.getImgSrc()}
                    alt={this.props.type === "like" ? "like" : "dislike"}
                />
                <span className="display-count">{this.props[this.props.type]}</span>
            </div>
        );
    }
}

export default LikeAndDislikeCounter;