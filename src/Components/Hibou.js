import React from "react";
import Formulaire from "../Components/Formulaire";
import Commentaires from "../Components/Commentaires";
import base from "../base";

class Hibou extends React.Component {
  state = {
    commentaires: {}
  };

  componentWillMount() {
    this.ref = base.syncState("/commentaires", {
      context: this,
      state: "commentaires"
    });
  }

  addComment = commentaire => {
    console.log("Hibou.js", commentaire.pseudo, commentaire.comment);
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
        <h2>Greatest Hibou</h2>
        <img
          src="http://www.oiseaux-birds.com/strigiformes/strigides/hibou-du-cap/hibou-du-cap-cdw3.jpg"
          alt=""
        />
        <Formulaire addComment={this.addComment} />
        <h2>Commentaires</h2>
        <div>{commentaires}</div>
      </div>
    );
  }
}

export default Hibou;
