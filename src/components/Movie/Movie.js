import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <article className="Movie">
        <h1>{this.props.title}</h1>
        <div className="Info">
          <div className="Title">{this.props.description}</div>
        </div>
      </article>
    );
  }
}
export default Movie;
