import "./LikeAndDislikeBtn.style.css"
import React from "react";

class LikeAndDislikeBtn extends React.Component {

    getImgSrc = () => {
        if (this.props.type === "like") {
            return "https://img.icons8.com/external-sbts2018-solid-sbts2018/58/000000/external-like-social-media-sbts2018-solid-sbts2018.png";
        }
        if (this.props.type === "dislike") {
            return "https://img.icons8.com/external-sbts2018-solid-sbts2018/58/000000/external-dislike-social-media-sbts2018-solid-sbts2018.png";
        }
    }

    onLikeDislikeClick = () => {
        if (this.props.type === "like") {
            this.props.addLikeDislike("like");
        }
        if (this.props.type === "dislike") {
            this.props.addLikeDislike("dislike");
        }
    }

    render() {
        return (
            <div>
                <img className="like-dislike-image"
                    src={this.getImgSrc()}
                    alt={this.props.type === "like" ? "like" : "dislike"}
                    onClick={this.onLikeDislikeClick}
                />
            </div>
        );
    }
}

export default LikeAndDislikeBtn;