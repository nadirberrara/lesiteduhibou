import React from "react";
import Formulaire from "../Components/Formulaire";
import Commentaires from "../Components/Commentaires";
import base from "../base";

class Panda extends React.Component {
  state = {
    commentaires: {}
  };

  componentWillMount() {
    this.ref = base.syncState("/panda", {
      context: this,
      state: "commentaires"
    });
  }

  addComment = commentaire => {
    console.log("Panda.js", commentaire.pseudo, commentaire.comment);
    const commentaires = { ...this.state.commentaires };
    const timeStamp = Date.now();
    commentaires[`comment-${timeStamp}`] = commentaire;
    this.setState({ commentaires });
    console.log("state : ", this.state.commentaires);
  };

  render() {
    const commentaires = Object.keys(this.state.commentaires).map(key => (
      <Commentaires key={key} details={this.state.commentaires[key]} />
    ));
    return (
      <div>
        <h1>Panda</h1>
        <img
          className="imgPanda"
          src="http://resize1-parismatch.ladmedia.fr/r/940,628/img/var/news/storage/images/paris-match/culture/cinema/craquez-pour-yaya-le-panda-avec-la-bande-annonce-de-nes-en-chine-1280798/21414068-1-fre-FR/Craquez-pour-Yaya-le-panda-avec-la-bande-annonce-de-Nes-en-Chine.jpg"
          alt=""
        />
        <Formulaire addComment={this.addComment} />
        <h2>Commentaires</h2>
        <div>{commentaires}</div>
      </div>
    );
  }
}

export default Panda;
