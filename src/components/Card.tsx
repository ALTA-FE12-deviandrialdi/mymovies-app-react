import React, { Component } from "react";

interface CardProps {
  id: string;
  title: string;
  image: string;
  description: string;
}

class Card extends Component<CardProps> {
  render() {
    const { id, title, image, description } = this.props;

    return (
      <div className="card glass bg-[#efe5e9]">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body items-center justify-between">
          <h2 className="card-title items-center text-center">{title}</h2>
          <p>{description}</p>
        </div>

        <button className="btn gap-1 bg-[#842a50] text-[9px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Add to Favorite
        </button>
      </div>
    );
  }
}

export default Card;
