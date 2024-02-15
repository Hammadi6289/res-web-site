import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to="/tour-preview">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <div className="pricing">{props.pricing}</div>{" "}
            {/* Add a div for pricing */}
            <div className="tour-length">{props.tourLength}</div>{" "}
            {/* Add a div for tour length */}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
