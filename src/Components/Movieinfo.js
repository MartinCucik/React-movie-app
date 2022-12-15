import "./Movieinfo.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSpring, animated } from "react-spring";
import Modal from "react-bootstrap/Modal";
import React, { Fragment, useEffect } from "react";

const Movieinfo = ({
  id,
  title,
  overview,
  media_type,
  genre_ids,
  name,
  poster_path,
  vote_average,
  selectMovie,
  updateSelectedGenre,
  selectedGenre,
}) => {
  const [modalShow, setModalShow] = React.useState(false);
  const styles = useSpring({
    from: { opacity: "0.1" },
    to: { opacity: "1" },
    config: { duration: "4500" },
  });
  if (media_type === "tv") {
    title = name;
  }

  function genres(genre_ids) {
    const newArr = genre_ids.map(myFunction);
    function myFunction(num) {
      switch (num) {
        case 12:
          return "Adventure";

        case 28:
          return "Action";

        case 16:
          return "Animation";

        case 35:
          return "Comedy";

        case 80:
          return "Crime";

        case 99:
          return "Documentary";

        case 18:
          return "Drama";

        case 14:
          return "Fantasy";

        case 36:
          return "History";

        case 27:
          return "Horror";

        case 9648:
          return "Mystery";

        case 10749:
          return "Romance";

        case 878:
          return "Science Fiction";

        case 53:
          return "Thriller";

        case 10752:
          return "War";

        case 37:
          return "Western";

        case 10759:
          return "Action & Adventure";

        case 16:
          return "Animation";

        case 35:
          return "Comedy";

        case 80:
          return "Crime";

        case 99:
          return "Documentary";

        case 18:
          return "Drama";

        case 10751:
          return "Family";

        case 10762:
          return "Kids";

        case 10763:
          return "News";

        case 10764:
          return "Reality";

        case 10765:
          return "Sci-Fi&Fantasy";

        case 10766:
          return "Soap";

        case 10767:
          return "Talk";

        case 10768:
          return "War&Politics";
      }
    }

    return newArr;
  }

  function update(genre) {
    updateSelectedGenre(genre);
  }
  const Genres = (genreIds) => {
    return genreIds.map((genreId, index) => (
      <span
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          update(genreId);
        }}
      >
        {index > 0 && ","}
        {genreId}
      </span>
    ));
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Modal.Title
            style={{
              fontSize: "2rem",
            }}
            id="contained-modal-title-vcenter"
          >
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            gap: "20px",
            backgroundColor: "#dee5ec",
            flexDirection: "row",
          }}
        >
          <Card.Img
            variant="top"
            style={{ width: "20rem" }}
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
          />

          <div
            class="plan-container"
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p>{overview}</p>
            <div> {Genres(genres(genre_ids))}</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div className="reacte">
      <MyVerticallyCenteredModal // modal which is hidden
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <animated.div className="hehe" style={styles}>
        {" "}
        <Card
          className="card m-2 h-100"
          style={{ width: "18rem" }}
          onClick={() => selectMovie(id)}
        >
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>

            <Card.Text>
              <div>
                <span style={{ fontSize: "15px" }}>
                  {Genres(genres(genre_ids))}
                </span>
              </div>
              <div>
                User rating :
                <div
                  id="rating"
                  style={{ borderRadius: "50%", textAlign: "center" }}
                >
                  {(Math.round(vote_average * 10) / 10).toFixed(1)}
                </div>
              </div>
              <div class="col-md-12 text-center">
                <Button variant="flat" onClick={() => setModalShow(true)}>
                  {/*show modal*/}
                  More info
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </animated.div>
    </div>
  );
};

export default Movieinfo;
