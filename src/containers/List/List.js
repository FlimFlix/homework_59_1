import React, {Component, Fragment} from 'react';
import './List.css';
import Movie from "../../components/Movie/Movie";

class List extends Component {
    state = {
        movies: [
            {id: '1', title: 'Гарри Поттер и философский парень', description: 'Жил был да помер'},
            {id: '2', title: 'Властелин колец: Братва и кольцо', description: 'Не менее легендарная пародия на легендарный фильм'},
        ]
    };


    render() {
        return (
            <Fragment>
                <section className="Movies">
                    {this.state.props.map(movie => (
                        <Movie
                        key={movie.id}
                        title={movie.title}
                        description={movie.description}
                        />
                    ))}
                </section>
            </Fragment>
        )
    }
}

export default List;

