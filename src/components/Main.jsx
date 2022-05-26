import "./Main.style.css"
import React from "react";
import imagesList from "../data/data.js";
import Images from "./Images/Images.jsx";
import LikeAndDislikeBtn from "./LikeAndDislikeBtn/LikeAndDislikeBtn.jsx";
import LikeAndDislikeCounter from "./LikeAndDislikeCounter/LikeAndDislikeCounter.jsx";
import EndMassage from "./EndMassage/EndMassage.jsx";



class Main extends React.Component {
    state = { like: 0, dislike: 0, imagesListArr: imagesList }

    addLikeDislike = (likeDislike) => {
        this.setState(prev => ({ [likeDislike]: prev[likeDislike] + 1 }));
    }

    restart = () => {
        this.setState({like: 0, dislike: 0});
    }

    render() {
        const currentImg = this.state.imagesListArr[this.state.like + this.state.dislike];
        return (
            <div className="main-container">
                <div className="like-dislike-container">
                    <LikeAndDislikeCounter type="dislike" dislike={this.state.dislike} />
                    <LikeAndDislikeCounter type="like" like={this.state.like} />
                </div>
                {
                    currentImg
                        ?
                        < Images
                            imageSrc={currentImg.src}
                            imageTitle={currentImg.title}
                            description={currentImg.description}
                        />
                        :
                        <EndMassage like={this.state.like} dislike={this.state.dislike} restart={this.restart} />
                }
                {currentImg && <div className="like-dislike-container">
                    < LikeAndDislikeBtn type="dislike" addLikeDislike={this.addLikeDislike} />
                    < LikeAndDislikeBtn type="like" addLikeDislike={this.addLikeDislike} />
                </div>}
            </div>
        );
    }
}

export default Main;