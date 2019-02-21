import React, {Component, Fragment} from 'react';
import './Movie.css';

class Movie extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.title !== this.props.title
    }

    render() {
        return (
            <Fragment>
                <div className='movie'>
                    <input className='h1' value={this.props.title} onChange={this.props.onMovieChange}/>
                </div>
                <button onClick={this.props.onRemoveMovie} className='delete_link'>удалить</button>
            </Fragment>
        )
    }
}

export default Movie;
