import React, { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div key={id} className="card-container">
        <img src={`https:\\robohash.org/${id}`} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    );
  }
}
export default Card;
