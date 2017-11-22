import React from "react";
import Button from "material-ui/Button";

class Formulaire extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const commentaire = {
      pseudo: this.pseudoInput.value,
      comment: this.commentInput.value
    };
    console.log("Formulaire.js", commentaire.pseudo, commentaire.comment);

    this.props.addComment(commentaire);
    // this.props.addCommentPanda(commentaire);

    this.textForm.reset();
  };

  render() {
    return (
      <div>
        <h2>Formulaire</h2>
        <form
          className="commentForm"
          onSubmit={e => this.handleSubmit(e)}
          ref={input => (this.textForm = input)}
        >
          <label htmlFor="pseudo">Pseudo </label>
          <input type="text" ref={input => (this.pseudoInput = input)} />
          <label htmlFor="commentaire">Commentaire </label>
          <textarea
            name="commentaire"
            id=""
            cols="20"
            rows="5"
            ref={input => (this.commentInput = input)}
          />
          <Button dense type="submit">
            Ok
          </Button>
        </form>
      </div>
    );
  }
}

export default Formulaire;
