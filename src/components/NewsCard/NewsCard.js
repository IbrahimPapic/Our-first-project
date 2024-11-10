import React from "react";
import "./newsCard.css"

// const NewsCard = ({title, description, date}) => {



    const Cards = ({ article }) => {
        return (
          <div className="container">

            <div>
            <img src={article.img}/>
            </div>

            <div className="text">
            <h2 className="naslov">{article.title}</h2>
            <a href="#">{article.location}</a>
            <p className="description">{article.description}</p>
            </div>

            <div className="ocena">
            <h1>Vrlo dobar</h1>
            <p className="grade">{article.grade}</p>
            </div>
          </div>
        );
      };

export default Cards
