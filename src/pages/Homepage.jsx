import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error !</p>;

  return (
    <div>
      {data &&
        data.map((review) => {
          const { rating, title, body } = review.attributes;

          return (
            <div key={review.id} className="review-card">
              <div className="rating">{rating}</div>
              <h2>{title}</h2>

              <small>console list</small>

              <p>{body.substring(0, 200)}...</p>

              <Link to={`details/${review.id}`}>Read more</Link>
            </div>
          );
        })}
    </div>
  );
}
