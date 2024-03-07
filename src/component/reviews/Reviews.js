import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import axios from "axios";

const Reviews = ({ getMovieData }) => {
  const revText = useRef();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:44373/api/v1/movies/${movieId}`);
        const singleMovie = response.data;
        setMovie(singleMovie);
        setReviews(singleMovie.reviewIds);
        console.log(singleMovie.reviewIds);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  const addReview = async (e) => {
    e.preventDefault();
    const reviewBody = revText.current.value;

    try {
      await axios.post(
        "https://localhost:44373/api/v1/reviews",
        { reviewBody, imdbId: movieId }
      );

      setReviews([...reviews, { body: reviewBody }]);
      revText.current.value = "";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img
            style={{ width: "500px", height: "700px" }}
            src={movie?.poster}
            alt=""
          />
        </Col>
        <Col>
          <ReviewForm
            handleSubmit={addReview}
            revText={revText}
            labelText="Write a Review?"
          />
          <hr />
          {reviews.map((r, index) => (
            <div key={index}>
              <p>{r.body}</p>
              <hr />
            </div>
          ))}
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Reviews;
