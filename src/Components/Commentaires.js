import React from "react";

class Commentaires extends React.Component {
  render() {
    return (
      <div>
        <div className="commentaire">
          <strong> {this.props.details.pseudo}</strong>
          <span> {this.props.details.comment}</span>
        </div>
      </div>
    );
  }
}

export default Commentaires;
