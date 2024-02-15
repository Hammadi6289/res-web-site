import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the unexplored waterfall inside Amazon Jungle"
              label="Adventure"
              path="/services"
              pricing="$600"
              tourLength="4 days"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali"
              label="Luxury"
              path="/services"
              pricing="$1200"
              tourLength="6 days"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
              pricing="$1000"
              tourLength="5 days"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
              pricing="$2000"
              tourLength="15 days"
            />
            <CardItem
              src="images/20000101_070158.jpg"
              text="Lulusar Lake is known to be the Mother of River Kunhar"
              label="Adrenaline"
              path="/sign-up"
              pricing="$400"
              tourLength="7 days"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/1457111635004.jpg"
              text="Gedrussia is waiting for you"
              label="Mystery"
              path="/services"
              pricing="$1000"
              tourLength="7 days"
            />
            <CardItem
              src="images/1457112955312.jpg"
              text="Experience Chaghi Mountains"
              label="Adventure"
              path="/products"
              pricing="$2000"
              tourLength="10 days"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Swat is a Heaven on Earth"
              label="Adrenaline"
              path="/sign-up"
              pricing="$700"
              tourLength="7 days"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
