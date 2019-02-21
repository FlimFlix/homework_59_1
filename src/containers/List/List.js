import React, {Component, Fragment} from 'react';
import './List.css';
import Movie from '../../components/Movie/Movie';
import AddMovieForm from '../../components/AddMovieForm/AddMovieForm';

class List extends Component {
    state = {
        movies: [
            {id: 1, title: 'Гарри Поттер и философский парень'},
            {id: 2, title: 'Алита: Боевой ангел'},
            {id: 3, title: 'Не шутите с Зоханом'}
        ],
        currentMovie: {id: '', title: ''},
    };

    onChangeMovie = (id, event) => {
        console.log(event);

        let movieId = this.state.movies.findIndex(movie => {
            return movie.id === id;
        });

        let movie = {
            ...this.state.movies[movieId],
            title: event.target.value,
        };

        let movies = [...this.state.movies];
        movies[movieId] = movie;

        this.setState({
            ...this.state,
            movies
        })
    };

    movieInput = (event) => {
        let value = event.target.value;
        let currentMovie = {
            ...this.state.currentMovie,
            title: value,
            id: new Date()
        };
        this.setState({
            ...this.state,
            currentMovie
        })
    };

    addMovie = (event) => {
        event.preventDefault();
        this.setState({
            movies: [...this.state.movies, this.state.currentMovie]
        });
    };

    removeMovie = (id) => {
        let movieId = this.state.movies.findIndex(movie => {
            return movie.id === id;
        });
        const movies = [...this.state.movies];
        movies.splice(movieId, 1);
        this.setState({
            ...this.state,
            movies
        });
    };

    getMovies = () => {
        return (
            <Fragment>
                {
                    this.state.movies.map(movie => {
                        return <Movie key={movie.id}
                                      title={movie.title}
                                      onRemoveMovie={() => this.removeMovie(movie.id)}
                                      onMovieChange={(event) => this.onChangeMovie(movie.id, event)}/>
                    })
                }
            </Fragment>
        )
    };


    render() {
        return (
            <div className='container'>
                <h1 className='add_movie'>Добавить фильм</h1>
                <AddMovieForm movie={this.state.currentMovie}
                              onChangeInput={this.movieInput}
                              onAddMovie={this.addMovie}/>
                <div>
                    <p className='watch_list'>To watch list:</p>
                    {this.getMovies()}
                </div>
            </div>
        )
    }
}

export default List;

