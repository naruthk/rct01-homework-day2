import React from 'react';
import FilmPoster from "./FilmPoster";

const FilmDetails = props => {
  
  /*
    TO-DO:
    1. Fix problem in which current FilmDetail is re-rendered when fav/unfav
    2. Connect to API rather than using mock data
  */

  const RenderCurrentFilmInfo = () => {
    const { title, poster_path, backdrop_path } = props.current;

    return (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <FilmPoster
            title={title}
            posterPath={backdrop_path}
            posterUrlPrefix={"https://image.tmdb.org/t/p/w1280/"}
          />
          <h1 className="film-title">It</h1>
        </figure>
        <div className="film-meta">
          <h2 className="film-tagline">Your fears are unleashed</h2>
          <p className="film-detail-overview">
            <FilmPoster
              title={title}
              posterPath={poster_path}
              className={"film-detail-poster"}
              posterUrlPrefix={'https://image.tmdb.org/t/p/w780'}
            />
            In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      <div className="film-detail">
        {!props.current ? (
          <p><i className="material-icons">subscriptions</i><span>No film selected</span></p>
         ) : <RenderCurrentFilmInfo />}
      </div>
    </div>
  )
};

export default FilmDetails;