import "./Movieinfo.css";
import { useSpring, animated } from "react-spring";
import React, { Fragment, useEffect } from "react";

const Movieinfo = ({
  id,
  title,
  overview,
  media_type,
  genre_ids,
  name,
  release_date,
  first_air_date,
  poster_path,
  vote_average,
  selectMovie,
  updateSelectedGenre,
  selectedGenre,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const styles = useSpring({
    from: { opacity: "0.1" },
    to: { opacity: "1" },
    config: { duration: "4500" },
  });
  //because api response have different keys if its tv series or movie
  let d = new Date(release_date);
  if (media_type === "tv") {
    title = name;
    d = new Date(first_air_date);
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
        default:
          return 0;
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
  /*
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
            className="w-20"
            variant="top"
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
  }*/

  function MyVerticallyCenteredModal(props) {
    return (
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-2">
              <div
                className="relative w-auto my-6 mx-auto max-w-3xl"
                style={{
                  backgroundImage: `url(${
                    "https://image.tmdb.org/t/p/w500" + poster_path
                  })`,
                }}
              >
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-zinc-300">
                  {/*header*/}
                  <div className="flex items-center justify-center p-5 rounded-t">
                    <h3 className="text-3xl font-semibold text-center">
                      {title}
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="relative flex flex-col md:flex-row items-center md:items-start px-2">
                    <img
                      className="w-60 md:w-80"
                      src={"https://image.tmdb.org/t/p/w500" + poster_path}
                      alt="movie poster"
                    />
                    <div className="body flex flex-col justify-evenly flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed px-2">
                        {overview}
                      </p>
                      <div>
                        {" "}
                        <span className="text-2xl">
                          {Genres(genres(genre_ids))}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-6">
                    <span className="text-2xl">
                      {Genres(genres(genre_ids))}
                    </span>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end  rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 pb-4 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }
  return (
    <div className="reacte">
      <MyVerticallyCenteredModal // modal which is hidden
        show={showModal}
        onHide={() => setShowModal(false)}
      />
      <div className="w-80 rounded overflow-hidden shadow-lg my-2 mx-2 flex flex-col md:w-64 bg-stone-400">
        <img
          className="max-w-2"
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt="Sunset in the mountains"
        ></img>
        <div className="body flex flex-col justify-between flex-auto">
          <div className="font-bold text-xl text-center mb-2">{title}</div>
          <p className="content">
            <div className="text-center">{d.getFullYear()}</div>
            <div className="">
              <span style={{ fontSize: "15px" }}>
                {Genres(genres(genre_ids))}
              </span>
            </div>{" "}
            <div className="text-center">
              <button
                className="bg-transparent text-center hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-stone-500 hover:border-transparent rounded"
                type="button"
                onClick={() => setShowModal(true)}
              >
                More info
              </button>
            </div>{" "}
          </p>
        </div>
      </div>
      {/* <MyVerticallyCenteredModal // modal which is hidden
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  */}
      {/*    <animated.div className="hehe" style={styles}>
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
              <div className="text-center">{d.getFullYear()}</div>
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
                
                  More info
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </animated.div>
    */}
    </div>
  );
};

export default Movieinfo;
